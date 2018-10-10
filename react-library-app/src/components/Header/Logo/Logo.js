import React from 'react';
import {Image} from 'react-bootstrap';

import bgrLogo from '../../../assets/images/Logo.png'
import classes from './Logo.css';


const logo = (props) => (
    <Image src={bgrLogo} weight="40" height="40"  />
);

export default logo;