







// // // // // src/App.js
// import React, { useState, useEffect } from 'react';
// import EmailList from './components/EmailList';
// import EmailDetails from './components/EmailDetails';
// import Filters from './components/Filters';
// import { fetchEmails } from './services/api';

// function App() {
//   const [emails, setEmails] = useState([]);  // Manage emails with read status
//   const [selectedEmail, setSelectedEmail] = useState(null); // Initially, no email is selected
  
//   const [favorites, setFavorites] = useState([]); // Manage favorite emails
// const [filter, setFilter] = useState('all');


//   // Fetch the email list (from the API) and mark them as unread initially
//   useEffect(() => {
//     async function loadEmails() {
//       const emailList = await fetchEmails();
//       const emailWithReadStatus = emailList.map((email) => ({
//         ...email,
//         isRead: false, // Mark unread initially
//         isFavorite: false, // Mark as not favorite initially
//       }));
//       setEmails(emailWithReadStatus);
//     }
//     loadEmails();
//   }, []);

//   // Handle selecting an email and mark it as read
//   const handleEmailSelect = (email) => {
//     const updatedEmails = emails.map((e) =>
//       e.id === email.id ? { ...e, isRead: true } : e
//     );
//     setEmails(updatedEmails);
//     setSelectedEmail(email); // Set the selected email object
//   };

//   // Handle marking an email as favorite
//   const markFavorite = (emailId) => {
//     const updatedEmails = emails.map((e) =>
//       e.id === emailId ? { ...e, isFavorite: !e.isFavorite } : e
//     );
//     setEmails(updatedEmails);
//   };

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//   };


//   return (
//     <div style={{ height: '100vh', backgroundColor: '#F4F5F9' }}>
//       <div style={{ width: '100%' }}>
//         {/* Filters at the top */}
//         <Filters activeFilter={filter} onFilterChange={handleFilterChange} />

//         <div style={{ display: 'flex', height: '100%' }}>
//           {/* Initially full width for email list */}
//           <div style={{ width: selectedEmail ? '33vw' : '100vw' }}>
//             <EmailList
//               emails={emails}
//               onSelectEmail={handleEmailSelect}
//               selectedEmailId={selectedEmail?.id}
//               filter={filter}
//               favorites={favorites}
//             />
//           </div>

//           {/* When email is selected, show the email details on the right */}
//           {selectedEmail && (
//             <div style={{ width: '67vw' }}>
//               <EmailDetails
//                 email={selectedEmail}  // Pass the selected email object
//                 markFavorite={markFavorite}
//                 isFavorite={selectedEmail.isFavorite}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import EmailList from "./components/EmailList";
import EmailDetails from "./components/EmailDetails";
import Filters from "./components/Filters";
import { fetchEmails } from "./services/api";

function App() {
  const [emails, setEmails] = useState([]); // Manage emails with read status
  const [selectedEmail, setSelectedEmail] = useState(null); // Initially, no email is selected
  const [favorites, setFavorites] = useState([]); // Manage favorite emails
  const [filter, setFilter] = useState(
    () => localStorage.getItem("selectedFilter") || "all"
  );

  // Fetch the email list (from the API or localStorage) and mark them as unread initially
  useEffect(() => {
    const savedEmails = localStorage.getItem("emails");
    if (savedEmails) {
      setEmails(JSON.parse(savedEmails)); // Load emails from localStorage
    } else {
      async function loadEmails() {
        const emailList = await fetchEmails();
        const emailWithReadStatus = emailList.map((email) => ({
          ...email,
          isRead: false, // Mark unread initially
          isFavorite: false, // Mark as not favorite initially
        }));
        setEmails(emailWithReadStatus);
        localStorage.setItem("emails", JSON.stringify(emailWithReadStatus)); // Save to localStorage
      }
      loadEmails();
    }
  }, []);

  // Save email updates (read/unread and favorite status) to localStorage
  useEffect(() => {
    if (emails.length > 0) {
      localStorage.setItem("emails", JSON.stringify(emails));
    }
  }, [emails]);

  // Handle selecting an email and mark it as read
  const handleEmailSelect = (email) => {
    const updatedEmails = emails.map((e) =>
      e.id === email.id ? { ...e, isRead: true } : e
    );
    setEmails(updatedEmails);
    setSelectedEmail(email); // Set the selected email object
  };

  // Handle marking an email as favorite
  const markFavorite = (emailId) => {
    const updatedEmails = emails.map((e) =>
      e.id === emailId ? { ...e, isFavorite: !e.isFavorite } : e
    );
    setEmails(updatedEmails);
  };

  // Handle filter change and persist to localStorage
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    localStorage.setItem("selectedFilter", newFilter); // Save selected filter to localStorage
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#F4F5F9" }}>
      <div style={{ width: "100%" }}>
        {/* Filters at the top */}
        <Filters activeFilter={filter} onFilterChange={handleFilterChange} />

        <div style={{ display: "flex", height: "100%" }}>
          {/* Initially full width for email list */}
          <div style={{ width: selectedEmail ? "33vw" : "100vw" }}>
            <EmailList
              emails={emails}
              onSelectEmail={handleEmailSelect}
              selectedEmailId={selectedEmail?.id}
              filter={filter}
              favorites={favorites}
            />
          </div>

          {/* When email is selected, show the email details on the right */}
          {selectedEmail && (
            <div style={{ width: "67vw" }}>
              <EmailDetails
                email={selectedEmail} // Pass the selected email object
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
