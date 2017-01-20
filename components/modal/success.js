import React, { PropTypes } from 'react';
import s from './modal.css';
import Modal from './index';
import Button from '../button'

class Success extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
  }

  static propTypes = {
  }

  render() {
    const {onStatus,status,goal} = this.props;
    console.log(status);
    return (<Modal status={status} onStatus={(s)=>{onStatus(s)}}>
        <div className={`${s["success"]}`}>
          <div className={`${s["success__header"]}`}>
            <h1 className={`${s["header__title"]}`}>Congratulations</h1>
            <h4 className={`${s["header__subtitle"]}`}>You finished {goal.name}.</h4>
          </div>
          <div className={`${s["content"]}`}>
            <p className={`${s["content__description"]}`}>You saved yourself</p>
            <div className={`${s["wallet__wrapper"]}`}>
              <div className={`${s["wallet__money"]}`}>
                ${goal.money}
              </div>
              <div className={`${s["wallet"]}`}>
              </div>
            </div>
            <div className={`${s["success__button"]}`}>
              <Button style={{backgroundColor:"#415F9D",color:"#FFF"}} onClick={()=>{onStatus(!status)}}>Get Back to Work</Button>
            </div>
          </div>
        </div>
      </Modal>)
  }

}

export default Success;
