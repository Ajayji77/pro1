import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: { name: "dummy", login: "Default", avatar_url: "/dummy" },
    };
  }

  // async componentDidMount() {
  //   const data = await fetch("https://api.github.com/users/ajay-CaTi");
  //   const json = await data.json();
  //   this.setState({ userInfo: json });
  //   console.log(json);
  // }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Hello");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  render() {
    const { name, login, avatar_url } = this.state.userInfo;
    return (
      <>
        <h1>Name:- {name}</h1>
        <h2>Login:- {login}</h2>
        <img src={avatar_url} alt={name} />
      </>
    );
  }
}

export default UserClass;
