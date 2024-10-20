import React from "react";

const EmailBody = ({ email, toggleFavorite }) => {
  const emailDate = new Date(email.date);
  const isValidDate = !isNaN(emailDate.getTime());

  return (
    <div className="email-body">
      <h2>{email.subject}</h2>
      <div className="email-details">
        {isValidDate ? (
          <span>
            {emailDate.toLocaleDateString("en-GB")}{" "}
            {emailDate.toLocaleTimeString("en-US")}
          </span>
        ) : (
          <span>Invalid Date</span>
        )}
      </div>
      <p>{email.body}</p>
      <button className="favorite-btn" onClick={() => toggleFavorite(email.id)}>
        {email.isFavorite ? "Remove from favorites" : "Mark as favorite"}
      </button>
    </div>
  );
};

export default EmailBody;
