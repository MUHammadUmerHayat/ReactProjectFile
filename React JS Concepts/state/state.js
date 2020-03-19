class MyComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Umesh",
      age: 29,
      hobbies: ["Cricket", "Kabbadi", "Snooker"]
    };
  }

  changeName = () => {
    console.log(this.state);
    // this.state.name = "Tharun";
    const newState = { ...this.state };
    newState.hobbies = ["TT"];
    console.log("new State ", newState);

    this.setState({
      ...newState
    });

    console.log(this.state);
  };
  render() {
    let element;
    /* if (this.state.age < 18) {
      element = <h1>You are not allowed inside</h1>;
    } else {
      element = <h1>You are allowed</h1>;
    }
 */

    const dataStyle = {
      color: "red",
      fontSize: "50px"
    };
    return (
      <div>
        <h1 className="demo">Welcome , {this.state.name}</h1>
        <h1 style={dataStyle}> {this.state.age}</h1>
        {this.state.age < 18 ? (
          <h1>You are not allowed inside</h1>
        ) : (
          <h1 style={{ color: "green" }}>You are allowed</h1>
        )}
        <h1>{this.state.hobbies[0]}</h1>
        <button onClick={this.changeName}>Click</button>
      </div>
    );
  }
}

ReactDOM.render(<MyComp />, document.getElementById("app"));
