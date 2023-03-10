import React from "react";
import Sedan from "./Sedan";
import SUV from "./SUV";

// class MyPureComponent extends React.Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextProps === null || nextState === null) {
//       if (nextProps === null && nextState === null) {
//         return true;
//       }
//     } else {
//       if (
//         Object.keys(nextProps).length !== Object.keys(this.props) ||
//         Object.keys(nextState).length !== Object.keys(this.state)
//       ) {
//         return true;
//       }
//       if (
//         Object.keys(nextProps).every(([key, value]) => {
//           return this.props[key] === value;
//         }) &&
//         Object.keys(nextState).every(([key, value]) => {
//           return this.state[key] === value;
//         })
//       ) {
//         return false;
//       }
//       return true;
//     }
//   }
// }

class Cars extends React.Component {
  state = {
    carsData: {
      cars: {
        sedan: [
          {
            id: 1,
            model: "camry",
            number: 1,
          },
          {
            id: 2,
            model: "accord",
            number: 2,
          },
        ],
        SUV: [
          {
            id: 3,
            model: "escape",
            number: 1,
          },
        ],
      },
      totalNumber: 4,
    },
  };

  //   constructor(props) {
  //     super(props);
  //     this.handleSellCar = this.handleSellCar.bind(this);
  //   }

  //   handleSellCar(index, category) {
  //     console.log("selling car", index, category);
  //     this.state.carsData.cars[category].splice(index, 1);
  //   }

  handleSellCar = (index, category) => {
    // mutating original copy
    // const newState = { ...this.state };
    // newState.carsData.cars[category][index].number =
    //   newState.carsData.cars[category][index].number - 1;
    // this.setState(newState);

    // const newState = JSON.parse(JSON.stringify(this.state));

    //   const newState = {
    //     ...this.state,
    //     carsData: {
    //       ...this.state.carsData,
    //       cars: {
    //         ...this.state.carsData.cars,
    //         sedan: this.state.carsData.sedan.map((item, index) => {
    //           if (index === 0) {
    //             return { ...item, number: item.number - 1 };
    //           } else {
    //             return item;
    //           }
    //         }),
    //       },
    //     },
    //   };
    //   this.setState(newState);
    // };

    if (this.state.carsData.cars[category][index].number === 0) return;
    this.setState((prev) => {
      return {
        ...prev,
        carsData: {
          ...prev.carsData,
          cars: {
            ...prev.carsData.cars,
            [category]: [
              ...prev.carsData.cars[category].slice(0, index),
              {
                ...prev.carsData.cars[category][index],
                number: prev.carsData.cars[category][index].number - 1,
              },
              ...prev.carsData.cars[category].slice(index + 1),
            ],
            // ...prev.carsData.cars[category].map((item, innerIndex) => {
            //   if (index === innerIndex) {
            //     return {
            //       ...prev.carsData.cars[category][index],
            //       number: prev.carsData.cars[category][index].number - 1,
            //     };
            //   } else {
            //     return item;
            //   }
            // }),
          },
          totalNumber:
            Object.keys(prev.carsData.cars).reduce(
              (totalNumber, category) =>
                totalNumber +
                prev.carsData.cars[category].reduce(
                  (totalNumOfEachCar, eachCar) =>
                    totalNumOfEachCar + eachCar.number,
                  0
                ),
              0
            ) - 1,
        },
      };
    });
  };
  render() {
    return (
      <div className="cars">
        <header>
          <h1>{`total inventory: ${this.state.carsData.totalNumber}`}</h1>
        </header>
        <div className="cars__container">
          <Sedan
            Sedan={this.state.carsData.cars.sedan}
            onSellCar={this.handleSellCar}
          />
          <SUV
            SUV={this.state.carsData.cars.SUV}
            onSellCar={this.handleSellCar}
          />
        </div>
      </div>
    );
  }
}

export default Cars;
