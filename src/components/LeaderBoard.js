import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../stylesheets/leader_board.scss';

class LeaderBoard extends Component { 
  render() {
    const generateColor = () => {
      const colors = ['#574b90', '#3dc1d3', '#f78fb3', '#cf6a87', '#f5cd79', '#f19066'];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      return randomColor;
    }

    

    let users = this.props.users
    let sortedUser = Object.keys(users).sort((a, b) => 
      (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length)
    )
    
    console.log(this.props.users)
    console.log(sortedUser)

    return (
      <div className='leader_board_wrap'>
        { sortedUser.map((_user, index) => {
          let color = generateColor()
          let user = users[_user]
          return (
            <div className='leader-box' key={user.id}>
              <span className='order_badge' style={{borderTopColor: color}}>
              </span>
              <span className='order_number'>
                {index + 1}
              </span>
              <div className="qw_1st-letter">
                <span style={{backgroundColor: color}}>
                  {user.name.charAt(0)}
                </span>
              </div>
              <div className='user-info'>
                <h2 className='user-name'>
                  {user.name}
                </h2>
                <p className='info'>
                  <span>
                    Answered questions 
                  </span>
                  <span>
                    {Object.keys(user.answers).length}
                  </span>
                </p>
                <p className='info'>
                  <span>
                    Created questions 
                  </span>
                  <span>
                    {user.questions.length}
                  </span>
                </p>
              </div>
              <div className='user-score'>
                <p className='score-text'>Score</p>
                <p className="score-number" style={{backgroundColor: color}}>
                {Object.keys(user.answers).length + user.questions.length}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps({users}) {
	return {
    users
	}
}

export default connect(mapStateToProps)(LeaderBoard)
