import React, { Component } from 'react';

class Menu extends Component {
    render() {
    return (
        <div className="sidebar">
        <div className = "sidebar_btn-group">
          <h2 className = "sidebar_title">ВАЛЮТА</h2>
          <div className = "sidebar_currency-btns">
            <input type = "radio" id="rub" className = "sidebar_currency-btn"  onChange = {this.props.currencyClick} checked = {this.props.currency === "rub"} />
            <label htmlFor = "rub" className = "sidebar_currency-label sidebar_currency-label--rub" >RUB</label>
            <input type = "radio" id="usd" className = "sidebar_currency-btn" onChange = {this.props.currencyClick} checked = {this.props.currency === "usd"}  />
            <label htmlFor ="usd" className = "sidebar_currency-label sidebar_currency-label--usd">USD</label>
            <input type = "radio" id="eur" className = "sidebar_currency-btn " onChange = {this.props.currencyClick} checked = {this.props.currency === "eur"} />
            <label htmlFor ="eur" className = "sidebar_currency-label sidebar_currency-label--eur">EUR</label>
          </div>
          <h2 className = "sidebar_title">количество пересадок</h2>
          <div className = "sidebar_changing-checkboxes">
            <div className = "sidebar_changing-block">
              <input type = "checkbox" id="allStops" className = "sidebar_changing-checkbox " onChange = {this.props.stopsClick} checked = {this.props.stopsData.allStops} />
              <label htmlFor = "allStops" className = "sidebar_changing-label">Все</label>
            </div>
            <div className = "sidebar_changing-block">
              <input type = "checkbox" id="noStops" className = "sidebar_changing-checkbox" onChange = {this.props.stopsClick} checked = {this.props.stopsData.noStops}  />
              <label htmlFor = "noStops" className = "sidebar_changing-label">Без пересадок</label>
            </div>
            <div className = "sidebar_changing-block">
              <input type = "checkbox" id="oneStop" className = "sidebar_changing-checkbox" onChange = {this.props.stopsClick} checked = {this.props.stopsData.oneStop}/>
              <label htmlFor = "oneStop" className = "sidebar_changing-label">1 пересадка</label>
            </div>
            <div className = "sidebar_changing-block">
              <input type = "checkbox" id="twoStop" className = "sidebar_changing-checkbox" onChange = {this.props.stopsClick} checked = {this.props.stopsData.twoStop} />
              <label htmlFor = "twoStop" className = "sidebar_changing-label">2 пересадка</label>
            </div>
            <div className = "sidebar_changing-block">
              <input type = "checkbox" id="threeStop" className = "sidebar_changing-checkbox" onChange = {this.props.stopsClick} checked = {this.props.stopsData.threeStop} />
              <label htmlFor = "threeStop" className = "sidebar_changing-label">3 пересадка</label>
            </div>
          </div>
        </div>
      </div>
    )
}
}

export default Menu