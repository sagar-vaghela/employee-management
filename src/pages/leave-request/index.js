import React, { useRef, useState } from "react";
import {
  DesignationOptions,
  optionsReason,
  optionsTechnology,
  optionsType,
} from "@/components/lib/constans";

const LeaveRequest = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState(DesignationOptions[0]?.label);
  const [technology, setTechnology] = useState(optionsTechnology[0]?.label);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [type, setType] = useState(optionsType?.label);
  const [reason, setReason] = useState("");
  const [comment, setComment] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const leaveRef = useRef(null);

  const days =
    new Date(toDate).getDate() - new Date(fromDate).getDate() + 1 || 0;

  const onClickCopy = async() => {
    if (leaveRef.current === null) return;
    const text = leaveRef.current.innerText;
    await navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the copy status after 2 seconds
    })
    .catch((error) => {
      console.error('Copy failed:', error);
    });
  };

  console.log('isCopied',isCopied);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDesignation = (e) => {
    setDesignation(e?.target?.selectedOptions[0]?.label);
  };
  const handleTechnology = (e) => {
    setTechnology(e?.target?.selectedOptions[0].label);
  };
  const handleFromDate = (e) => {
    setFromDate(e?.target?.value);
  };
  const handleToDate = (e) => {
    setToDate(e?.target?.value);
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
      <div className="header">
        <p>HVG Leave Request</p>
      </div>
      <div className="container">
        <div className="col-lg-6">
          <h2>Leave Request</h2>
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
            <label htmlFor="Technology">Technology/Team:</label>
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
            <label htmlFor="from_time">From Date:</label>
            <input
              type="date"
              className="form-control date hasDatepicker"
              name="date"
              id="datepicker"
              onChange={handleFromDate}
              value={fromDate}
            />
          </div>
          <div className="form-group">
            <label htmlFor="to_time">To Date:</label>
            <input
              type="date"
              className="form-control date hasDatepicker"
              name="date"
              id="datepicker"
              onChange={handleToDate}
              value={toDate}
            />
          </div>
          <div className="form-group">
            <label htmlFor="flexibility_type">Flexibility Type:</label>
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
          <button className="float_right" onClick={() => onClickCopy()}>
            Copy to Clipboard
          </button>

          <div id="mail_body" ref={leaveRef}>
            {name && (
              <div className="mail_subject">
                <h3>{`Hourly Leave Request - ${name}`}</h3>
                <h3>
                  <hr />
                </h3>
              </div>
            )}

            {name && <div className="welcome_msg">Hi Sir/Madam,</div>}

            <div className="time_text">
              {fromDate && (
                <span className="mail_date">
                  <br />
                  {`I wish to apply for leave from ${fromDate}`}
                </span>
              )}
              {toDate && <span className="mail_date">{` to ${toDate}`}</span>}
            </div>

            {days !== 0 && (
              <div className="mail_flexibility_type">
                <br /> <b>Total Days:</b>
                <br />
                {`${days}`}
              </div>
            )}

            {type && (
              <div className="mail_flexibility_type">
                <br />
                <b>Flexibility Type:</b> <br />
                {`${type}`}
              </div>
            )}

            {reason && (
              <div className="mail_reason">
                {" "}
                <br />
                <b>Reason:</b> <br />
                {`${reason}`}
              </div>
            )}

            {comment && (
              <div className="mail_comment">
                <br />
                <b>Comment:</b>
                <br />
                {`${comment}`}
                <br />
              </div>
            )}
            {(toDate || fromDate) && (
              <div className="request_line">
                <br />I request you to kindly approve my leave.
              </div>
            )}

            {name && (
              <div className="mail_emp_name">
                <br />
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
      </div>
    </>
  );
};

export default LeaveRequest;
