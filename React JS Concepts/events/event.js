class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.displayData = this.displayData.bind(this);
  }

  displayData() {
    console.log("method called");
  }

  greet() {
    console.log("Welcome");
  }

  show = () => {
    console.log("Show method");
  };

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <button onClick={this.displayData}>Click</button>
        <button
          onClick={() => {
            this.greet();
          }}
        >
          Click Here
        </button>
        <button onClick={() => this.show()}>Click Show</button>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("app"));
