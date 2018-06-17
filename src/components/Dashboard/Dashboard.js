import React, { Component } from "react";
import "./Dashboard.css";
import Product from "../Product/Product";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    // console.log(this.props.items);
    let myItems = this.props.items.map((item, ind) => {
      return (
        <div key={item.id} className="itemcard">
          <img src={item.image_url} width="60" height="80" />
          <div className="nexttoimg">
            <div>{item.name}</div>
            <div>${item.price}</div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="dashmain">
          Dashboard
          <Product />
          {myItems}
        </div>
      </div>
    );
  }
}

export default Dashboard;
