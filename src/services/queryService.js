import {
  store,
  query,
  systemShowLoading,
  systemHideLoading,
} from "@penta-b/ma-lib";

const genQueryBody = (layer, geometry) => {
  return [
    {
      dataSource: {
        id: layer[0].id,
      },
      filter: {
        conditionList: [
          {
            key: layer[0].geometryField.fieldName,
            geometry: JSON.stringify(geometry),
            spatialRelation: "INTERSECT",
          },
        ],
      },
      crs: layer[0].crs,
    },
  ];
};

export const callQueryService = async (layer, action, geometry) => {
  store.dispatch(systemShowLoading());
  query
    .queryFeatures(genQueryBody(layer, geometry))
    .then((response) => {
      action(response);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      store.dispatch(systemHideLoading());
    });
};
