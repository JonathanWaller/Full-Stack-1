import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      imgPreview: "http://new.real-helmets.com/images/tile-empty.png",
      nameInput: "",
      priceInput: 0,
      imgUrl: ""
    };
    this.nameHandler = this.nameHandler.bind(this);
  }

  nameHandler(e) {
    this.setState({
      nameInput: e.target.value
    });
  }

  priceHandler = e => {
    this.setState({
      priceInput: e.target.value
    });
  };

  imgHandler(e) {
    this.setState({
      imgUrl: e.target.value
    });
    this.setState({
      imgPreview: e.target.value
    });
  }

  handleClick() {
    this.setState({
      nameInput: "",
      priceInput: 0,
      imgUrl: "",
      imgPreview: "http://new.real-helmets.com/images/tile-empty.png"
    });
  }

  render() {
    return (
      <div className="mainform">
        <img src={this.state.imgPreview} className="imgpreview" alt="" />
        <div>Image URL:</div>
        <input
          onChange={e => this.imgHandler(e)}
          placeholder="enter image URL"
          value={this.state.imgUrl}
        />
        <div>Product Name:</div>
        <input
          onChange={e => this.nameHandler(e)}
          placeholder="enter name"
          value={this.state.nameInput}
        />
        <div>Price:</div>
        <input
          onChange={e => this.priceHandler(e)}
          placeholder="enter price"
          value={this.state.priceInput}
        />

        {/* <img src={this.state.imgUrl} /> */}

        <button onClick={() => this.handleClick()}>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    );
  }
}

export default Form;
