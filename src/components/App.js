import React from 'react';
import Header from './Header';  // Remember that we are selecting Header from within the components folder
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  render() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header age="5000" cool={true} tagline="Paco is cool"/>
          {/* <Header tagline="Fresh Seafood Market"/> */}
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;