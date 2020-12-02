import React from "react";
import "./styles.css";

const Child1 = ({ name }) => {
  // child component
  const [isRed, setIsRed] = React.useState(true);

  return (
    <div
      style={{ color: isRed ? "red" : "blue" }}
      onClick={() => setIsRed(!isRed)}
    >
      {name}
    </div>
  );
};

const hoc = (ChildComp) => {
  // higher order component
  return (props) => {
    return (
      <div
        onMouseEnter={() => console.log("Mouse Enter")}
        onMouseLeave={() => console.log("Mouse Leave")}
      >
        <ChildComp {...props} />
      </div>
    );
  };
};

// New child component
const NewChild = hoc(Child1);

export default function App() {
  return (
    <div className="App">
      <NewChild name="with HOC" />
      <hr />
      <Child1 name="without HOC" />
    </div>
  );
}
