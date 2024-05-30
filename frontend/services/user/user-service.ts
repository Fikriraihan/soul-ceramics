export const getAllUsers = async () => {
  const users = await fetch("http://localhost:8000/api/users");
  const data = await users.json();
  return data;
};
