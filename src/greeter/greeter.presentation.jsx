import React, { PropTypes } from 'react';
import AutobindComponent from 'autobind-component';
import styles from './greeter.scss';

class Greeter extends AutobindComponent {
  onNameChange(event) {
    const { nameChanged } = this.props;
    return nameChanged(event.target.value);
  }


  render() {
    const { name } = this.props;

    return (
      <div className={ styles.greeter } >
        <span> {name} </span>
        <div>
          <input type="text" className={ styles.greeterContainer } onChange={this.onNameChange} value={name} />
        </div>
      </div>
    );
  }
}

Greeter.propTypes = {
  name: PropTypes.string.isRequired,
  nameChanged: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default Greeter;
