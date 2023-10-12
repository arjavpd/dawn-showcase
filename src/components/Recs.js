import React, {Component} from "react";
import flowchart from "../media/flowchart.png";

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
                <span className='wave'>Recommendation Algorithm</span>
                <br />
                <br />
                <ul>
                  <li>
                    Built algorithm that got 10 (filtered by age and gender
                    preferences) users every day at noon for every user.
                  </li>
                  <li>
                    Firestore does not have a way to get random documents, so
                    had to devolp a query pagination algorithm to go through all
                    the documents in the database until enough users were found.
                  </li>
                  <li>
                    Implmented ranking system to priortize users with better
                    profiles
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <img
              src={flowchart}
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

export default Overview;
