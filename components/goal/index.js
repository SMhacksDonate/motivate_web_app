import React, { PropTypes } from 'react';
import s from './goal.css';
import Button from '../button/'
import {connect} from 'react-redux';
import {completeGoal} from '../../core/actions/goals';

const timeString = (finished,pastDue,time)=>{
  if(finished) {
    return "Done"
  }
  if(pastDue) {
    return "So Generous"
  }
  return time
}
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
    const {onClick,children,title,description,time,wager,completeGoal,id,pastDue,finished} = this.props;
    return (<div className={`${s["goal"]} ${s["goal--" + ((pastDue || finished) ? "due":"running")]}`}>
      <div className={`${s["goal__content"]}`}>
        <h1 className={`${s["goal__time"]}`}>{timeString(finished,pastDue,time)}</h1>
        <h2 className={`${s["goal__title"]}`}>{title}</h2>
        <div style={{display:"flex"}}>
          <h2 className={`${s["goal__money"]}`}>{wager}</h2>
        </div>
        <p className={`${s["goal__description"]}`}>{description}</p>
        <div className={`${s["goal__links"]}`}>
          {(()=>{
            if(!finished)
              return <Button style={{backgroundColor:"#415F9D",color:"#FFF"}} onClick={()=>{onClick(id);completeGoal(id)}}>Complete</Button>
            else
              return <Button style={{backgroundColor:"#415F9D",color:"#FFF",opacity:0.5}} onClick={()=>{completeGoal(id)}}>You done</Button>
          })()}
          <a className={`${s["goal__link"]}`}>I Give Up</a>
          <a className={`${s["goal__link"]}`}>Raise the wager</a>
        </div>
      </div>
    </div>);
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    completeGoal: (id)=> {
      dispatch(completeGoal(id));
    }
  }
}

const GoalRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Goal)

export default GoalRedux;
