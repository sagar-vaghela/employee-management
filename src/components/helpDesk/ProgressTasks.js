import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
const ProgressTasks = ({
  progressTask,
  setProgressTask,
  test,
  isInClicked,
  addTest,
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
            class="form-control custom-input task_detail progress_task"
            value={test.value}
            onChange={(e) => {
              const Taskindex = progressTask.findIndex((elm) => elm.id === test.id);
              const task_list = progressTask[Taskindex];
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
          {test.id === 0 ? (
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="font-20"
              onClick={addTest}
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
