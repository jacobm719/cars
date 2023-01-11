import React from "react";

// export class MyPureComponent extends React.Component {
//   shouldComponentUpdate(nextProps, newState) {
//     if (true) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// class Sedan extends MyPureComponent {
class Sedan extends React.Component {
  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.Sedan === this.props.Sedan) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  //   if (
  //     nextProps.Sedan.every((car, index) =>
  //       Object.entries(car).every(([key, value]) => {
  //         return this.props.Sedan[index][key] === value;
  //       })
  //     ) &&
  //     nextProps.onSellCar.toString() === this.props.onSellCar.toString()
  //   ) {
  //   } else {
  //   }
  // }

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
