import React, { PropTypes } from 'react';
import s from './big.css';

const Stat = ({title,subtext,number}) => {
  return <div className={`${s["stat"]}`}>
    <p className={`${s["stat__title"]}`}>{title}</p>
    <h1 className={`${s["stat__number"]}`}>{number}</h1>
    <p className={`${s["stat__sub-detail"]}`}>{subtext}</p>
  </div>
}
class BigPicture extends React.Component {

  constructor(props) {
    super(props);
    const {} = props;
    this.state = {
    }
  }

  static propTypes = {
  }

  render() {
    const {stats} = this.props;
    return (
      <div className={`${s["stats"]}`}>
        <div className={`${s["stats__half-background"]}`}>
        </div>
        <div className={`${s["stats__content"]}`}>
          <div className={`${s["stats__numbers"]}`}>
            <Stat title="Goals" subtext="Deliver and save." number={`${stats.goalsCompleted}/${stats.totalGoals}`} />
            <div className={`${s["stat__line"]}`}></div>
            <Stat title="Money on the line" subtext="Gotta deliver" number={`$${stats.moneyOnLine}`} />
            <div className={`${s["stat__line"]}`}></div>
            <Stat title="Money donated" subtext="its for a good cause" number={`$${stats.moneyDonated}`} />
            <div className={`${s["stat__line"]}`}></div>
            <Stat title="Money saved" subtext="Win-win" number={`$${stats.moneySecured}`} />
          </div>
        </div>
      </div>
    );
  }

}

BigPicture.defaultProps = {
}

export default BigPicture;
