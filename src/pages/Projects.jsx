import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputText from "../components/InputText";
import CustomModal from "../components/Modal";
import TaskCard from "../components/TaskCard";
import { addTaskDetails } from "../reducers/todoSlice";

const sec = {
  todo: {
    name: "To do",
    status: "todo",
    modelTitle: "Let's Do Something New💡",
    primaryBtnText: "Add Task",
  },
  inprogress: {
    name: "In Progress",
    status: "inprogress",
    modelTitle: "You can🚧",
    primaryBtnText: "Add Task",
  },
  completed: {
    name: "Completed",
    status: "completed",
    modelTitle: "Finally🏅",
    primaryBtnText: "Add Task",
  },
};

function Projects() {
  const [modal, setModal] = useState(false);
  const [currentModelName, setCurrentModelName] = useState("");
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
  const taskList = useSelector((state) => state.todoDetails);
  const todoTask = taskList.filter((task) => task.status === "todo");
  const inprogressTask = taskList.filter(
    (task) => task.status === "inprogress"
  );
  const completedTask = taskList.filter((task) => task.status === "completed");
  console.log("TODO TASKS", todoTask);
  // function addTodo() {
  //   console.log("ADD todo called");
  // }
  const onSubmit = (data, type) => {
    dispatch(
      addTaskDetails({
        ...data,
        timeStamp: Date.now(),
        status: currentModelName,
      })
    );
    setModal(false);
    reset();
  };

  function doToggle(modelName) {
    setModal(!modal);
    debugger;
    setCurrentModelName(modelName);
  }
  return (
    <div className="project-sec">
      <h3>Projects</h3>
      <div className="row">
        <div className="col-4 todo-sec ">
          <div className="container-grey px-4 py-4 ">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="text14">To do</span>
              <span className="count-text">{todoTask.length}</span>
            </div>
            <button
              onClick={() => doToggle("todo")}
              className="card-button text-center w-100"
            >
              <span className="bi bi-plus-lg"></span>
            </button>
            {todoTask.map((task) => (
              <TaskCard key={task.key} data={task} />
            ))}
          </div>
          {/* <Modal show={true} /> */}
        </div>
        <div className="col-4 progress-sec">
          <div className="container-grey px-4 py-4 ">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="text14">InProgress</span>
              <span className="count-text">{inprogressTask.length}</span>
            </div>
            <button
              onClick={() => doToggle("inprogress")}
              className="card-button text-center w-100"
            >
              <span className="bi bi-plus-lg"></span>
            </button>
            {inprogressTask.map((task) => (
              <TaskCard key={task.key} data={task} />
            ))}
          </div>
        </div>
        <div className="col-4 completed-sec">
          <div className="container-grey px-4 py-4 ">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="text14">Completed</span>
              <span className="count-text">{completedTask.length}</span>
            </div>
            <button
              onClick={() => doToggle("completed")}
              className="card-button text-center w-100"
            >
              <span className="bi bi-plus-lg"></span>
            </button>
            {completedTask.map((task) => (
              <TaskCard key={task.key} data={task} />
            ))}
          </div>
        </div>
      </div>
      <CustomModal
        toggle={doToggle}
        isOpen={modal}
        modelTitle={sec[currentModelName]?.modelTitle || ""}
        primaryBtnText={sec[currentModelName]?.primaryBtnText || ""}
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
