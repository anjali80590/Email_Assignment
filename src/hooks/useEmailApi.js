import { useState, useEffect } from "react";

export const useEmailApi = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    
    fetch("https://flipkart-email-mock.now.sh/")
      .then((res) => res.json())
      .then((data) => setEmails(data.list));
  }, []);

  return emails;
};
