import React, {Component} from "react";
import promo from "../media/promo.png";
import appVideo from "../media/appVideo.mov";

class Profile extends Component {
  render() {
    return (
      <section id='profile'>
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
                <span className='wave'>Profile Editing Features</span>
                <br />
                <br />
                <ul>
                  <li>
                    Integreated Tenor and Giphy API to allow users to add GIFs
                    and stickers to their profile
                  </li>
                  <li>
                    Implemented photo libary selection to allow users to add
                    images to their profile
                  </li>
                  <li>Implemented resizing of elements</li>
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
              <source src={appVideo} type='video/mp4'></source>
            </video>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
