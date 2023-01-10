import React from "react";

class SUV extends React.Component {
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
