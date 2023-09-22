import React from "react";


class AuthButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    this.setState((state) => ({ isAuth: !state.isAuth }));
  }

  render() {
    return <button onClick={this.onClick}>
      {this.state.isAuth ? "Вийти" : "Зайти"}
    </button>
  }
}

export default AuthButton