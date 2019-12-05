import React from 'react';
import { withRouter } from 'react-router-dom';
/* withRouter is a higher order component or (HOC) it is essentially a
 function that takes a component as an argument and which turn you a modified component
 a higher order component is a function that takes any component and modifies it in some way and then returns you that
 new modified component or a super powered component*/

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${ size } menu-item`} onClick={ () => history.push(`${match.url}${linkUrl}`) }>
    <div className="background-image" style={{ backgroundImage: `url(${ imageUrl })` }} />
        <div className="content">
          <h1 className="title">{ title.toUpperCase() }</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
  </div>
);

export default withRouter(MenuItem);