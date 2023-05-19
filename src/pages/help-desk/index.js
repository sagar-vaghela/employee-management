import React, { useState, useEffect } from "react";
import styles from "./helpdesk.module.css";
import CompletedTask from "@/components/helpDesk/CompletedTask";
import ProgressTasks from "@/components/helpDesk/ProgressTasks";
import Notes from "@/components/helpDesk/Notes";
import RemainingTask from "@/components/helpDesk/RemainingTask";
import Queries from "@/components/helpDesk/Queries";
import Moment from 'moment';
import HelpDeskListing from "@/components/helpDesk/HelpDeskListing";
const HelpDesk = () => {
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [completeTaskList, setCompleteTaskList] = useState([
    { id: 0, value: "" },
  ]);
  const [progressTask, setProgressTask] = useState([{ id: 0, value: "" }]);
  const [remainingTaskList, setRemainingTaskList] = useState([
    { id: 0, value: "" },
  ]);
  const [queriesList, setQueriesList] = useState([{ id: 0, value: "" }]);
  const [notes, setNotes] = useState([{ id: 0, value: "" }]);
  const [tlName, setTlName] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isInClicked, setIsInClicked] = useState(false);
  const [isNotesClicked, setIsNotesClicked] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isQueriesClick, setIsQueriesClick] = useState(false);
  const formatDate = Moment().format('DD MMM, YYYY')

  useEffect(() => {
    completeTaskList.map((task, index) => (task.id = index));
  }, [completeTaskList]);

  useEffect(() => {
    progressTask.map((test, index) => (test.id = index));
  }, [progressTask]);

  useEffect(() => {
    notes.map((testNotes, index) => (testNotes.id = index));
  }, [notes]);

  useEffect(() => {
    remainingTaskList.map((remainingTask, index) => (remainingTask.id = index));
  }, [remainingTaskList]);

  useEffect(() => {
    queriesList.map((queriesTask, index) => (queriesTask.id = index));
  }, [queriesList]);

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

  const addProgress = (test) => {
    setIsInClicked(true);
    if (progressTask.length === 0) {
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
  const addRemainingTask = (remainingTask) => {
    setIsClick(true);
    if (remainingTaskList.length === 1) {
      if (remainingTask.value !== "") {
        setRemainingTaskList([
          ...remainingTaskList,
          { id: remainingTaskList.length, value: "" },
        ]);
        setIsClick(false);
      }
    } else {
      if (remainingTaskList[remainingTaskList?.length - 1].value !== "") {
        setRemainingTaskList([
          ...remainingTaskList,
          { id: remainingTaskList.length, value: "" },
        ]);
        setIsClick(false);
      }
    }
  };

  const addQueriesTask = (queriesTask) => {
    setIsQueriesClick(true);
    if (queriesList.length === 1) {
      if (queriesList.value !== "") {
        setQueriesList([...queriesList, { id: queriesList.length, value: "" }]);
        setIsQueriesClick(false);
      }
    } else {
      if (queriesList[queriesList?.length - 1].value !== "") {
        setQueriesList([...queriesList, { id: queriesList.length, value: "" }]);
        setIsQueriesClick(false);
      }
    }
  };


  return (
    <>
      <div className={styles.header}>
        <p>HVG Help Desk</p>
      </div>
      <div className={styles.starterTemplate}>
        <h2 className={styles.heading}>
          Please use with Mozilla Firefox for better formatting in email.
        </h2>
        <h1>I' m here to write your daily update.</h1>
      </div>
      <div className={styles.container}>
        <div className="col-sm-5">
          <div className="form-group stud_detail">
            <label htmlFor="client_name">Client Name : </label>
            <input
              type="text"
              className="form-control"
              id="client_name"
              placeholder="Enter Client Name"
              onkeyup="setClientName(this);"
              value={client}
              onChange={(e) => setClient(e.target.value)}
            />
          </div>
          <div className="form-group stud_detail">
            <label htmlFor="client_name">Project Name : </label>
            <input
              type="text"
              className="form-control"
              id="project_name"
              placeholder="Enter Project Name"
              onkeyup="setProjectName(this);"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />
          </div>
          <div className="form-group stud_detail">
            <label htmlFor="client_name" className="task_label">
              List of Completed Tasks :{" "}
            </label>
            {completeTaskList.map((task, index) => {
              return (
                <CompletedTask
                  key={task.id}
                  setCompleteTaskList={setCompleteTaskList}
                  completeTaskList={completeTaskList}
                  task={task}
                  index={index}
                  setIsClicked={setIsClicked}
                  isClicked={isClicked}
                  addTask={() => addTask(task)}
                />
              );
            })}
          </div>
          <div className="form-group stud_detail">
            <label htmlFor="client_name" className="task_label">
              List of In-Progress Tasks :{" "}
            </label>
            {progressTask.map((test, index) => {
              return (
                <ProgressTasks
                  key={test.id}
                  setProgressTask={setProgressTask}
                  progressTask={progressTask}
                  test={test}
                  index={index}
                  setIsInClicked={setIsInClicked}
                  isInClicked={isInClicked}
                  addProgress={() => addProgress(test)}
                />
              );
            })}
          </div>
          <div className="form-group stud_detail">
            <label htmlFor="client_name" className="task_label">
              List of Remaining Tasks :{" "}
            </label>
            {remainingTaskList.map((remainingTask) => {
              return (
                <RemainingTask
                  key={remainingTask.id}
                  setRemainingTaskList={setRemainingTaskList}
                  remainingTaskList={remainingTaskList}
                  remainingTask={remainingTask}
                  setIsClicked={setIsClicked}
                  isClick={isClick}
                  addRemainingTask={() => {
                    addRemainingTask(remainingTask);
                  }}
                />
              );
            })}
          </div>
          <div className="form-group stud_detail">
            <label htmlFor="client_name" className="task_label">
              Queries :{" "}
            </label>
            {queriesList.map((queriesTask) => {
              return (
                <Queries
                  key={queriesTask.id}
                  setQueriesList={setQueriesList}
                  queriesList={queriesList}
                  queriesTask={queriesTask}
                  setIsClicked={setIsClicked}
                  isQueriesClick={isQueriesClick}
                  addQueriesTask={() => {
                    addQueriesTask(queriesTask);
                  }}
                />
              );
            })}
          </div>
          <div className="form-group stud_detail">
            <label htmlFor="client_name" className="task_label">
              Notes :{" "}
            </label>
            {notes.map((testNotes, index) => {
              return (
                <Notes
                  key={testNotes.id}
                  setNotes={setNotes}
                  notes={notes}
                  index={index}
                  testNotes={testNotes}
                  setIsNotesClicked={setIsNotesClicked}
                  isNotesClicked={isNotesClicked}
                  addNotes={() => addNotes(testNotes)}
                />
              );
            })}
          </div>
          <div className="form-group stud_detail">
            <label htmlFor="tl_name">TL Name : </label>
            <input
              type="text"
              className="form-control"
              id="tl_name"
              placeholder="TL Name"
              onkeyup="SetTlName(this);"
              value={tlName}
              onChange={(e) => setTlName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-7">
          <div className="mail_body">
            {project && (
              <span className="subject">
                {`Updates for ${project} as on ${formatDate}`}
                <hr />
              </span>
            )}
            <div className="mail_body">
              {client && (
                <span className="client_name">
                  {`Hi - ${client}`},<br />
                  <br />
                </span>
              )}
              {project && (
                <span className="update_msg">
                  {`Following are the updates for ${project} as on ${formatDate} :`}
                  <br />
                  <br />
                </span>
              )}
              <HelpDeskListing
                list={completeTaskList}
                title={"List of Completed Tasks :"}
              />
              <HelpDeskListing  
                list={progressTask}
                title={"List of In-Progress Tasks :"}
              />
              <HelpDeskListing
                list={remainingTaskList}
                title={"List of Remaining Tasks :"}
              />
              <HelpDeskListing list={queriesList} title={"Queries :"} />
              <HelpDeskListing list={notes} title={"Notes :"} />
              {completeTaskList[0].value !== "" && (
                <>
                  Please check with the latest updates and let us know your
                  thoughts for the same.
                  <br />
                </>
              )}
              {tlName && (
                <>
                  <span className="thanks">
                    <br />
                    Thanks,
                    <br />
                    {tlName}
                  </span>
                </>
              )}
              <span className="total_worked"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpDesk;
