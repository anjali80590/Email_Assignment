






import React from "react";

const EmailList = ({ emails, onSelectEmail, selectedEmailId, filter }) => {
  // Filter emails based on active filter
  const filteredEmails = emails.filter((email) => {
    if (filter === "unread") return !email.isRead; // Show unread emails
    if (filter === "read") return email.isRead; // Show read emails
    if (filter === "favorites") return email.isFavorite; // Show favorites
    return true; // Show all emails
  });

  // Dynamically set the styles for the email list container
  const listContainerStyle = {
    height: selectedEmailId ? "100vh" : "100vh", // Full height whether or not an email is selected
    overflowY: selectedEmailId ? "scroll" : "auto", // Scroll when an email is selected
  };

  return (
    <div
      className=" border-r pl-10 pr-10 border-border p-4 bg-background"
      style={listContainerStyle} // Apply dynamic inline styles
    >
      {filteredEmails.map((email) => (
        <div
          key={email.id}
          className={`p-6 mb-4 cursor-pointer rounded-lg shadow-sm border border-border ${
            selectedEmailId === email.id
              ? "bg-white border-l-4 border-accent"
              : "bg-readBg"
          } ${email.isRead ? "text-text" : "font-medium text-black"}`} // Style read vs unread
          onClick={() => onSelectEmail(email)} // Pass the entire email object
        >
          <div className="flex items-center space-x-4">
            {" "}
            {/* Space between circle and content */}
            <div className="w-12 h-12 rounded-full bg-accent text-white flex justify-center items-center font-medium text-lg">
              {email.from.name[0].toUpperCase()}
            </div>
            <div className="ml-4">
              {" "}
              {/* Main content section */}
              {/* Use different color for "From" text */}
              <p className="text-sm text-gray-500 mb-2">
                From:{" "}
                <span className="font-bold">
                  {email.from.name} ({email.from.email})
                </span>
              </p>
              <h3 className="text-md font-medium text-gray-600 mb-1 text-[14px]">
                Subject: <span className="font-bold">{email.subject}</span>
              </h3>
              {/* Short description with ellipsis */}
              <p
                className="text-sm text-gray-500 mb-3 truncate"
                style={{ maxWidth: "250px" }}
              >
                {email.short_description}
              </p>
              {/* Display date and time in "dd/MM/yyyy hh:mm a" format */}
              <p className="text-xs text-gray-500">
                {new Date(email.date).toLocaleDateString("en-GB")}{" "}
                {new Date(email.date).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}am
                {email.isFavorite && (
                  <span className="text-accent font-bold ml-5">Favorite</span>
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailList;
