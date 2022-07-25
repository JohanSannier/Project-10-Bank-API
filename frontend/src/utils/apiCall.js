const url = "http://localhost:3001/api/v1";

const postLogin = async (userMail, userPassword) => {
  return fetch(`${url}/user/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      email: userMail,
      password: userPassword,
    },
  });
};

export { postLogin };
