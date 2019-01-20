import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';
import store from '../../store';
import { actions } from '../../ducks/freezer';

class Freezer extends Component {
  state = {
    flavors: store.getState().freezer.flavors,
    temperature: store.getState().freezer.temperature,
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        flavors: store.getState().freezer.flavors,
        temperature: store.getState().freezer.temperature,
      });
    });

    setInterval(() => {
      const randomTemperature = -Math.round(Math.random() * 10);
      store.dispatch(actions.updateTemperature(randomTemperature));
    }, 2000);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleClickRestock = flavorName => {
    const amount = parseInt(window.prompt(`Enter amount to restock ${flavorName}`));
    
    if(!isNaN(amount)) {
      store.dispatch(actions.addProductToFreezer(flavorName, amount));
    }
  };

  render() {
    const flavors = Object.keys(this.state.flavors).map(flavorName => (
      <FreezerFlavor 
        onClickRestock={() => this.handleClickRestock(flavorName)}
        flavorName={flavorName}
        scoops={this.state.flavors[flavorName]}
        key={flavorName}
      />
    ));
        
    return (
      <Panel title={`Freezer (°${this.state.temperature || 0}C)`}>
          {flavors}
      </Panel>
    );
  }
}

export default Freezer;

