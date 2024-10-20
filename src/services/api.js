
export const fetchEmails = async () => {
  const response = await fetch("https://flipkart-email-mock.now.sh/");
  const data = await response.json();
  return data.list;
};


export const fetchEmailBody = async (emailId) => {
  const response = await fetch(
    `https://flipkart-email-mock.now.sh/?id=${emailId}`
  );
  const data = await response.json();
  return data;
};
