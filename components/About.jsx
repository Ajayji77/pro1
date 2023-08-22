import React, { Component } from "react";
// import UserClass from "./UserClass";
import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <div>
          <h1>About</h1>
          <User />
          {/* <UserClass data={"Akshay"} desc="Sir" />
          <UserClass data={"Ajay bhai"} desc="Cool ho aap" /> */}
        </div>
      </>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <UserClass data={"Ajay bhai"} desc="Cool ho aap" />
//     </div>
//   );
// };

export default About;

// git remote set-url origin https://github.com/ajay-CaTi/pro-p2.git
