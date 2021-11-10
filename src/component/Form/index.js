import { useState } from "react";

function Form({ course, setCourse }) {
  const [name, setName] = useState("");
  const [i, setI] = useState(6);
  function modName(e) {
    setName(e.target.value);
  }
  function addCourse(e) {
    e.preventDefault();
    if (name.length > 0) {
      setCourse([...course, { id: i, name: name, active: false }]);
      setI(i + 1);
      setName("");
    }
  }
  return (
    <form>
      <input
        onChange={modName}
        type="text"
        placeholder="Type A New Course"
        value={name}
      />
      <button onClick={addCourse}>Add Course</button>
    </form>
  );
}
export default Form;
