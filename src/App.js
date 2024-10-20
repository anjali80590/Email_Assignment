import React, { useState, useEffect } from "react";
import EmailList from "./components/EmailList";
import EmailDetails from "./components/EmailDetails";
import Filters from "./components/Filters";
import { fetchEmails } from "./services/api";

function App() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState(
    () => localStorage.getItem("selectedFilter") || "all"
  );

  useEffect(() => {
    const savedEmails = localStorage.getItem("emails");
    if (savedEmails) {
      setEmails(JSON.parse(savedEmails));
    } else {
      async function loadEmails() {
        const emailList = await fetchEmails();
        const emailWithReadStatus = emailList.map((email) => ({
          ...email,
          isRead: false,
          isFavorite: false,
        }));
        setEmails(emailWithReadStatus);
        localStorage.setItem("emails", JSON.stringify(emailWithReadStatus));
      }
      loadEmails();
    }
  }, []);

  useEffect(() => {
    if (emails.length > 0) {
      localStorage.setItem("emails", JSON.stringify(emails));
    }
  }, [emails]);

  const handleEmailSelect = (email) => {
    const updatedEmails = emails.map((e) =>
      e.id === email.id ? { ...e, isRead: true } : e
    );
    setEmails(updatedEmails);
    setSelectedEmail(email);
  };

  const markFavorite = (emailId) => {
    const updatedEmails = emails.map((e) =>
      e.id === emailId ? { ...e, isFavorite: !e.isFavorite } : e
    );
    setEmails(updatedEmails);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    localStorage.setItem("selectedFilter", newFilter);
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#F4F5F9" }}>
      <div style={{ width: "100%" }}>
        <Filters activeFilter={filter} onFilterChange={handleFilterChange} />

        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ width: selectedEmail ? "33vw" : "100vw" }}>
            <EmailList
              emails={emails}
              onSelectEmail={handleEmailSelect}
              selectedEmailId={selectedEmail?.id}
              filter={filter}
              favorites={favorites}
            />
          </div>

          {selectedEmail && (
            <div style={{ width: "67vw" }}>
              <EmailDetails
                email={selectedEmail}
                markFavorite={markFavorite}
                isFavorite={selectedEmail.isFavorite}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
