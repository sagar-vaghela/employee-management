import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Queries = ({
    queriesList,
    setQueriesList,
    queriesTask,
    isQueriesClick,
    addQueriesTask,
}) => {
    return (
        <div className="element-block">
            <div className="">
                <input
                    type="text"
                    placeholder="Query"
                    name="list_query"
                    id="txt_query"
                    className="form-control custom-input task_detail query_task"
                    value={queriesList.value}
                    onChange={(e) => {
                        const index = queriesList.findIndex(
                            (element) => element.id === queriesTask.id
                        );
                        const list = queriesList[index];
                        list.value = e.target.value;
                        setQueriesList([...queriesList]);
                        if (
                            e.target.value === "" &&
                            queriesTask.id !== queriesList[queriesList.length - 1].id
                        ) {
                            const data = queriesList.filter(
                                (element) => element.id !== queriesTask.id
                            );
                            setQueriesList(data);
                        }
                    }}
                />
                {queriesTask.id === 0 ? (
                    <FontAwesomeIcon
                        icon={faCirclePlus}
                        className="font-20"
                        onClick={addQueriesTask}
                    ></FontAwesomeIcon>
                ) : (
                    <FontAwesomeIcon
                        icon={faCircleMinus}
                        className="font-20"
                        onClick={() => {
                            const data = queriesList.filter((t) => t.id !== queriesTask.id);
                            setQueriesList(data);
                        }}
                    ></FontAwesomeIcon>
                )}
                {queriesTask.value === "" && isQueriesClick === true && (
                    <span className="col-md-12 blank_error" style={{ color: "red" }}>
                        Please Fill Existing Field.
                    </span>
                )}

            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default Queries;
