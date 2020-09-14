import React from 'react';
import { Link } from 'react-router-dom';

const landing = () => {
return (
    <div id="landing">Do you have a friend that claims to be a fan of a musical artist? Well now you have the chance to test them and see if they're a 'real fan' or a 'fake fan'.
    <Link to='/entry'><button>Get started!</button></Link>
    </div>
)
}




export default landing;