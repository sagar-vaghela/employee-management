import React, { useState } from "react";
import {
  DesignationOptions,
  optionsReason,
  optionsTechnology,
  optionsType,
} from "@/components/lib/constans";
import styles from "./leaveRequest.module.css";

const LeaveRequest = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState(DesignationOptions[0]?.label);
  const [technology, setTechnology] = useState(optionsTechnology[0]?.label);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [type, setType] = useState(optionsType?.label);
  const [reason, setReason] = useState("");
  const [comment, setComment] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDesignation = (e) => {
    setDesignation(e?.target?.selectedOptions[0]?.label);
  };
  const handleTechnology = (e) => {
    setTechnology(e?.target?.selectedOptions[0].label);
  };
  const handleDate = (e) => {
    setDate(e?.target.value);
  };
  const handleTime = (e) => {
    setTime(e?.target?.value);
  };
  const handleToTime = (e) => {
    setToTime(e?.target?.value);
  };
  const handleType = (e) => {
    setType(e?.target?.selectedOptions[0].label);
  };
  const handleReason = (e) => {
    setReason(e?.target?.selectedOptions[0].label);
  };
  const handleComment = (e) => {
    setComment(e?.target?.value);
  };
  return (
    <>
      <div className="container">
        <div className="col-lg-6">
          <h2>Hourly Leave Request</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="emp_name"
              className="form-control emp_name"
              placeholder="Enter Name"
              id="emp_name"
              onChange={handleName}
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation:</label>
            <select
              className="chosen-select form-control text-input designation"
              id="designation"
              name="designation"
              onChange={handleDesignation}
              value={designation}
            >
              {DesignationOptions.map((DesOption) => (
                <option key={DesOption.value} value={DesOption.label}>
                  {DesOption.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Technology/Team:</label>
            <select
              name="technology"
              className="chosen-select form-control text-input technology"
              id="technology"
              onChange={handleTechnology}
              value={technology}
            >
              {optionsTechnology.map((TechOption) => (
                <option key={TechOption.value} value={TechOption.label}>
                  {TechOption.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              className="form-control date hasDatepicker"
              name="date"
              id="datepicker"
              onChange={handleDate}
              value={date}
            />
          </div>
          <div className="form-group">
            <label htmlFor="from_time">From Time:</label>
            <input
              type="text"
              placeholder="From Time"
              className="form-control from_time"
              name="from_time"
              id="from_time"
              onChange={handleTime}
              value={time}
            />
          </div>
          <div className="form-group">
            <label htmlFor="to_time">To Time:</label>
            <input
              type="text"
              placeholder="To Time"
              className="form-control to_time"
              name="to_time"
              id="to_time"
              onChange={handleToTime}
              value={toTime}
            />
          </div>
          <div className="form-group">
            <label htmlFor="flexibility_type">Flexibility Type:</label>
            <span>By default it will select not covering hours.</span>
            <select
              name="flexibility_type"
              className="chosen-select form-control text-input flexibility_type"
              id="flexibility_type"
              onChange={handleType}
              value={type}
            >
              {optionsType.map((TypeOption) => (
                <option key={TypeOption.value} value={TypeOption.label}>
                  {TypeOption.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="reason">Reason:</label>
            <select
              name="reason"
              className="form-control reason"
              id="reason"
              onChange={handleReason}
              value={reason}
            >
              {optionsReason.map((ReasonOption) => (
                <option key={ReasonOption.value} value={ReasonOption.label}>
                  {ReasonOption.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              placeholder="Enter Comment"
              className="form-control comment"
              id="comment"
              onChange={handleComment}
              value={comment}
            ></textarea>
          </div>
        </div>

        <div className="col-lg-6 mail_body">
          {name && (
            <div className="mail_subject">
              <h3>{`Hourly Leave Request - ${name}`}</h3>
              <h3><hr /></h3>
            </div>
          )}

          {name && (
            <div className="welcome_msg">
             Hi Sir/Madam
            </div>
          )}

          <div className="time_text">
            {date && <span className="mail_date"><br/>{`I wish to apply for leave on ${date}`}</span>}
            {time && <span className="mail_from_time">{` from ${time}`}</span>}
            {toTime && <span className="mail_to_time">{` to ${toTime}`}</span>}
          </div>
          {type && <div className="mail_flexibility_type"><br /><b>Flexibility Type:</b> <br />{`${type}`}</div>}

          {reason && <div className="mail_reason"> <br /><b>Reason:</b>  <br />{`${reason}`}</div>}

          {comment && (
            <div className="mail_comment">
              <br />
              <b>Comment:</b>
              <br />
              {`${comment}`}
          <br />
            </div>
          )}
          {date && (<div className="request_line"><br/>I request you to kindly approve my leave.</div>)}

          {name && (
            <div className="mail_emp_name">
              <br/>
              Thanks,
              <br />
              <span>{`${name}`}</span>
            </div>
          )}

          <div className="last_line">
            {DesignationOptions[0]?.label !== designation && (
              <span className="mail_designation" id="mail">
                {designation && <>{`${designation}`}</>}
              </span>
            )}
            {optionsTechnology[0]?.label !== technology && (
              <span className="mail_technology">
                {technology && <>{` [${technology}]`}</>}
                <br />
                {technology && <>HVG Infotech.</>}
              </span>
            )}
          </div>
        </div>
      </div>
      <div
        id="ui-datepicker-div"
        className="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"
      ></div>
    </>
  );
};

export default LeaveRequest;
