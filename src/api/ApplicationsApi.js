export const myApplicationsPromise = async (email) => {
  const res = await fetch(`http://localhost:3000/applications?email=${email}`, {
    credentials: "include",
  });
  return await res.json();
};
