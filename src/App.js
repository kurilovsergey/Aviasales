import React, {Component} from 'react';
import './App.css';
import Menu from './components/Menu.jsx';
import Tikets from './components/Tikets.jsx';
import store from "./store"


class App extends Component  {
  state = {
    dataTicket: {tickets:[]},
    stops: {noStops: true,
            oneStop: false,
            twoStop: false,
            threeStop: false,
            allStops: false},
    currency: "rub"
  };

  currencyClick = (e) => {
    const curr = e.target.id;
    this.setState({currency: curr });
  }


   render() {
  return (
      <div className='app-wrapper'>
          <div className='logoaviasales'><img src="https://marinarodkin.github.io/aviasales-app/img/logo.png"></img></div>
          <div className = "container">
          <Menu stopsClick = {this.stopsClick} currencyClick = {this.currencyClick} stopsData = {this.state.stops} currency = {this.state.currency}/>
          <div className = "ticket-list">
            {store.map((item, index) =>
             <Tikets origin = {item.origin} originName = {item.origin_name} destination = {item.destination}
                                            destinationName = {item.destination_name} departureDate = {item.departure_date} departureTime = {item.departure_time}
                                            arrivalDate = {item.arrival_date} arrivalTime = {item.arrival_time} carrier={item.carrier} stops = {item.stops} price = {item.price} currency = {this.state.currency} key = {index}/>)
                                          }
          </div>
        </div>
      </div>
  );
}
}

export default App;