import React, {Component} from "react";
import Typical from "react-typical";
import slogan from "../media/slogan.png";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = {checked: false};
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({checked});
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map(x => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className='title-styles' steps={"Arjav Prasad"} loop={50} />
        );
      },
      (props, prevProp) => true,
    );

    return (
      <header
        id='home'
        style={{height: window.innerHeight - 140, display: "block"}}>
        <div className='row aligner'>
          <div className='col-md-12'>
            <div>
              <img
                src={slogan}
                alt='Your Image'
                style={{
                  height: "200px",
                  width: "320px",
                }}
              />
              <br />
              <br />
              <br />
              <br />
              <h1 className='mb-0'>Project Showcase</h1>
              <div className='title-container'>
                <HeaderTitleTypeAnimation />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
