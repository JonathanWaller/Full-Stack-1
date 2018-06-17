import React, { Component } from "react";
import "./Dashboard.css";
import Product from "../Product/Product";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  deleteHandler = id => {
    axios.delete(`/api/item/${id}`);
    this.props.getItems();
  };

  render(props) {
    // console.log(this.props.items);
    let myItems = this.props.items.map((item, ind) => {
      return (
        <Product
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          image_url={item.image_url}
          deleteHandler={this.deleteHandler}
        />

        // <div key={item.id} className="itemcard">
        //   <img src={item.image_url} className="img" alt="howdy" />
        //   <div className="nexttoimg">
        //     <div>{item.name}</div>
        //     <div>${item.price}</div>
        //   </div>
        // </div>
      );
    });
    return (
      <div>
        <div className="dashmain">
          {/* <Product /> */}
          {myItems}
        </div>
      </div>
    );
  }
}

export default Dashboard;
