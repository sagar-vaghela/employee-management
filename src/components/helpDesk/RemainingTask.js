import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const RemainingTask = ({
    remainingTaskList,
    setRemainingTaskList,
    remainingTask,
    isClick,
    addRemainingTask,
}) => {
    return (
        <>
            <div class="element-block">
                <div class="">
                    <input
                        type="text"
                        placeholder="In-Progress Task"
                        name="list_progress"
                        id="txt_progress_task"
                        class="form-control custom-input task_detail progress_task"
                        value={remainingTaskList.value}
                        onChange={(e) => {
                            const index = remainingTaskList.findIndex(
                                (element) => element.id === remainingTask.id
                            );
                            const list = remainingTaskList[index];
                            list.value = e.target.value;
                            setRemainingTaskList([...remainingTaskList]);
                            if (
                                e.target.value === "" &&
                                remainingTask.id !== remainingTaskList[remainingTaskList.length - 1].id
                            ) {
                                const data = remainingTaskList.filter(
                                    (element) => element.id !== remainingTask.id
                                );
                                setRemainingTaskList(data);
                            }
                        }}
                    />
                    {remainingTask.id === 0 ? (
                        <FontAwesomeIcon
                            icon={faCirclePlus}
                            className="font-20"
                            onClick={addRemainingTask}
                        ></FontAwesomeIcon>
                    ) : (
                        <FontAwesomeIcon
                            icon={faCircleMinus}
                            className="font-20"
                            onClick={() => {
                                const data = remainingTaskList.filter((t) => t.id !== remainingTask.id);
                                setRemainingTaskList(data);
                            }}
                        ></FontAwesomeIcon>
                    )}
                    {remainingTask.value === "" && isClick === true && (
                        <span class="col-md-12 blank_error" style={{ color: "red" }}>
                            Please Fill Existing Field.
                        </span>
                    )}
                </div>
                <div class="clearfix"></div>
            </div>
        </>
    )
}

export default RemainingTask
