import React, { PropTypes } from 'react';
import s from './modal.css';
import Modal from './index';
import Button from '../button'

class Error extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      status:true
    }
    const {} = props;
  }

  static propTypes = {
  }

  render() {
    const {onStatus,status,goal} = this.props;
    return (<Modal status={status} onStatus={(s)=>{onStatus(s)}}>
        <div className={`${s["error"]}`}>
          <div className={`${s["error__header"]}`}>
            <h1 className={`${s["header__title"]}`}>Well, your money goes to a great cause!</h1>
            <h4 className={`${s["header__subtitle"]}`}>Don't feel too bad... {goal.name} aren't that important.</h4>
          </div>
          <div className={`${s["content"]}`}>
            <p className={`${s["content__description"]}`}>You donated</p>
            <div className={`${s["wallet__wrapper"]}`}>
              <div className={`${s["wallet__money"]}`}>
                ${goal.money}
              </div>
              <div className={`${s["wallet"]}`}>
              </div>
              <p className={`${s["content__description"]}`}><a className={`${s["content__link"]}`}>Check the receipt</a> for Computers for Africa.</p>
            </div>
            <div className={`${s["modal__button"]}`}>
              <Button style={{backgroundColor:"#415F9D",color:"#FFF"}} onClick={()=>{onStatus(!status)}}>Get Back to Work</Button>
            </div>
          </div>
        </div>
      </Modal>)
  }

}

export default Error;
