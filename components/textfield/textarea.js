import React, { PropTypes } from 'react';
import s from './textfield.css';

class Textfield extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
    }
  }

  static propTypes = {
  }

  render() {
    const {onChange,value,label,placeholder} = this.props;
    return (
      <div className={`${s["text-input"]}`}>
        <p className={`${s["text-input__label"]}`}>{label}</p>
        <textarea placeholder={placeholder} className={`${s["text-input__form"]} ${s["text-input__form--area"]}`} value={value} onChange={(e)=>{onChange(e.target.value)}}/>
      </div>
    );
  }

}

export default Textfield;
