import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
  render () {
    return (
      <div>
        404 - Login first! Go to <Link to="/"> Login Page </Link>
      </div>
    )
  }
}

export default NotFoundPage;
