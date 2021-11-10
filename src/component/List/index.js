import React, { useState } from "react";

function List({ course, setCourse }) {
  const [newName, setNewName] = useState("");
  function Delete(id) {
    setCourse(course.filter((e) => e.id !== id));
  }
  function ChangeState(id) {
    course.map((e) => {
      if (e.id === id) {
        e.active = true;
      }
    });
    setCourse([...course]);
  }
  function editName(e) {
    setNewName(e.target.value);
  }
  function Updating(id) {
    course.map((e) => {
      if (e.id === id) {
        e.active = false;
        e.name = newName;
      }
    });
    setCourse([...course]);
  }
  const ListCourse =
    course.length > 0 ? (
      course.map((el) => {
        return el.active === false ? (
          <div className="list" key={el.id}>
            <div className="left">
              <p>{el.name}</p>
            </div>
            <div className="right">
              <button onClick={() => ChangeState(el.id)} className="edit">
                Edit Course
              </button>
              <button onClick={() => Delete(el.id)} className="delete">
                Delete Course
              </button>
            </div>
          </div>
        ) : (
          <form key={el.id}>
            <input
              onChange={editName}
              type="text"
              placeholder="Type Editing Course"
              // value={name}
            />
            <button onClick={() => Updating(el.id)}>Update</button>
          </form>
        );
      })
    ) : (
      <p>There isn't added item</p>
    );
  return <div>{ListCourse}</div>;
}
export default List;
