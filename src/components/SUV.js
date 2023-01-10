import React from "react";
import { MyPureComponent } from "./Sedan";

class SUV extends MyPureComponent {
  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.SUV === this.props.SUV) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render() {
    const { SUV, onSellCar } = this.props;
    return (
      <div>
        {SUV.map((item, index) => {
          return (
            <div key={item.id}>
              <div>{item.model}</div>
              <div>{item.number}</div>
              <button
                onClick={() => {
                  onSellCar(index, "SUV");
                }}
              >{`sell 1 ${item.model}`}</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SUV;
