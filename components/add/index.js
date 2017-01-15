import React, { PropTypes } from 'react';
import s from './add.css';
import Textfield from '../textfield'
import Textarea from '../textfield/textarea'
import CatSelect from '../textfield/category'
import Button from '../button/'

class Add extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
      opened:false,
      title:"",
      description:"",
      deadline:"",
      wager:""
    }
  }

  static propTypes = {
  }

  render() {
    const {text,subtext,colored} = this.props;
    const {opened,title,description,wager} = this.state
    return (
      <div className={`${s["add-button"]} ${s["add-button--" + (opened ? "open":"close")]}`}>
        <div className={`${s["add-form"]} ${s["add-form--" + (opened ? "open":"close")]}`}>
          <h2 className={`${s["add-form__title"]}`}>Something to do?</h2>
            <Textfield placeholder="Get APUSH done, talk to investors, etc." value={title} label="Title of your new goal" onChange={(v)=>{this.setState({title:v})}} />
            <Textarea placeholder="We forget sometimes, remind your self with a small blurb" value={description} label="Description" onChange={(v)=>{this.setState({description:v})}} />
          <CatSelect cats={["End of today","Tommorow","Week from now","In 4 hours"]} selected={1} label="Select deadline" onChange={(v)=>{this.setState({deadline:v})}}/>
          <CatSelect style={{backgroundColor:"#2ecc71",color:"white",padding:"1rem 2rem"}} cats={["$1","$5","$20","$50","$100"]} selected={1} label="Select wager" onChange={(v)=>{this.setState({wager:v})}}/>
          <div className={`${s["add-row"]}`}>
            <Button onClick={()=>{}}>Submit</Button>
          </div>
        </div>
        <div className={`${s["add-icon-wrapper"]} ${s["add-icon-wrapper--" + (opened ? "open":"close")]}`}>
          <svg className={`${s["add-icon"]} ${s["add-icon--" + (opened ? "open":"close")]}`} onClick={()=>{this.setState({opened:!opened})}} width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M26 22v-14c0-1.11-.895-2-2-2-1.112 0-2 .895-2 2v14h-14c-1.11 0-2 .895-2 2 0 1.112.895 2 2 2h14v14c0 1.11.895 2 2 2 1.112 0 2-.895 2-2v-14h14c1.11 0 2-.895 2-2 0-1.112-.895-2-2-2h-14z" fill="#FFF"/></svg>
        </div>
      </div>
    );
  }

}

export default Add;
