import React, { PropTypes } from 'react';
import s from './modal.css';
import Modal from './index';
import Button from '../button'

class Success extends React.Component {

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
    const {onStatus} = this.props;
    const {status} = this.state;
    console.log(status)
    return (<Modal status={status} onStatus={(s)=>{this.setState({status:s})}}>
        <div className={`${s["success"]}`}>
          <div className={`${s["success__header"]}`}>
            <h1 className={`${s["header__title"]}`}>Congraguf**kinglations</h1>
            <h4 className={`${s["header__subtitle"]}`}>You did something in your life!</h4>
          </div>
          <div className={`${s["content"]}`}>
            <p className={`${s["content__description"]}`}>You saved yourself</p>
            <div className={`${s["wallet__wrapper"]}`}>
              <div className={`${s["wallet__money"]}`}>
                $420
              </div>
              <div className={`${s["wallet"]}`}>
              </div>
            </div>
            <div className={`${s["success__button"]}`}>
              <Button style={{backgroundColor:"#415F9D",color:"#FFF"}} onClick={()=>{this.setState({status:!status})}}>Get Back to Work</Button>
            </div>
          </div>
        </div>
      </Modal>)
  }

}

export default Success;
