const name = "Chandan";

function Header(props) {
  console.log(props.username);
  return <h1>Welcome , {props.username}</h1>;
}
function Footer() {
  return <h1>This is Footer</h1>;
}
function Content(props) {
  const { personsData } = props;

  personsData.push({
    id: 4,
    name: "Guru"
  });
  return (
    <ul>
      {personsData.map((person, index) => {
        return <li key={person.id}>{person.name}</li>;
      })}
    </ul>
  );
}

const persons = [
  {
    id: 1,
    name: "Dikshit"
  },
  {
    id: 2,
    name: "Trump"
  },
  {
    id: 3,
    name: "Modi"
  }
];
const ele = (
  <div>
    <Header username={name} />
    <Content personsData={persons} />
    <Footer />
  </div>
);
ReactDOM.render(ele, document.getElementById("app"));
