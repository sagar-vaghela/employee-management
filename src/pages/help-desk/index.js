import React, { useState, useEffect } from "react";
import styles from "./helpdesk.module.css";
import Moment from "moment";
import HelpDeskListing from "@/components/helpDesk/HelpDeskListing";
import CommonList from "@/components/helpDesk/CommonList";

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
  const [isCompletedClick, setIsCompletedClick] = useState(false);
  const [isProgressClicked, setIsProgressClicked] = useState(false);
  const [isNotesClicked, setIsNotesClicked] = useState(false);
  const [isRemainClicked, setIsRemainClicked] = useState(false);
  const [isQueriesClick, setIsQueriesClick] = useState(false);
  const formatDate = Moment().format("DD MMM, YYYY");

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
    setIsCompletedClick(true);
    if (completeTaskList.length === 1) {
      if (task.value !== "") {
        setCompleteTaskList([
          ...completeTaskList,
          { id: completeTaskList.length, value: "" },
        ]);
        setIsCompletedClick(false);
      }
    } else {
      if (completeTaskList[completeTaskList?.length - 1].value !== "") {
        setCompleteTaskList([
          ...completeTaskList,
          { id: completeTaskList.length, value: "" },
        ]);
        setIsCompletedClick(false);
      }
    }
  };

  const addProgress = (test) => {
    setIsProgressClicked(true);
    if (progressTask.length === 0) {
      if (test.value !== "") {
        setProgressTask([
          ...progressTask,
          { id: progressTask.length, value: "" },
        ]);
        setIsProgressClicked(false);
      }
    } else {
      if (progressTask[progressTask?.length - 1].value !== "") {
        setProgressTask([
          ...progressTask,
          { id: progressTask.length, value: "" },
        ]);
        setIsProgressClicked(false);
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
    setIsRemainClicked(true);
    if (remainingTaskList.length === 1) {
      if (remainingTask.value !== "") {
        setRemainingTaskList([
          ...remainingTaskList,
          { id: remainingTaskList.length, value: "" },
        ]);
        setIsRemainClicked(false);
      }
    } else {
      if (remainingTaskList[remainingTaskList?.length - 1].value !== "") {
        setRemainingTaskList([
          ...remainingTaskList,
          { id: remainingTaskList.length, value: "" },
        ]);
        setIsRemainClicked(false);
      }
    }
  };

  const addQueriesTask = (queriesTask) => {
    setIsQueriesClick(true);
    if (queriesList.length === 1) {
      if (queriesTask.value !== "") {
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
        <h1 className={styles.head}>I'm here to write your daily update.</h1>
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
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />
          </div>

          <CommonList
            fields={completeTaskList}
            setFields={setCompleteTaskList}
            addButtonIsClicked={setIsCompletedClick}
            isAddButtonClicked={isCompletedClick}
            addField={addTask}
            title="List of Completed Tasks :"
            placeholder="Done Task"
          />

          <CommonList
            fields={progressTask}
            setFields={setProgressTask}
            addButtonIsClicked={setIsProgressClicked}
            isAddButtonClicked={isProgressClicked}
            addField={addProgress}
            title="List of In-Progress Tasks :"
            placeholder="Enter In-Progress Task"
          />

          <CommonList
            fields={remainingTaskList}
            setFields={setRemainingTaskList}
            addButtonIsClicked={setIsRemainClicked}
            isAddButtonClicked={isRemainClicked}
            addField={addRemainingTask}
            title={"List of Remaining Tasks :"}
            placeholder="Remaining Tasks"
          />

          <CommonList
            fields={queriesList}
            setFields={setQueriesList}
            addButtonIsClicked={setIsQueriesClick}
            isAddButtonClicked={isQueriesClick}
            addField={addQueriesTask}
            title={"Queries :"}
            placeholder="Query"
          />
          <CommonList
            fields={notes}
            setFields={setNotes}
            addButtonIsClicked={setIsNotesClicked}
            isAddButtonClicked={isNotesClicked}
            addField={addNotes}
            title={"Notes:"}
            placeholder="Enter Notes"
          />
          <div className="form-group stud_detail">
            <label htmlFor="tl_name">TL Name : </label>
            <input
              type="text"
              className="form-control"
              id="tl_name"
              placeholder="TL Name"
              value={tlName}
              onChange={(e) => setTlName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-7">
          <div className={styles.mailBody}>
            {project && (
              <span className="subject">
                {`Updates for ${project} as on ${formatDate}`}
                <hr />
              </span>
            )}
            <div className={styles.mailBody}>
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
                <span>
                  Please check with the latest updates and let us know your
                  thoughts for the same.
                  <br />
                </span>
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
