export const myApplicationsPromise = async (email) => {
  const res = await fetch(`http://localhost:3000/applications?email=${email}`);
  return await res.json();
};
 