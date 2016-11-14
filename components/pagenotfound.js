import React, {Component, Link} from 'react';

export default class PageNotFound extends Component {
  
  render() {
    return (
      <div>
        <h1>Page Not Found.</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
      </div>
    );
  }
}
