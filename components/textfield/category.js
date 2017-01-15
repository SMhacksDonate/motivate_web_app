import React, { PropTypes } from 'react';
import s from './textfield.css';

class CatSelect extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
    }
  }

  static propTypes = {
  }

  render() {
    const {onChange,label,selected,cats,style} = this.props;
    return (
      <div className={`${s["text-input"]}`}>
        <p className={`${s["text-input__label"]}`}>{label}</p>
        <div className={`${s["text-categories"]}`}>
          {cats.map((c,i)=>{
            return <div style={style} onClick={()=>{onChange(c)}} className={`${s["text-category"]} ${s["text-category--" + (i==selected ? "select":"normal")]}`} key={i}>
              {c}
            </div>
          })}
        </div>
      </div>
    );
  }

}

CatSelect.defaultProps = {
  cats:[]
}

export default CatSelect;
