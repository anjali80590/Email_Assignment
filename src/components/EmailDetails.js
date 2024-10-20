import React, { useEffect, useState } from "react";
import { fetchEmailBody } from "../services/api";

const EmailDetails = ({ email, markFavorite, isFavorite }) => {
  const [emailBody, setEmailBody] = useState(null);

  useEffect(() => {
    async function loadEmailBody() {
      const details = await fetchEmailBody(email.id);
      setEmailBody(details.body);
    }

    if (email.id) {
      loadEmailBody();
    }
  }, [email.id]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          {email.subject || "No subject available"}
        </h2>

        <button
          className="px-2 py-1 bg-accent text-white rounded hover:bg-opacity-90"
          onClick={() => markFavorite(email.id)}
        >
          {isFavorite ? "Unfavorite" : "Mark as Favorite"}
        </button>
      </div>

      <p className="mb-4 text-gray-500">
        {email.date ? (
          <>
            {new Date(email.date).toLocaleDateString("en-GB")}{" "}
            {new Date(email.date).toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
            am
          </>
        ) : (
          "No date available"
        )}
      </p>

      <div
        dangerouslySetInnerHTML={{
          __html: emailBody || "<p>No content available</p>",
        }}
      />
    </div>
  );
};

export default EmailDetails;

// // src/components/EmailDetails.js
// import React, { useEffect, useState } from 'react';
// import { fetchEmailBody } from '../services/api';

// const EmailDetails = ({ email, markFavorite, isFavorite }) => {
//   const [emailBody, setEmailBody] = useState(null);

//   useEffect(() => {
//     async function loadEmailBody() {
//       const details = await fetchEmailBody(email.id); // Fetch only the body from the API
//       setEmailBody(details.body);
//     }

//     if (email.id) {
//       loadEmailBody();
//     }
//   }, [email.id]);

//   return (
//     <div className="p-6 ">
//       {/* Use the email object for subject and date */}
//       <h2 className="text-2xl font-bold mb-4">{email.subject || 'No subject available'}</h2>
//       <p className="mb-4 text-gray-500">
//         {email.date ? (
//           <>
//             {new Date(email.date).toLocaleDateString('en-GB')} {' '}
//             {new Date(email.date).toLocaleTimeString('en-GB')}
//           </>
//         ) : 'No date available'}
//       </p>

//       {/* Display the fetched email body */}
//       <div dangerouslySetInnerHTML={{ __html: emailBody || '<p>No content available</p>' }} />

//       {/* Mark as favorite button */}
//       <button
//         className={`mt-4 px-4 py-2 bg-accent text-white rounded hover:bg-opacity-90`}
//         onClick={() => markFavorite(email.id)}
//       >
//         {isFavorite ? 'Unfavorite' : 'Mark as Favorite'}
//       </button>
//     </div>
//   );
// };

// export default EmailDetails;
