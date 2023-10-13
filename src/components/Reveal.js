import React, {Component} from "react";
import reveal from "../media/reveal.mov";

class Reveal extends Component {
  render() {
    return (
      <section id='reveal'>
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
                <span className='wave'>Reveal Feature</span>
                <br />
                <br />
                <ul>
                  <li>
                    Devoloped reveal feature to allow users to reveal their
                    identity if they both agree to do so
                  </li>
                  <li>
                    Used Firebase transaction to ensure that data is not
                    unintentially overwritten
                  </li>
                  <li>
                    Constantly changed design of modals to better educate user
                    on a new feature/concept unheard of on any other app
                  </li>
                  <li>
                    Displayed user socials after reveal (snapchat + instagram)
                  </li>
                  <li>
                    Implemented ballons and confetti animation after noticing
                    how excited users were when they revealed :)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <video
              controls
              autoPlay
              loop
              muted
              style={{
                width: "100%",
                height: "600px",
                marginTop: "8.5%",
                marginLeft: "15%",
              }}>
              <source src={reveal} type='video/mp4'></source>
            </video>
          </div>
        </div>
      </section>
    );
  }
}

export default Reveal;
