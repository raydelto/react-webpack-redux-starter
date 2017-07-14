import React, { PropTypes } from 'react';
import AutobindComponent from 'autobind-component';
import styles from './counter.scss';

class Counter extends AutobindComponent {
  onAdd() {
    const { onAdd, value } = this.props;

    return onAdd(value + 1);
  }

  onNameChange() {
    const { onNameChange } = this.props;
    return onNameChange();
  }

  onRandomPositive() {
    const { onRandomPositive, value } = this.props;

    return onRandomPositive(value);
  }

  onRandomNegative() {
    const { onRandomNegative, value } = this.props;

    return onRandomNegative(value);
  }


  render() {
    const { name, value, t } = this.props;
    let displayName = '';
    if(name) {
      displayName = name.name;
    }

    return (<div className={styles.counter}>
      <h4> Name:  {displayName}</h4>
      <h4 className={styles.counterNumber}>{value}</h4>
      <button onClick={this.onNameChange}>Get Name</button>      
      <button onClick={this.onAdd}>{t('counter:add')}</button>
      <button onClick={this.onRandomPositive}>{t('counter:add_random_positive')}</button>
      <button onClick={this.onRandomNegative}>{t('counter:add_random_negative')}</button>
    </div>);
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRandomNegative: PropTypes.func.isRequired,
  onRandomPositive: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default Counter;
