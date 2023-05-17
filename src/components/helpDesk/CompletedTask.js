import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const CompletedTask = ({
  completeTaskList,
  setCompleteTaskList,
  task,
  isClicked,
  addTask,
}) => {
  
  return (
    <div class="element-block">
      <div class="">
        <input
          type="text"
          placeholder="Done Task"
          name="list_done"
          id="txt_done_task"
          class="form-control custom-input task_detail done_task"
          value={task.value}
          onChange={(e) => {
            const index = completeTaskList.findIndex(
              (element) => element.id === task.id
            );
            const list = completeTaskList[index];
            list.value = e.target.value;
            setCompleteTaskList([...completeTaskList]);
            if (
              e.target.value === "" &&
              task.id !== completeTaskList[completeTaskList.length - 1].id
            ) {
              const data = completeTaskList.filter(
                (element) => element.id !== task.id
              );
              setCompleteTaskList(data);
            }
          }}
        />
        {task.id === 0 ? (
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="font-20"
            onClick={addTask}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            icon={faCircleMinus}
            className="font-20"
            onClick={() => {
              const data = completeTaskList.filter((t) => t.id !== task.id);
              setCompleteTaskList(data);
            }}
          ></FontAwesomeIcon>
        )}
        {task.value === "" && isClicked === true && (
          <span class="col-md-12 blank_error" style={{ color: "red" }}>
            Please Fill Existing Field.
          </span>
        )}
      </div>
      <div class="clearfix"></div>
    </div>
  );
};

export default CompletedTask;