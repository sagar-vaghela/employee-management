import React, { useState } from "react";

const LeaveRequest = () => {
  const options = [
    { value: "", label: "Select Designation" },
    { value: "126", label: "Accounting Assistant" },
    { value: "53", label: "Accounting Head" },
    { value: "36", label: "Admin" },
    { value: "76", label: "Assistant" },
    { value: "127", label: "Assistant HR Executive" },
    { value: "52", label: "Assistant Network Engineer" },
    { value: "130", label: "Assistant Project Manager" },
    { value: "77", label: "Associate Team Leader - Marketing" },
    { value: "72", label: "Back Office Supervisor" },
    { value: "65", label: "Business Development Executive" },
    { value: "78", label: "Business Development Executive" },
    { value: "60", label: "Business Development Manager" },
    { value: "79", label: "Campaign Manager" },
    { value: "80", label: "Chief Executive Officer" },
    { value: "81", label: "Chief Technology Officer" },
    { value: "120", label: "Composition Analyst" },
    { value: "82", label: "Content Leader" },
    { value: "83", label: "Content Project Manager" },
    { value: "84", label: "Content Writer" },
    { value: "85", label: "Digital Marketing Analyst" },
    { value: "86", label: "English Trainer" },
    { value: "118", label: "Graphic Analyst" },
    { value: "56", label: "HR Executive" },
    { value: "69", label: "HR Manager" },
    { value: "63", label: "Jr. Business Development Associate" },
    { value: "67", label: "Jr. Business Development Executive" },
    { value: "87", label: "Jr. Marketing Executive" },
    { value: "123", label: "Jr. Promotion Analyst" },
    { value: "116", label: "Jr. Web Analyst" },
    { value: "88", label: "Jr. Web Designer" },
    { value: "61", label: "Jr.SEO Professional" },
    { value: "89", label: "Lead Administrator Networking" },
    { value: "90", label: "Lead Website Administrator" },
    { value: "91", label: "Link Building Specialist" },
    { value: "48", label: "Marketing Executive" },
    { value: "122", label: "Media Analyst" },
    { value: "46", label: "Mobile App. Designer" },
    { value: "62", label: "Network Administrator" },
    { value: "128", label: "Online Administrator" },
    { value: "44", label: "Online Data Entry Operator" },
    { value: "92", label: "Online Marketing Executive" },
    { value: "93", label: "Peon" },
    { value: "94", label: "President – HR" },
    { value: "39", label: "Project Manager" },
    { value: "47", label: "QA Engineer" },
    { value: "74", label: "Requirement Analyst" },
    { value: "95", label: "Sales Executive" },
    { value: "96", label: "SEO Assistant Team Leader" },
    { value: "97", label: "SEO Professional" },
    { value: "98", label: "SEO Team Leader" },
    { value: "38", label: "Software Engineer" },
    { value: "125", label: "Sr. Assistant Team Leader" },
    { value: "73", label: "Sr. Business Development Executive" },
    { value: "121", label: "Sr. Composition Analyst" },
    { value: "99", label: "Sr. Content Writer" },
    { value: "129", label: "Sr. HR Executive" },
    { value: "57", label: "Sr. HR Manager" },
    { value: "68", label: "Sr. Marketing Business Analyst" },
    { value: "100", label: "Sr. Marketing Executive" },
    { value: "64", label: "Sr. Mobile App Designer" },
    { value: "70", label: "Sr. Network Administrator" },
    { value: "101", label: "Sr. QA Engineer" },
    { value: "102", label: "Sr. Sales Executive" },
    { value: "54", label: "Sr. Software Engineer" },
    { value: "124", label: "Sr. Team Leader" },
    { value: "117", label: "Sr. Web Analyst" },
    { value: "103", label: "Sr. Web Designer" },
    { value: "104", label: "Sr. Website Administrator" },
    { value: "105", label: "Sr.Business Development Manager" },
    { value: "106", label: "Sr.Campaign Manager" },
    { value: "119", label: "Sr.Graphic Analyst" },
    { value: "131", label: "Sr.Recruitment Specialist" },
    { value: "107", label: "Sr.SEO Professional" },
    { value: "37", label: "Team Leader" },
    { value: "55", label: "Technical Leader" },
    { value: "108", label: "Trainee Business Development Associate" },
    { value: "109", label: "Trainee Mobile App Designer" },
    { value: "110", label: "Trainee QA Engineer" },
    { value: "59", label: "Trainee Software Engineer" },
    { value: "111", label: "Trainee Web Designer" },
    { value: "112", label: "Vice President Marketing" },
    { value: "113", label: "VP Finance & Administration" },
    { value: "114", label: "Web Design Team Leader" },
    { value: "45", label: "Web Designer" },
    { value: "115", label: "Website Administrator" },
  ]
  const optionsTechnology = [
    { value: "", label: "Select Technology" },
    { value: "7", label: "ASP.NET" },
    { value: "8", label: "Design" },
    { value: "22", label: "Digital Marketing" },
    { value: "18", label: "Finance" },
    { value: "9", label: "Game" },
    { value: "17", label: "HR" },
    { value: "11", label: "JAVA" },
    { value: "16", label: "Management" },
    { value: "13", label: "Marketing" },
    { value: "6", label: "Mobile" },
    { value: "26", label: "Mobile QA" },
    { value: "24", label: "NA" },
    { value: "20", label: "Other" },
    { value: "5", label: "PHP" },
    { value: "21", label: "Python" },
    { value: "15", label: "QA" },
    { value: "25", label: "R&D" },
    { value: "10", label: "ROR" },
    { value: "14", label: "Support" },
    { value: "19", label: "UrbanIndia" },
    { value: "27", label: "Web QA" },
  ]
  const optionsType = [
    { value: "0", label: "Select Flexibility Type" },
    { value: "1", label: "Not Covering hours" },
    { value: "2", label: "Covering hours" },
  ]
  const optionsReason = [
    { value: "3", label: "Sick Leave" },
    { value: "4", label: "Out of Station" },
    { value: "5", label: "Family Function" },
    { value: "6", label: "Exams" },
    { value: "7", label: "Attend Marriage/engagement/or any related functions" },
    { value: "9", label: "Hourly leaves" },
    { value: "10", label: "Out for work" },
    { value: "11", label: "submission of Project reports" },
    { value: "12", label: "Own Marriage" },
    { value: "13", label: "Religious Function" },
    { value: "14", label: "His/Her Engagement" },
    { value: "15", label: "Project Presentations" },
    { value: "16", label: "Family Issue." },
    { value: "17", label: "Other" },
    { value: "19", label: "Urgent Leave" },
    { value: "20", label: "College Convocation" },
    { value: "21", label: "Getting Engaged" },
    { value: "22", label: "Project Documentation Leave" },
    { value: "23", label: "Submission of Final Project." },
    { value: "24", label: "Presentation Preparation" },
    { value: "25", label: "Festival leave" },
    { value: "26", label: "College Functions" },
    { value: "27", label: "Social Function" },
    { value: "28", label: "Project work - College Visit" },
    { value: "29", label: "Doctor's appointment" },
    { value: "30", label: "Going out with Family" },
    { value: "31", label: "Heavy Rain" },
    { value: "32", label: "Personal Reason" },
    { value: "33", label: "Religious Trip" },
    { value: "34", label: "College Reporting" },
    { value: "35", label: "College Work" },
    { value: "37", label: "Medical Treatment" },
    { value: "38", label: "Marriage Shopping" },
    { value: "39", label: "Matrimonial" },
    { value: "40", label: "Funeral" },
    { value: "41", label: "Rainy Day" },
  ]
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState(options?.label);
  const [technology, setTechnology] = useState(optionsTechnology?.label);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [totime, setToTime] = useState("");
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
    setReason(e?.target?.selectedOptions[0].label)
  };
  const handleComment = (e) => {
    setComment(e?.target?.value);
  };
  return (
    <>
      <div className="container" >
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
              value={totime}
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
              {
                optionsType.map((option) => (
                  <option key={option.value} value={option.label}>
                    {option.label}
                  </option>
                ))
              }
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
              {optionsReason.map((option)=>(
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
          <div className='welcome_msg'>{name && <>{`Hi Sir/Madam`}</>}
          </div>
          <div>
            <span className='mail_date'>{date && <>{`I wish to apply for leave on ${date}`}</>}</span>
            <span className='mail_from_time'>{time && <>{` From ${time}`}</>}</span>
            <span className='mail_to_time'>{totime && <>{` to ${totime}`}</>}</span>
          </div>
          <div className='mail_flexibility_type'><br />
            <b>{type && <>{`Flexibility Type:`}</>}</b><br />{type && <>{`${type}`}</>}
          </div>
          <div className='mail_reason'>
            <br />
            <b>{reason && <>{`Reason:`}</>}</b><br />{reason && <>{`${reason}`}</>}
          </div>
          <div className='mail_comment'>
            <br />
            <b>{comment && <>{`Comment:`}</>}</b><br />{comment && <>{`${comment}`}</>}
          </div>
          <div className='request_line'>{date && <>{`I request you to kindly approve my leave.`}</>}</div>
          <div className='mail_emp_name'>
            <br />
            {name && <>{`Thanks,`}</>}
            <br />
            {name && <>{`${name}`}</>}
          </div>
          <div className='last_line'>
            <span className='mail_designation' id="mail">{designation && <>{`${designation}`}</>}</span>
            <span className='mail_technology'>{technology && <>{` [${technology}]`}</>}<br/>{technology && <>{`HVG Infotech.`}</>}</span>
          </div>
        </div>
      </div>
      <div id="ui-datepicker-div" className="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>
    </>
  );
};

export default LeaveRequest;
