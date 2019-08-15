export const addFeature = feature => {
  console.log("feature :", feature);
  return {
    type: "ADD_FEATURE",
    payload: feature
  };
};

export const deleteFeature = feature => {
  return {
    type: "DELETE_FEATURE",
    payload: feature
  };
};
