// import logo from "./logo.svg";
import "./App.css";

function App() {
  const OS = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const manufacturers = [
    { name: "Samsung", w_type: "square" },
    { name: "HTC", w_type: "square" },
    { name: "Micromax", w_type: "disc" },
    { name: "Apple", w_type: "circle" },
  ];

  return (
    <div>
        <div>
      <h1>Mobile Operating System</h1>
      <ul>
        {OS.map((e) => {
          return<li>{e}</li>;
        })}
      </ul>
    </div>
    <div>
      <h1>Mobile manufacturers</h1>
      <ul>
        {manufacturers.map(({name,w_type}) => {
          return<li type={w_type}>{name}</li>;
        })}
      </ul>
    </div>
    </div>
  
  );
}

export default App;
