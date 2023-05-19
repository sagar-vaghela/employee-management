import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
const Notes = ({
  notes,
  setNotes,
  testNotes,
  isNotesClicked,
  addNotes,
  index,
}) => {
  return (
    <>
      <div className="element-block">
        <div>
          <input
            type="text"
            placeholder="Note"
            name="list_note"
            id="txt_note"
            class="form-control custom-input task_detail note_task"
            value={testNotes.value}
            onChange={(e) => {
              const NoteIndex = notes.findIndex(
                (elm) => elm.id === testNotes.id
              );
              const NoteList = notes[NoteIndex];
              NoteList.value = e.target.value;
              setNotes([...notes]);
              if (
                e.target.value === "" &&
                testNotes.id !== notes[notes.length - 1].id
              ) {
                const NoteData = notes.filter((elm) => elm.id !== testNotes.id);
                setNotes(NoteData);
              }
            }}
          />
          {index === 0 ? (
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="font-20"
              onClick={addNotes}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={faCircleMinus}
              className="font-20"
              onClick={() => {
                const NoteData = notes.filter((t) => t.id !== testNotes.id);
                setNotes(NoteData);
              }}
            ></FontAwesomeIcon>
          )}
          {testNotes.value === "" && isNotesClicked === true && (
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

export default Notes;
