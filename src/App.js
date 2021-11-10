import { useState } from "react";
import "./App.css";
import Form from "./component/Form/index";
import List from "./component/List/index";
function App() {
  const [course, setCourse] = useState([
    { id: 1, active: false, name: "Html" },
    { id: 2, active: false, name: "Css" },
    { id: 3, active: false, name: "Sass" },
    { id: 4, active: false, name: "Bootstrap" },
    { id: 5, active: false, name: "Js" },
  ]);
  return (
    <section className="App">
      <div className="content">
        <h2 className="title">Add Courses</h2>
        <Form course={course} setCourse={setCourse} />
        <List course={course} setCourse={setCourse} />
      </div>
    </section>
  );
}

export default App;
