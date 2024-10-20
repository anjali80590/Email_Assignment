import React from "react";

const EmailListItem = ({ email, onClick, isSelected }) => {
  const emailClass = email.isRead ? "email-item read" : "email-item unread";

  return (
    <div
      className={`email-item ${isSelected ? "selected" : ""} ${emailClass}`}
      onClick={onClick}
    >
      {/* Check that you're rendering a string or number, not an object */}
      <div className="email-avatar">{email.from.name[0]}</div>{" "}
      {/* Correctly accessing name */}
      <div className="email-details">
        <div className="email-from">{email.from.name}</div>{" "}
        {/* Accessing name properly */}
        <div className="email-subject">{email.subject}</div>
        <div className="email-preview">{email.shortDescription}</div>
        <div className="email-date">{email.date}</div>
      </div>
    </div>
  );
};

export default EmailListItem;
