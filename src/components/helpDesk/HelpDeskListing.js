import React from "react";

function HelpDeskListing(props) {
  const { list, title } = props;
  return (
    <>
      <span className="list_done">
        {list[0]?.value !== "" && (
          <b>
            <u>{title} </u>
          </b>
        )}
        <br />
        <ul>
          {list &&
            list.map((task, index) => {
              if (task.value !== "") {
                if (title === "List of Completed Tasks :") {
                  return (
                    <li key={index}>
                      {index + 1}. {task.value} <b>[Done]</b>
                    </li>
                  );
                }
                return (
                  <li key={index}>
                    {index + 1}. {task.value}
                  </li>
                );
              }
            })}
        </ul>
      </span>
    </>
  );
}

export default HelpDeskListing;
