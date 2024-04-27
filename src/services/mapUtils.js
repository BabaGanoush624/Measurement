// importing the required registries
import { apiRegistry, actionsRegistry, geometryService } from "@penta-b/ma-lib";
import { getArea, getLength } from "ol/sphere.js";
import { callQueryService } from "./queryService";
import { LineString } from "ol/geom.js";

//Global declaration
let VL = null;
let drawing = null;
let overlayArray = [];


export const validateVL = (options) => {
  if (VL && options.clear) {
    resetLayer();
  }
}
// Checking the if the vector layer already exists to clear all the features on it
export const drawShape = async (layer, func, code) => {
  if (!VL) {
    //getting the vectorLayer and drawing Functionality (classes) from penta's redux
    const [VectorLayer, Drawing, Overlay] = await apiRegistry.getApis(["VectorLayer", "Drawing", "Overlay"]);
    VL = new VectorLayer();
    drawing = new Drawing({
      type: "polygon",
      vectorLayer: VL,
    })
    //adding the vectorLayer and the drawing to the map
    actionsRegistry.dispatch("addVectorLayer", VL);
    actionsRegistry.dispatch("addInteraction", drawing);
    //what happens when the drawing starts
    drawing.setOnDrawStart((_, feature) => {
      feature.olFeature.getGeometry().on("change", (e) => {
        console.log("geometry Ol", feature.olFeature.getGeometry().getCoordinates()[0]);
        let geom = e.target;
        let coordinates = geom.getCoordinates()[0];
        // console.log("coordinatesOnStart", coordinates);
        clearOverlay();
        for (let i = 0; i < coordinates.length - 1; i++) {
          const startingLine = coordinates[i];
          const nextLine = coordinates[i + 1];
          const length = getLength(new LineString([startingLine, nextLine]), { projection: code });
          // console.log(new LineString([start, end]))
          const lineLengthInKm = length / 1000;
          const midLine = [
            (startingLine[0] + nextLine[0]) / 2,
            (startingLine[1] + nextLine[1]) / 2,
          ];

          let el = document.createElement("div");
          el.innerHTML = `${lineLengthInKm.toFixed(1)} km`;
          lengthStyle(el)
          let ovv = new Overlay({
            element: el,
            position: midLine,
          });
          overlayArray.push(ovv);
          actionsRegistry.dispatch("addOverlay", ovv);
        }
      });
    });
    //what happens when the drawing finishes...
    drawing.setOnDrawFinish(async (feature) => {
      //structure definition
      const geom = feature.getGeometry(); // getting the geometry of the feature
      const coordinates = feature.olFeature.getGeometry().getCoordinates()[0]; //getting coords to calc length later
      const centerPoint = geometryService.center(feature.getFeatureGeoJson()); //creating a center point

      //clearing the vectorLayer and adding the drawing to it
      addFeature(feature);
      clearOverlay();

      //returning the features from the intersection of the drawn shape with the map and adding the overlays
      await callQueryService(layer, func, geom);
      await overlayArea(feature, code, centerPoint);
      overlayLine(coordinates, code);
    });
  };
};


/* const area = getArea(olGeom);
const length = getLength(olGeom); */

// a function to clear the map after the previous drawing is finished and to add the next drawing
function addFeature(feat) {
  VL.clear();
  VL.addFeature(feat)
};

//function to calculate the area of the drawn Feature
function calcArea(feat, code) {
  const area = getArea(feat.olFeature.getGeometry(), { projection: code });
  return area
}
//creating LineLengths overLay of the drawn Feature
async function overlayLine(coordinates, code) {
  for (let i = 0; i < coordinates.length - 1; i++) {
    const startingLine = coordinates[i];
    const nextLine = coordinates[i + 1];
    const origLine = [startingLine, nextLine];
    const middle = [
      (startingLine[0] + nextLine[0]) / 2,
      (startingLine[1] + nextLine[1]) / 2,
    ];
    const line = new LineString(origLine);
    const length = getLength(line, { projection: code })
    const lengthInKm = length / 1000;
    const lengthEl = document.createElement("div");
    lengthEl.innerText = `${lengthInKm.toFixed(1)} Km`;
    lengthStyle(lengthEl)
    const [Overlay] = await apiRegistry.getApis(["Overlay"]);
    const overlayLine = new Overlay({
      element: lengthEl,
      position: middle,
    });
    overlayArray.push(overlayLine);
    actionsRegistry.dispatch("addOverlay", overlayLine);
  }
}
// creating overLay with the area of the drawn Feature
async function overlayArea(feat, code, center) {
  const area = calcArea(feat, code);
  const areaInKmSq = area / (1000 * 1000);
  const areaEl = document.createElement("div");
  areaEl.innerHTML = `${areaInKmSq.toFixed(2)} km&sup2`;
  //setting the style
  areaStyle(areaEl);
  //adding the overlay
  const [Overlay] = await apiRegistry.getApis(["Overlay"]);
  const overlayArea = new Overlay({
    element: areaEl,
    position: center.geometry.coordinates,
    positioning: "center-center"
  });
  overlayArray.push(overlayArea);
  await actionsRegistry.dispatch("addOverlay", overlayArea);
}
//clearing the overlay
function clearOverlay() {
  overlayArray.forEach((overlay) => { actionsRegistry.dispatch("removeOverlay", overlay) })
  overlayArray = [];
}

//function to reset and clear the layers of all the feautres and the overlays on it
function resetLayer() {
  VL.clear();
  actionsRegistry.dispatch("removeInteraction", drawing);
  VL = null;
  clearOverlay();
}

//Length Style 
function lengthStyle(el) {
  return el.style = "opacity: 1;" +
    " font-weight: bold;" +
    "position: relative; " +
    "border-radius: 4px;" +
    "color: whitesmoke;" +
    "padding: 4px 8px;" +
    "opacity: 0.7;" +
    "white-space: nowrap;" +
    "font-size: 12px; " +
    "background-color: #000;";
}
//Area Style
function areaStyle(el) {
  return el.style = "opacity: 1;" +
    " font-weight: bold;" +
    "position: relative; " +
    "border-radius: 4px;" +
    "color: black;" +
    "padding: 4px 8px;" +
    "white-space: nowrap;" +
    "font-size: 12px; " +
    "background-color: #F28C28";
}
