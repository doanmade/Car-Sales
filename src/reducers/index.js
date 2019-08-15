export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
}; 

export const carReducer = (state = initialState, action) => {
  const demo = state.car.features.filter(
    feature => feature.id === action.payload.id
  );
  console.log("demo", demo.length);
  switch (action.type) {
    case "ADD_FEATURE":
      return {
        ...state,
        additionalPrice:
          state.car.features.filter(feature => feature.id === action.payload.id)
            .length > 0
            ? state.additionalPrice
            : state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features:
            state.car.features.filter(
              feature => feature.id === action.payload.id
            ).length > 0
              ? state.car.features
              : [...state.car.features, action.payload]
        }
      };
    case "DELETE_FEATURE":
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(
            feature => feature.id !== action.payload.id
          )
        }
      };
    default:
      return state;
  }
};
