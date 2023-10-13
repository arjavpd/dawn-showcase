import React, {Component} from "react";
import promo from "../media/promo.png";

class Overview extends Component {
  render() {
    return (
      <section id='overview'>
        <div className='row'>
          <div className='col-md-7'>
            <div className='card' style={{marginTop: "5%", marginLeft: "5%"}}>
              <div
                className='card-body font-trebuchet  ml-3 mr-3'
                style={{
                  height: "auto",
                  fontSize: "132%",
                  lineHeight: "200%",
                }}>
                <br />
                <span className='wave'>Dawn: Anonymous Dating App</span>
                <br />
                <br />
                <ul>
                  <li>
                    Facilitated More than <strong>5000</strong> connections
                    between over <strong>1300</strong> registered users
                  </li>
                  <li>
                    Engaged around <strong>1000</strong> users for an average of
                    <strong>15 minutes and 52 seconds</strong> on a daily basis
                  </li>
                  <li>
                    Designed, programed and deployed the entire application with{" "}
                    <strong>React Native</strong> and{" "}
                    <strong>Google Firebase</strong>
                  </li>
                  <li>
                    Developed a recommendation <strong>algorithm</strong> to
                    match users according to their preferences
                  </li>
                  <li>
                    Devoloped profile edit features that allowed users to add
                    images, GIFs, stickers and text to their profile
                  </li>
                  <li>
                    Devoloped reveal feature to allow users to reveal their
                    identity if they both agree to do so
                  </li>
                  <li>
                    Analyzed user Analytics with <strong>Mixpanel</strong>, used
                    the data to improve the experience for users
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <img
              src={promo}
              alt='Your Image'
              style={{
                width: "100%",
                height: "auto",
                marginTop: "8.5%",
                marginLeft: "15%",
              }}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Overview;
