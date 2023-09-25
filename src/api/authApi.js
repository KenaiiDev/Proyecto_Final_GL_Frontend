const login = async ({ username, password }) => {
  const response = await fetch(`${process.env.API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  return data;
};

const register = async ({ username, name, email, password, birthdate }) => {
  const response = await fetch(`${process.env.API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, name, email, password, birthdate }),
  });
  const data = await response.json();
  return data;
};

const updatePassword = async ({ oldPassword, newPassword, userId, token }) => {
  const response = await fetch(
    `${process.env.API_URL}/auth/update/password/${userId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ oldPassword, newPassword }),
    }
  );
  const data = await response.json();
  return data;
};

const updateProfile = async ({
  username,
  name,
  email,
  birthdate,
  userId,
  token,
}) => {
  const response = await fetch(
    `${process.env.API_URL}/auth/update/profile/${userId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ username, name, email, birthdate }),
    }
  );
  const data = await response.json();
  return data;
};

export { login, register, updatePassword, updateProfile };
