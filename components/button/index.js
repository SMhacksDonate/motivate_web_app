import React, { PropTypes } from 'react';
import s from './button.css';

class Button extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
    }
  }

  static propTypes = {
  }

  render() {
    const {onClick,children,style} = this.props;
    return (
      <button style={style} className={`${s["button"]}`} onClick={onClick}>{children}</button>
    );
  }

}

export default Button;
