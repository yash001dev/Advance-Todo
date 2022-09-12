import React, { useState } from "react";
import { useSelector } from "react-redux";
import CustomModal from "../components/Modal";
import TaskCard from "../components/TaskCard";

function Projects() {
  const [modal, setModal] = useState(true);
  const todoTasks = useSelector((state) => state.todoDetails);
  console.log("TODODO TAKS:", todoTasks);
  // function addTodo() {
  //   console.log("ADD todo called");
  // }

  function doToggle() {
    setModal(!modal);
  }
  return (
    <div className="project-sec">
      <h3>Projects</h3>
      <div className="row">
        <div className="col-4 todo-sec ">
          <div className="container-grey px-4 py-4 ">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="text14">To do</span>
              <span className="count-text">2</span>
            </div>
            <button
              onClick={doToggle}
              className="card-button text-center w-100"
            >
              <span className="bi bi-plus-lg"></span>
            </button>
            {todoTasks.map((task) => (
              <TaskCard />
            ))}
          </div>
          {/* <Modal show={true} /> */}
        </div>
        <div className="col-4 progress-sec">Progress Sec</div>
        <div className="col-4 completed-sec">Completed Sec</div>
      </div>
      <CustomModal toggle={doToggle} isOpen={modal} modelTitle="Add todo">
        <input name="text" />
      </CustomModal>
    </div>
  );
}

export default Projects;
