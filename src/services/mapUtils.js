// importing the required registries
import { apiRegistry, actionsRegistry, geometryService } from "@penta-b/ma-lib";
import { getArea, getLength } from "ol/sphere.js";
import { callQueryService } from "./queryService";
import { LineString } from "ol/geom";

//vectorLayer declaration
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
    const [VectorLayer] = await apiRegistry.getApis(["VectorLayer"]);
    VL = new VectorLayer();
    actionsRegistry.dispatch("addVectorLayer", VL);
    const [Drawing] = await apiRegistry.getApis(["Drawing"]);
    drawing = new Drawing({
      type: "polygon",
      vectorLayer: VL,
    })
    actionsRegistry.dispatch("addInteraction", drawing);
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
    const el = document.createElement("div");
    // how do make each unique length show?
    el.innerText = `${lengthInKm.toFixed(1)} Km`;
    el.style.color = "#610030";
    const [Overlay] = await apiRegistry.getApis(["Overlay"]);
    const overlayLine = new Overlay({
      element: el,
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
  areaEl.style.color = "#610030";
  areaEl.style.fontSize = "0.8rem";
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

//function to reset the clear the layers of all the feautres and the overlays on it
function resetLayer() {
  VL.clear();
  actionsRegistry.dispatch("removeInteraction", drawing);
  VL = null;
  clearOverlay();
}