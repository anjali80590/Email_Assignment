import React, { useState } from "react";
import EmailList from "../components/EmailList";
import EmailBody from "../components/EmailBody";
import FilterBar from "../components/FilterBar";
import { useEmailApi } from "../hooks/useEmailApi";
import "./EmailClient.css";

const EmailClient = () => {
  const emails = useEmailApi();
  const [selectedEmailId, setSelectedEmailId] = useState(null);
  const [filters, setFilters] = useState({});

  const handleEmailClick = (emailId) => {
    setSelectedEmailId(emailId);
  };

  const handleFilterChange = (filterType) => {
    setFilters({ ...filters, type: filterType });
  };

  return (
    <div className="email-client">
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="email-view">
        <EmailList
          emails={emails}
          onEmailClick={handleEmailClick}
          selectedEmailId={selectedEmailId}
        />
        {selectedEmailId && <EmailBody emailId={selectedEmailId} />}
      </div>
    </div>
  );
};

export default EmailClient;
