import React from 'react';

import bgrLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={bgrLogo} alt="MyBurger" />
    </div>
);

export default logo;