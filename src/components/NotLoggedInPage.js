import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/404.scss';

class NotLoggedInPage extends Component {
  
  render () {
    return (
      <div className='page-404'>
        <h3>
          You are not Logged In 
        </h3>
        <h2>
          Go to <Link to="/"> Login Page </Link>
        </h2>
      </div>
    )
  }
}

export default NotLoggedInPage


