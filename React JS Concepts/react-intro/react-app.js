
function Header(props) {
    console.log(props);
    return props.children;
  }
  function Content(){
      return(
        React.createElement("h1", null, "This is Content")
      )
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
    React.createElement("div", null, "This is Header")
  );
  const content = React.createElement(Content)

const app = React.createElement('div',null,header,content,footer)


  ReactDOM.render(app, document.getElementById("container"));
  