import React, { useState, useEffect } from "react";
import styles from "./helpdesk.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import CompletedTask from "@/components/helpDesk/CompletedTask";

const HelpDesk = () => {
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [completeTaskList, setCompleteTaskList] = useState([
    { id: 0, value: "" },
  ]);
  const [progressTask, setProgressTask] = useState([]);
  const [remainingTask, setRemainingTask] = useState([]);
  const [queries, setQueries] = useState([]);
  const [notes, setNotes] = useState([]);
  const [tlName, setTlName] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const addTask = (task) => {
    setIsClicked(true);
    if (completeTaskList.length === 1) {
      if (task.value !== "") {
        setCompleteTaskList([
          ...completeTaskList,
          { id: completeTaskList.length, value: "" },
        ]);
        setIsClicked(false);
      }
    } else {
      if (completeTaskList[completeTaskList?.length - 1].value  !== "") {
        setCompleteTaskList([
          ...completeTaskList,
          { id: completeTaskList.length, value: "" },
        ]);
        setIsClicked(false);
      }
    }
  };

  useEffect(() => {
    completeTaskList.map((task, index) => task.id = index);
  },[completeTaskList])

  return (
    <>
      <div class={styles.header}>
        <p>HVG Help Desk</p>
      </div>
      <div class={styles.container}>
        <div class={styles.starterTemplate}>
          <h2 class={styles.heading}>
            Please use with Mozilla Firefox for better formatting in email.
          </h2>
          <h1>I'm here to write your daily update.</h1>
        </div>
        <div class="col-sm-5">
          <div class="form-group stud_detail">
            <label for="client_name">Client Name : </label>
            <input
              type="text"
              class="form-control"
              id="client_name"
              placeholder="Enter Client Name"
              onkeyup="setClientName(this);"
              value={client}
              onChange={(e) => setClient(e.target.value)}
            />
          </div>
          <div class="form-group stud_detail">
            <label for="client_name">Project Name : </label>
            <input
              type="text"
              class="form-control"
              id="project_name"
              placeholder="Enter Project Name"
              onkeyup="setProjectName(this);"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />
          </div>
          <div class="form-group stud_detail">
            <label for="client_name" class="task_label">
              List of Completed Tasks :{" "}
            </label>
            {completeTaskList.map((task) => {
              return (
                <CompletedTask
                  key={task.id}
                  setCompleteTaskList={setCompleteTaskList}
                  completeTaskList={completeTaskList}
                  task={task}
                  setIsClicked={setIsClicked}
                  isClicked={isClicked}
                  addTask={() => addTask(task)}
                />
              );
            })}
          </div>
          <div class="form-group stud_detail">
            <label for="client_name" class="task_label">
              List of In-Progress Tasks :{" "}
            </label>
            <div class="element-block">
              <div class="">
                <input
                  type="text"
                  placeholder="In-Progress Task"
                  name="list_progress"
                  id="txt_progress_task"
                  class="form-control custom-input task_detail progress_task"
                  value={progressTask}
                  onChange={(e) => setProgressTask(e.target.value)}
                />
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="font-20"
                ></FontAwesomeIcon>
                <i class="bi bi-plus-circle-fill font-20 components"></i>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="form-group stud_detail">
            <label for="client_name" class="task_label">
              List of Remaining Tasks :{" "}
            </label>
            <div class="element-block">
              <div class="">
                <input
                  type="text"
                  placeholder="Remaining Task"
                  name="list_remaining"
                  id="txt_remaining_task"
                  class="form-control custom-input task_detail remaining_task"
                  value={remainingTask}
                  onChange={(e) => setRemainingTask(e.target.value)}
                />
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="font-20"
                ></FontAwesomeIcon>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="form-group stud_detail">
            <label for="client_name" class="task_label">
              Queries :{" "}
            </label>
            <div class="element-block">
              <div class="">
                <input
                  type="text"
                  placeholder="Query"
                  name="list_query"
                  id="txt_query"
                  class="form-control custom-input task_detail query_task"
                  value={queries}
                  onChange={(e) => setQueries(e.target.value)}
                />
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="font-20"
                ></FontAwesomeIcon>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="form-group stud_detail">
            <label for="client_name" class="task_label">
              Notes :{" "}
            </label>
            <div class="element-block">
              <div class="">
                <input
                  type="text"
                  placeholder="Note"
                  name="list_note"
                  id="txt_note"
                  class="form-control custom-input task_detail note_task"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="font-20"
                ></FontAwesomeIcon>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="form-group stud_detail">
            <label for="tl_name">TL Name : </label>
            <input
              type="text"
              class="form-control"
              id="tl_name"
              placeholder="TL Name"
              onkeyup="SetTlName(this);"
              value={tlName}
              onChange={(e) => setTlName(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-7">
          <span class="subject">
            Updates for test as on 16th May, 2023
            <hr />
          </span>
          <div class="mail_body">
            {client && (
              <span class="client_name">
                {`Hi - ${client}`},<br />
                <br />
              </span>
            )}
            <span class="update_msg">
              Following are the updates for test as on 16th May, 2023 :<br />
              <br />
            </span>
            <span class="list_done">
              <b>
                <u>List of Completed Tasks : </u>
              </b>
              <br />
              <ol type="1">
                <li>
                  test<b> [Done]</b>
                </li>
                <li>
                  test<b> [Done]</b>
                </li>
              </ol>
            </span>
            <span class="list_progress">
              <b>
                <u>List of In-Progress Tasks : </u>
              </b>
              <br />
              <ol type="1">
                <li>test</li>
                <li>test</li>
              </ol>
            </span>
            <span class="list_remaining">
              <b>
                <u>List of Remaining Tasks : </u>
              </b>
              <br />
              <ol type="1">
                <li>test</li>
                <li>test</li>
              </ol>
            </span>
            <span class="list_query">
              <b>
                <u>Queries : </u>
              </b>
              <br />
              <ol type="1">
                <li>test</li>
                <li>test</li>
              </ol>
            </span>
            <span class="list_note">
              <b>
                <u>Notes : </u>
              </b>
              <br />
              <ol type="1">
                <li>test</li>
                <li>test</li>
              </ol>
            </span>
            <span class="review_note">
              Please check with the latest updates and let us know your thoughts
              for the same.
              <br />
            </span>
            <span class="thanks">
              <br />
              Thanks,
              <br />
              test
            </span>
            <span class="total_worked"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpDesk;
