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
    const {onChange,value,label,placeholder,type} = this.props;
    return (
      <div className={`${s["text-input"]}`}>
        <p className={`${s["text-input__label"]}`}>{label}</p>
        <input placeholder={placeholder} className={`${s["text-input__form"]}`} value={value} type={type} onChange={(e)=>{onChange(e.target.value)}}/>
      </div>
    );
  }

}

Textfield.defaultProps = {
  type:"text"
}

export default Textfield;
