const url = "http://localhost:3001/api/v1";
let token = null;

const postLogin = async (userMail, userPassword) => {
  const res = await fetch(`${url}/user/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userMail,
      password: userPassword,
    }),
  });
  token = (await res.json()).body.token;
  console.log(token);
  return token;
};

const postProfile = async () => {
  const res = await fetch(`${url}/user/profile`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export { postLogin, postProfile };
