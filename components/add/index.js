import React, { PropTypes } from 'react';
import s from './add.css';
import Textfield from '../textfield'
import Textarea from '../textfield/textarea'
import CatSelect from '../textfield/category'
import Button from '../button/'
import {connect} from 'react-redux';
import {addGoal} from '../../core/actions/goals';

const wagerMap = {
  "$1":1.00,
  "$0.5":.50,
  "$0.1":.10,
  "$5":5.00,
  "$10":10.00
}

const deadlineMap = {
  "In 1 minute":1000*60,
  "In 2 minutes":1000*60*2,
  "In 4 minutes":1000*60*4,
  "End of today":1000*60*60*24
}

class Add extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
      opened:false,
      title:"",
      description:"",
      deadline:0,
      wager:0
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
  }

  onSubmit(e) {
    const {
      opened,
      title,
      description,
      deadline,
      wager
    } = this.state;
    if(title != "" && description != "")
      this.props.addGoal({
        title,description,money:wagerMap[Object.keys(wagerMap)[wager]],
        deadline: Date.now()+deadlineMap[Object.keys(deadlineMap)[deadline]]
      })
  }

  render() {
    const {text,subtext,colored} = this.props;
    const {opened,title,description,wager,deadline} = this.state
    return (
      <div className={`${s["add-button"]} ${s["add-button--" + (opened ? "open":"close")]}`}>
        <div className={`${s["add-form"]} ${s["add-form--" + (opened ? "open":"close")]}`}>
          <h2 className={`${s["add-form__title"]}`}>Something to do?</h2>
            <Textfield placeholder="Get APUSH done, talk to investors, etc." value={title} label="Title of your new goal" onChange={(v)=>{this.setState({title:v})}} />
            <Textarea placeholder="We forget sometimes, remind your self with a small blurb" value={description} label="Description" onChange={(v)=>{this.setState({description:v})}} />
          <CatSelect cats={Object.keys(deadlineMap)} selected={deadline} label="Select deadline" onChange={(v)=>{this.setState({deadline:v})}}/>
          <CatSelect style={{backgroundColor:"#2ecc71",color:"white",padding:"1rem 2rem"}} cats={Object.keys(wagerMap)} selected={wager} label="Select wager" onChange={(v)=>{this.setState({wager:v})}}/>
          <div className={`${s["add-row"]}`}>
            <Button onClick={()=>{this.onSubmit();this.setState({opened:false})}}>Submit</Button>
          </div>
        </div>
        <div className={`${s["add-icon-wrapper"]} ${s["add-icon-wrapper--" + (opened ? "open":"close")]}`}>
          <svg className={`${s["add-icon"]} ${s["add-icon--" + (opened ? "open":"close")]}`} onClick={()=>{this.setState({opened:!opened})}} width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M26 22v-14c0-1.11-.895-2-2-2-1.112 0-2 .895-2 2v14h-14c-1.11 0-2 .895-2 2 0 1.112.895 2 2 2h14v14c0 1.11.895 2 2 2 1.112 0 2-.895 2-2v-14h14c1.11 0 2-.895 2-2 0-1.112-.895-2-2-2h-14z" fill="#FFF"/></svg>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addGoal: (goal) => {
      dispatch(addGoal(goal));
    }
  }
}

const AddRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Add)

export default AddRedux;
