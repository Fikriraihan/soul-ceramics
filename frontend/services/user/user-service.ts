const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAllUsers = async () => {
  const users = await fetch(`${API_BASE_URL}/api/users`);
  const data = await users.json();
  return data;
};
