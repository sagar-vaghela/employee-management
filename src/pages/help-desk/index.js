import React, { useState, useEffect } from "react";
import styles from "./helpdesk.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import CompletedTask from "@/components/helpDesk/CompletedTask";
import ProgressTasks from "@/components/helpDesk/ProgressTasks";
import Notes from "@/components/helpDesk/Notes";

const HelpDesk = () => {
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [completeTaskList, setCompleteTaskList] = useState([
    { id: 0, value: "" },
  ]);
  const [progressTask, setProgressTask] = useState([{ id: 0, value: "" }]);
  const [remainingTask, setRemainingTask] = useState([]);
  const [queries, setQueries] = useState([]);
  const [notes, setNotes] = useState([{ id: 0, value: "" }]);
  const [tlName, setTlName] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isInClicked, setIsInClicked] = useState(false);
  const [isNotesClicked, setIsNotesClicked] = useState(false);

  useEffect(() => {
    completeTaskList.map((task, index) => (task.id = index));
  }, [completeTaskList]);

  useEffect(() => {
    progressTask.map((test, index) => (test.id = index));
  }, [progressTask]);

  useEffect(() => {
    notes.map((testNotes, index) => (testNotes.id = index));
  }, [notes]);

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
      if (completeTaskList[completeTaskList?.length - 1].value !== "") {
        setCompleteTaskList([
          ...completeTaskList,
          { id: completeTaskList.length, value: "" },
        ]);
        setIsClicked(false);
      }
    }
  };

  const addTest = (test) => {
    setIsInClicked(true);
    if (progressTask.length === 1) {
      if (test.value !== "") {
        setProgressTask([
          ...progressTask,
          { id: progressTask.length, value: "" },
        ]);
        setIsInClicked(false);
      }
    } else {
      if (progressTask[progressTask?.length - 1].value !== "") {
        setProgressTask([
          ...progressTask,
          { id: progressTask.length, value: "" },
        ]);
        setIsInClicked(false);
      }
    }
  };

  const addNotes = (testNotes) => {
    setIsNotesClicked(true);
    if (notes.length === 1) {
      if (testNotes.value !== "") {
        setNotes([...notes, { id: notes.length, value: "" }]);
        setIsNotesClicked(false);
      }
    } else {
      if (notes[notes?.length - 1].value !== "") {
        setNotes([...notes, { id: notes.length, value: "" }]);
        setIsNotesClicked(false);
      }
    }
  };

  return (
    <>
      <div class={styles.header}>
        <p>HVG Help Desk</p>
      </div>
      <div class={styles.starterTemplate}>
        <h2 class={styles.heading}>
          Please use with Mozilla Firefox for better formatting in email.
        </h2>
        <h1>I'm here to write your daily update.</h1>
      </div>
      <div class={styles.container}>
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
            {progressTask.map((test) => {
              return (
                <ProgressTasks
                  key={test.id}
                  setProgressTask={setProgressTask}
                  progressTask={progressTask}
                  test={test}
                  setIsInClicked={setIsInClicked}
                  isInClicked={isInClicked}
                  addTest={() => addTest(test)}
                />
              );
            })}
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
            {notes.map((testNotes) => {
              return (
                <Notes
                  key={testNotes.id}
                  setNotes={setNotes}
                  notes={notes}
                  testNotes={testNotes}
                  setIsNotesClicked={setIsNotesClicked}
                  isNotesClicked={isNotesClicked}
                  addNotes={() => addNotes(testNotes)}
                />
              );
            })}
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
          {project && (
            <span class="subject">
              {`Updates for ${project} as on 16th May, 2023`}
              <hr />
            </span>
          )}
          <div class="mail_body">
            {client && (
              <span class="client_name">
                {`Hi - ${client}`},<br />
                <br />
              </span>
            )}
            {project && (
              <span class="update_msg">
                {`Following are the updates for ${project} as on 16th May, 2023 :`}
                <br />
                <br />
              </span>
            )}
            <span class="list_done">
              {completeTaskList[0].value !== "" && (
                <b>
                  <u>List of Completed Tasks : </u>
                </b>
              )}
              <br />
              <ol type="1">
                {completeTaskList &&
                  completeTaskList.map((task, index) => {
                    if (task.value !== "") {
                      return (
                        <li key={index}>
                          {task.value} <b>[Done]</b>
                        </li>
                      );
                    }
                  })}
              </ol>
            </span>
            <span class="list_progress">
              {progressTask[0].value !== "" && (
                <b>
                  <u>List of In-Progress Tasks : </u>
                </b>
              )}
              <br />
              <ol type="1">
                {progressTask &&
                  progressTask.map((test, index) => {
                    if (test.value !== "") {
                      return <li key={index}>{test.value}</li>;
                    }
                  })}
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
              {notes[0].value !== "" && (
                <b>
                  <u>Notes : </u>
                </b>
              )}
              <br />
              <ol type="1">
                {notes &&
                  notes.map((testNotes, index) => {
                    if (testNotes.value !== "") {
                      return <li key={index}>{testNotes.value}</li>;
                    }
                  })}
              </ol>
            </span>
            {tlName && (
              <>
                <span class="review_note">
                  Please check with the latest updates and let us know your
                  thoughts for the same.
                  <br />
                </span>
                <span class="thanks">
                  <br />
                  Thanks,
                  <br />
                  {tlName}
                </span>
              </>
            )}
            <span class="total_worked"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpDesk;
