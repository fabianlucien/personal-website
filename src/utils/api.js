const axios = require("axios");

const sendEmail = (name, location, email, message) =>
  new Promise((resolve, reject) => {
    if (name === "error") {
      reject();
    }
    axios
      .post("https://zapier-mail.herokuapp.com/", {
        name,
        location,
        email,
        message
      })
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });

export default sendEmail;
