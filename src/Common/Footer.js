import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="containerFoot">
        <div className="row" style={{ paddingTop: "8px" }}>
          <p className="col-sm">Created By:</p>
        </div>
        <div className="row middle-footer">
          <div className="col">
            <h5>
              <i class="fab fa-linkedin-in"></i>
              <a href="https://www.linkedin.com/in/vibhor-jain">
                {" "}
                Vibhor Jain{" "}
              </a>
            </h5>
          </div>

          <div className="col">
            <h5>
              <i class="fab fa-linkedin-in"></i>
              <a href="https://www.linkedin.com/in/sxtyam/"> Satyam Gaur </a>
            </h5>
          </div>

          <div className="col">
            <h5>
              <i class="fab fa-linkedin-in"></i>
              <a href="https://www.linkedin.com/in/aviral-tiwari-b69207196/">
                {" "}
                Aviral Tiwari{" "}
              </a>
            </h5>
          </div>
        </div>
        <div className="row lower-footer">
          <p className="col-sm">
            <h6>With ❤️ and ☕</h6>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
