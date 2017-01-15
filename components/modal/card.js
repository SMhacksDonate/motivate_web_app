import React, { PropTypes } from 'react';
import s from './modal.css';
import Modal from './index';
import Button from '../button';
import Textfield from '../textfield';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      card:"",
      date:"",
      cvs:""
    }
    const {} = props;
  }

  static propTypes = {
  }

  render() {
    const {onStatus,status} = this.props;
    return (<Modal status={status} onStatus={(s)=>{onStatus(s)}}>
        <div className={`${s["card"]}`}>
          <div className={`${s["card__header"]}`}>
            <h1 className={`${s["header__title"]}`}>Settings</h1>
            <h4 className={`${s["header__subtitle"]}`}>Remember, procasinating is good...</h4>
          </div>
          <div className={`${s["content"]}`}>
            <div style={{display:"flex"}}>
              <div className={`${s["content__half"]}`}>
                <p className={`${s["content__description"]}`}>Credit Card</p>
                <Textfield placeholder="0000 0000 0000" value={""} label="Card Number" onChange={(v)=>{this.setState({card:v})}} />
                <Textfield placeholder="XX/XX" value={""} label="Expiration Date" onChange={(v)=>{this.setState({date:v})}} />
                <Textfield type="password" placeholder="000" value={""} label="CVS (?)" onChange={(v)=>{this.setState({date:v})}} />
              </div>
              <div className={`${s["content__half"]}`}>
                <p className={`${s["content__description"]}`}>User</p>
                <Textfield placeholder="Johny Appleseed" value={""} label="Your Name" onChange={(v)=>{this.setState({card:v})}} />
                <Textfield placeholder="Mr. Johny Appleseed" value={""} label="Donate under name" onChange={(v)=>{this.setState({card:v})}} />
              </div>
            </div>
            <div className={`${s["success__button"]}`}>
              <Button style={{backgroundColor:"#415F9D",color:"#FFF"}} onClick={()=>{onStatus(!status)}}>Done</Button>
            </div>
          </div>
        </div>
      </Modal>)
  }

}

export default Card;
