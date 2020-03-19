// const element = React.createElement("h1", null, "Welcome");

// const list = React.createElement("ul",null,React.createElement("li",null,"Bike")
// ,React.createElement("li",null,"Car"))

// const ele = React.createElement('h1',{className:"demo",name:"Hello"},"Welcome to ReactJS")
// console.log(ele)
// console.log(list)

function Header(props) {
  console.log(props);
  return props.children;
}
class Footer extends React.Component {
  render() {
    return React.createElement("h1", null, "This is Footer");
  }
}

const footer = React.createElement(Footer)
const header = React.createElement(
  Header,
  { username: "Chandan" },
  React.createElement("div", null, "Content")
);
ReactDOM.render(footer, document.getElementById("container"));
