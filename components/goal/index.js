import React, { PropTypes } from 'react';
import s from './goal.css';
import Button from '../button/'

class Goal extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
    }
  }

  static propTypes = {
  }

  render() {
    const {onClick,children,title,description,time,wager} = this.props;
    return (<div className={`${s["goal"]}`}>
      <div className={`${s["goal__content"]}`}>
        <h1 className={`${s["goal__time"]}`}>{time}</h1>
        <h2 className={`${s["goal__title"]}`}>{title}</h2>
        <div style={{display:"flex"}}>
          <h2 className={`${s["goal__money"]}`}>{wager}</h2>
        </div>
        <p className={`${s["goal__description"]}`}>{description}</p>
        <div className={`${s["goal__links"]}`}>
          <Button style={{backgroundColor:"#415F9D",color:"#FFF"}} onClick={()=>{this.setState({})}}>Complete</Button>
          <a className={`${s["goal__link"]}`}>I Give Up</a>
          <a className={`${s["goal__link"]}`}>Raise the wager</a>
        </div>
      </div>
    </div>);
  }

}

export default Goal;
