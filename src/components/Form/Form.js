import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPreview: "http://new.real-helmets.com/images/tile-empty.png",
      nameInput: "",
      priceInput: 0,
      imgUrl: "",
      items: []
    };
    this.nameHandler = this.nameHandler.bind(this);
    this.priceHandler = this.priceHandler.bind(this);
    this.imgHandler = this.imgHandler.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
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

  cancelHandler() {
    this.setState({
      nameInput: "",
      priceInput: 0,
      imgUrl: "",
      imgPreview: "http://new.real-helmets.com/images/tile-empty.png"
    });
  }

  addHandler(name, price, image_url) {
    axios.post("/api/item", { name, price, image_url });
    this.props.getItems();
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

        <button onClick={() => this.cancelHandler()}>Cancel</button>
        <button
          onClick={() =>
            this.addHandler(
              this.state.nameInput,
              this.state.priceInput,
              this.state.imgUrl
            )
          }
        >
          Add to Inventory
        </button>
      </div>
    );
  }
}

export default Form;
