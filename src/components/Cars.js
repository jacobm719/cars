import React from "react";
import Sedan from "./Sedan";
import SUV from "./SUV";

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
        ],
        SUV: [
          {
            id: 2,
            model: "escape",
            number: 1,
          },
        ],
      },
      totalNumber: 2,
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
          totalNumber: prev.carsData.totalNumber - 1,
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
