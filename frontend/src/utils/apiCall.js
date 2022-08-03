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
  return token;
};

const postSignup = async (
  userMail,
  userPassword,
  userFirstName,
  userLastName
) => {
  const res = await fetch(`${url}/user/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userMail,
      password: userPassword,
      firstName: userFirstName,
      lastName: userLastName,
    }),
  });
  return res.json();
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

const putProfile = async (firstName, lastName) => {
  const profile = {
    firstName,
    lastName,
  };
  const res = await fetch(`${url}/user/profile`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profile),
  });
  const updatedProfile = await res.json();
  return updatedProfile;
};

export { postLogin, postProfile, postSignup, putProfile };
