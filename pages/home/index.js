import React, { PropTypes } from 'react';
import g from '../global.css';
import s from './home.css';
import Nav from '../../components/nav';
import Big from '../../components/bigPicture';
import Title from '../../components/text/title';
import Add from '../../components/add';
import Goal from '../../components/goal';
import Success from '../../components/modal/success';
import ErrorModal from '../../components/modal/error';
import Settings from '../../components/modal/card';
import {connect} from 'react-redux';
import {updateCountdowns} from '../../core/actions/goals';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      settings:false,
      deadline:false,
      success:false,
      currentSuccess:{},
      currentDeadline:{}
    }
  }

  componentDidMount() {
    setInterval(()=>{this.props.updateCountdowns()}, 1000);
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const {user,stats,goals} = this.props;
    const {settings,success,deadline,currentSuccess,currentDeadline} = this.state;
    return (
      <div>
        <Nav active="index" onClick={()=>{this.setState({settings:true})}} />
        <Title colored={true} text={`Hey ${user.firstName} ${user.lastName}!`}subtext="let's get to work!"/>
        <div onClick={()=>{
          this.setState({
            deadline:true,
            currentDeadline:{
              name:`Those ${stats.goalsFailed}`,
              money:stats.moneyDonated
            }
          })
        }}>
          <Big stats={stats}/>
        </div>
        <Add/>
        <div className={`${s["goals"]}`}>
          {goals.goals.map((g,i)=> {
            return <Goal
              key={i}
              finished={g.finished}
              id={g.id}
              onClick={()=>{this.setState({success:true,currentSuccess:g})}}
              pastDue={g.pastDue}
              time={g.countdownString}
              title={g.name}
              wager={`$${g.money}`}
              description={g.description}
            />
          })}
        </div>
        <ErrorModal goal={currentDeadline} onStatus={(s)=>{this.setState({deadline:s})}} status={deadline}/>
        <Success goal={currentSuccess} onStatus={(s)=>{this.setState({success:s})}} status={success}/>
        <Settings onStatus={(s)=>{this.setState({settings:s})}} status={settings}/>
      </div>
    );
  }
}

HomePage.defaultProps = {
  goals:[]
}

const mapStateToProps = (state, ownProps) => {
  return {
    stats:state.stats,
    user:state.user,
    goals:state.goals
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateCountdowns:()=>{
      dispatch(updateCountdowns())
    }
  }
}

const HomePageRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default HomePageRedux;
