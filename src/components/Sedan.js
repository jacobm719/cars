import React from "react";

class Sedan extends React.Component {
  render() {
    const { Sedan, onSellCar } = this.props;
    return (
      <div>
        {Sedan.map((item, index) => {
          return (
            <div key={item.id}>
              <div>{item.model}</div>
              <div>{item.number}</div>
              <button
                onClick={() => {
                  onSellCar(index, "sedan");
                }}
              >{`sell 1 ${item.model}`}</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Sedan;
