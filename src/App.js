import React, { Component } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

const app = new Clarifai.App({
  apiKey: "c133ba47fd594c4bb5b8b217507eb7bf"
});

const bgSpecs = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {}
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(clarifaiFace);
    this.setState({ 
      box: {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)  
    }})
};

  onChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {    
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then((response) => {
        this.calculateFaceLocation(response);
      },
      function(err) {
        console.log(err);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={bgSpecs} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onChange={this.onChange} onSubmit={this.onSubmit} />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
