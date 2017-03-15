import React, { PropTypes } from 'react';
import AutobindComponent from 'autobind-component';
import styles from './counter.scss';

class Counter extends AutobindComponent {
  onAdd() {
    const { onAdd, value } = this.props;

    return onAdd(value + 5);
  }

  onAddSlow() {
    const { onAddSlowly, value } = this.props;

    return onAddSlowly(value + 5);
  }


  render() {
    const { value, t } = this.props;

    return (<div className={ styles.counter }>
      <h4 className={ styles.counterNumber }>{ value }</h4>
      <button onClick={ this.onAdd }>{ t('counter:add') }</button>
      <button onClick={ this.onAddSlow }>{ t('counter:add_slowly') }</button>
    </div>);
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onAddSlowly: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default Counter;
