import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onChange, onSubmit }) => {
  return (
    <div>
      <p className="f3">This is a testing app.</p>
      <div className="center">
        <div style={{width: 700}} className="pa4 br3 shadow-5 center form">
          <input className="f4 pa2 w-80 center" type="text" onChange={onChange}/>
          <button onClick={onSubmit} className="w-20 grow f4 link ph3 pv2 dib white bg-light-purple">
            asdf
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
