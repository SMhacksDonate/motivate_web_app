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

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      settings:false
    }
  }

  render() {
    const {settings} = this.state;
    return (
      <div>
        <Nav active="index" onClick={()=>{this.setState({settings:true})}} />
        <Title colored={true} text="Hey David Sun!" subtext="let's get to work"/>
        <Big stats={[]}/>
        <Add/>
        <div className={`${s["goals"]}`}>
          <Goal
            time="30:00"
            title="Fuck me in the ass"
            wager="$420"
            description='bloo blah blooh and some more blah blah blah'
          />
          <Goal
            time="30:00"
            title="Fuck me in the ass"
            wager="$420"
            description='bloo blah blooh and some more blah blah blah'
          />
          <Goal
            time="30:00"
            title="Fuck me in the ass"
            wager="$420"
            description='bloo blah blooh and some more blah blah blah'
          />
          <Goal
            time="30:00"
            title="Fuck me in the ass"
            wager="$420"
            description='bloo blah blooh and some more blah blah blah'
          />
        </div>
        <Settings onStatus={(s)=>{this.setState({settings:s})}} status={settings}/>
      </div>
    );
  }

}

export default HomePage;
