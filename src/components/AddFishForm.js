import React from 'react';
import PropTypes from 'prop-types';


class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault();
    console.log('Gonna make some fish!')
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }
    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render() {
    return(
      <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        {/* a comment in here */}
        <input ref={(input) => this.name = input} type="text" placeholder="Fish name" />
        <input ref={(input) => this.price = input} type="text" placeholder="Fish price" />
        <select ref={(input) => this.status = input}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={(input) => this.desc = input} type="text" placeholder="Fish desc"></textarea>
        <input ref={(input) => this.image = input} type="text" placeholder="Fish Image" />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

AddFishForm.propTypes = {
  addFish: PropTypes.func.isRequired
}

export default AddFishForm;
