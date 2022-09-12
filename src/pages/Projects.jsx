import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputText from "../components/InputText";
import CustomModal from "../components/Modal";
import TaskCard from "../components/TaskCard";
import { addTaskDetails } from "../reducers/todoSlice";

// const sec = [
//   { name: "To do", status: "todo" },
//   { name: "In Progress", status: "inprogress" },
//   { name: "Completed", status: "completed" },
// ];

function Projects() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onSubmit",
    shouldFocusError: true,
    defaultValues: {
      taskName: "",
      taskDescription: "",
    },
  });
  const todoTasks = useSelector((state) => state.todoDetails);
  console.log("TODO TASKS", todoTasks);
  // function addTodo() {
  //   console.log("ADD todo called");
  // }
  const onSubmit = (data) => {
    dispatch(
      addTaskDetails({ ...data, timeStamp: Date.now(), status: "todo" })
    );
    setModal(false);
    reset();
  };

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
              <span className="count-text">{todoTasks.length}</span>
            </div>
            <button
              onClick={doToggle}
              className="card-button text-center w-100"
            >
              <span className="bi bi-plus-lg"></span>
            </button>
            {todoTasks.map((task) => (
              <TaskCard key={task.key} data={task} />
            ))}
          </div>
          {/* <Modal show={true} /> */}
        </div>
        <div className="col-4 progress-sec">Progress Sec</div>
        <div className="col-4 completed-sec">Completed Sec</div>
      </div>
      <CustomModal
        toggle={doToggle}
        isOpen={modal}
        modelTitle="Let's Do Something New"
        primaryBtnText="Add Task"
        errors={errors}
        handleSubmit={handleSubmit(onSubmit)}
      >
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <InputText
            control={control}
            name="taskName"
            type="text"
            placeholder="Enter Task Name"
            rules={{
              required: true,
            }}
            required={true}
          />
          <InputText
            control={control}
            name="taskDescription"
            type="text"
            placeholder="Enter Task Description"
          />
        </form>
      </CustomModal>
    </div>
  );
}

export default Projects;
