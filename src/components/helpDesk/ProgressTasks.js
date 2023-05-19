import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
const ProgressTasks = ({
  progressTask,
  setProgressTask,
  test,
  isInClicked,
  addProgress,
  index,
}) => {
  return (
    <>
      <div className="element-block">
        <div>
          <input
            type="text"
            placeholder="In-Progress Task"
            name="list_progress"
            id="txt_progress_task"
            className="form-control custom-input task_detail progress_task"
            value={test.value}
            onChange={(e) => {
              const TaskIndex = progressTask.findIndex(
                (elm) => elm.id === test.id
              );
              const task_list = progressTask[TaskIndex];
              task_list.value = e.target.value;
              setProgressTask([...progressTask]);
              if (
                e.target.value === "" &&
                test.id !== progressTask[progressTask.length - 1].id
              ) {
                const progress = progressTask.filter(
                  (elm) => elm.id !== test.id
                );
                setProgressTask(progress);
              }
            }}
          />

          {index === 0 ? (
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="font-20"
              onClick={addProgress}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={faCircleMinus}
              className="font-20"
              onClick={() => {
                const progress = progressTask.filter((t) => t.id !== test.id);
                setProgressTask(progress);
              }}
            ></FontAwesomeIcon>
          )}
          {test.value === "" && isInClicked === true && (
            <span className="col-md-12 blank_error" style={{ color: "red" }}>
              Please Fill Existing Field.
            </span>
          )}
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  );
};

export default ProgressTasks;
