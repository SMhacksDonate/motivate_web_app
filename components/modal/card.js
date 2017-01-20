import React, { PropTypes } from 'react';
import s from './modal.css';
import Modal from './index';
import Button from '../button';
import Textfield from '../textfield';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      card:"5105 1051 0510 5100",
      date:"03/19",
      cvs:"548",
      name:"Avik Jain",
      doner:"Anonymous"
    }
    const {} = props;
  }

  static propTypes = {
  }

  render() {
    const {onStatus,status} = this.props;
    const {card,date,cvs,name,doner} = this.state;
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
                <Textfield placeholder="0000 0000 0000" value={card} label="Card Number" onChange={(v)=>{this.setState({card:v})}} />
                <Textfield placeholder="XX/XX" value={date} label="Expiration Date" onChange={(v)=>{this.setState({date:v})}} />
                <Textfield type="password" placeholder="000" value={cvs} label="CVS (?)" onChange={(v)=>{this.setState({cvs:v})}} />
              </div>
              <div className={`${s["content__half"]}`}>
                <p className={`${s["content__description"]}`}>User</p>
                <Textfield placeholder="Johny Appleseed" value={name} label="Your Name" onChange={(v)=>{this.setState({name:v})}} />
                <Textfield placeholder="Mr. Johny Appleseed" value={doner} label="Donate under name" onChange={(v)=>{this.setState({doner:v})}} />
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
