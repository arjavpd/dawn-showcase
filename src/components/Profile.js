import React, {Component} from "react";
import promo from "../media/promo.png";

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
            <img
              src={promo}
              alt='Your Image'
              style={{
                width: "100%",
                height: "auto",
                marginTop: "8.5%",
                marginRight: "10%",
                marginLeft: "5%",
              }}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;

// <li>
// Integreated Tenor and Giphy API to allow users to add GIFs
// and stickers to their profile
// </li>
// <li>
// Implemented photo libary selection to allow users to add
// images to their profile
// </li>
