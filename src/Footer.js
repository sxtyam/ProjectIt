import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
      <div className = "main-footer">
            <div className = "container">
                  <div className = "row">
                              <p className="col-sm">
                              Created By:
                              </p>
                  </div>
                  <div className= "row">
                        <div className = "col">
                              <h5>
                              <i class="fab fa-linkedin-in"></i>
                              <a href="https://www.linkedin.com/in/vibhor-jain"> Vibhor Jain </a>
                              </h5>
                        </div>

                        <div className = "col">
                              <h5>
                              <i class="fab fa-linkedin-in"></i>
                              <a href="https://www.linkedin.com/in/sxtyam/"> Satyam Gaur </a>
                              </h5>
                        </div>

                        <div className = "col">
                              <h5>
                              <i class="fab fa-linkedin-in"></i>
                              <a href="https://www.linkedin.com/in/aviral-tiwari-b69207196/"> Aviral Tiwari </a>
                              </h5>
                        </div>

                  </div>
                  <hr />
                  <div className = "row">
                        <p className="col-sm">
                            <h6>With <i class="fas fa-heart"></i> and <i class="fas fa-mug-hot"></i>.</h6>
                        </p>
                  </div>
            </div>    
      </div>
  );
}
export default Footer;