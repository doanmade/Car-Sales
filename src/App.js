import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { addFeature, deleteFeature } from "./actions/index";

import { connect } from "react-redux";

const App = props => {
  console.log("props", props);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} delete={props.deleteFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} addFeature={props.addFeature} />
        <Total />
      </div>
    </div>
  ); 
};

const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store
  };
};

export default connect(
  mapStateToProps,
  { addFeature, deleteFeature }
)(App);
