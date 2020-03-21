import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/404.scss';

class NotLoggedInPage extends Component {
  render () {
    return (
      <div className='page-404'>
        404 - 
        <Link to="/login"> Login Page </Link>
      </div>
    )
  }
}

export default NotLoggedInPage
