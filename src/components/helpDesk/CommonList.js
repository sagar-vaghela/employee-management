import React from "react";
import Notes from "./Notes";

function CommonList(props) {
  const {
    fields,
    setFields,
    addButtonIsClicked,
    isAddButtonClicked,
    addField,
    title,
    placeholder,
  } = props;

  const moveitem = (dragIndex, hoverIndex) => {
    const draggedTask = fields[dragIndex];
    const updatedList = [...fields];
    updatedList.splice(dragIndex, 1);
    updatedList.splice(hoverIndex, 0, draggedTask);
    setFields(updatedList);
  };
  return (
    <>
      <div className='form-group stud_detail'>
        <label htmlFor='client_name' className='task_label'>
          {title}
        </label>
        {fields.map((field, index) => {
          return (
            <Notes
              key={field.id}
              moveitem={moveitem}
              setFields={setFields}
              fields={fields}
              index={index}
              field={field}
              addButtonIsClicked={addButtonIsClicked}
              isAddButtonClicked={isAddButtonClicked}
              addField={() => addField(field)}
              placeholder={placeholder}
              title={title}
            />
          );
        })}
      </div>
    </>
  );
}

export default CommonList;
