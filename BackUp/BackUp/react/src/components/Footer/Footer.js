import React from 'react';
import './Footer.css';

const footer = () => {
    return (
        <footer className="section footer-classic context-dark bg-dark" style={{background: "#2d3246"}}>
        <div className="container">
          <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4"><a className="brand" href="index.html"><img className="brand-logo-light" src="images/agency/logo-inverse-140x37.png" alt="" width="140" height="37" srcSet="images/agency/logo-retina-inverse-280x74.png 2x"/></a>
                <p>This ia an internal Project which is assigned during my React JS Training.Thank You for visiting. See you again.</p>
                <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>Mindtree</span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>Kengeri Road, Bangalore</dd>
              </dl>
              <dl className="contact-list">
                <dt>email:</dt>
                <dd><p>sibajee.ray@mindtree.com</p></dd>
              </dl>
              <dl className="contact-list">
                <dt>phones:</dt>
                <dd><p>+91 7568543012</p>
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul className="nav-list">
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contacts</a></li>
                <li><a href="/">Pricing</a></li>
              </ul>
            </div>
          </div>
        </div>
        
      </footer>
    );

}

export default footer;