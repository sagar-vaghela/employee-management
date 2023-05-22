import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
const Notes = ({
  fields,
  setFields,
  field,
  isAddButtonClicked,
  addButtonIsClicked,
  addField,
  index,
  placeholder,
  title,
}) => {

  useEffect(() => {
    addButtonIsClicked(false);
  }, [field.value])

  return (
    <>
      <div className="element-block">
        <div>
          <input
            type="text"
            placeholder={placeholder}
            name="list_note"
            id={title}
            className="form-control custom-input task_detail note_task"
            value={field.value}
            onChange={(e) => {
              const NoteIndex = fields.findIndex(
                (elm) => elm.id === field.id
              );
              const NoteList = fields[NoteIndex];
              NoteList.value = e.target.value;
              setFields([...fields]);
              if (
                e.target.value === "" &&
                field.id !== fields[fields.length - 1].id
              ) {
                const NoteData = fields.filter((elm) => elm.id !== field.id);
                setFields(NoteData);
              }
            }}
          />
          {index === 0 ? (
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="font-20"
              onClick={addField}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={faCircleMinus}
              className="font-20"
              onClick={() => {
                const NoteData = fields.filter((t) => t.id !== field.id);
                setFields(NoteData);
              }}
            ></FontAwesomeIcon>
          )}
          {field.value === "" && isAddButtonClicked === true && (
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
