import React, { useState } from "react";
import {
  options,
  optionsReason,
  optionsTechnology,
  optionsType,
} from "@/components/lib/constans";

const LeaveRequest = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState(options[0]?.label);
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
              {options.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
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
              {optionsTechnology.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
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
              {optionsType.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
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
              {optionsReason.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
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
          <div className="mail_subject">
            {name && <h3>{`Hourly Leave Request - ${name}`}</h3>}
            {name && <hr />}
          </div>
          <div className="welcome_msg">{name && <>{`Hi Sir/Madam`}</>}</div>
          <div>
            <span className="mail_date">
              {date && <>{`I wish to apply for leave on ${date}`}</>}
            </span>
            <span className="mail_from_time">
              {time && <>{` From ${time}`}</>}
            </span>
            <span className="mail_to_time">
              {toTime && <>{` to ${toTime}`}</>}
            </span>
          </div>
          <div className="mail_flexibility_type">
            <br />
            <b>{type && <>{`Flexibility Type:`}</>}</b>
            <br />
            {type && <>{`${type}`}</>}
          </div>
          <div className="mail_reason">
            <br />
            <b>{reason && <>{`Reason:`}</>}</b>
            <br />
            {reason && <>{`${reason}`}</>}
          </div>
          <div className="mail_comment">
            <br />
            <b>{comment && <>{`Comment:`}</>}</b>
            <br />
            {comment && <>{`${comment}`}</>}
          </div>
          <div className="request_line">
            {date && <>{`I request you to kindly approve my leave.`}</>}
          </div>
          <div className="mail_emp_name">
            <br />
            {name && <>{`Thanks,`}</>}
            <br />
            {name && <>{`${name}`}</>}
          </div>
          <div className="last_line">
            {options[0]?.label !== designation && (
              <span className="mail_designation" id="mail">
                {designation && <>{`${designation}`}</>}
              </span>
            )}
            {optionsTechnology[0]?.label !== technology && (
              <span className="mail_technology">
                {technology && <>{` [${technology}]`}</>}
                <br />
                {technology && <>{`HVG Infotech.`}</>}
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
