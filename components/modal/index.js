import React, { PropTypes } from 'react';
import s from './modal.css';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
  }

  static propTypes = {
  }

  render() {
    const {onStatus,status,children} = this.props;
    return (<div className={`${s["modal"]}  ${s["modal--" + (status ? "open":"close")]}`}>
      <div onClick={()=>{onStatus(!status)}} className={`${s["modal__background"]}`}></div>
      <div className={`${s["modal__content"]}`}>
        {children}
      </div>
    </div>);
  }

}

export default Modal;
