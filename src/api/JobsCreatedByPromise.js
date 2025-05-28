export const jobsCreatedByPromise = async (email) => {
  const res = await fetch(`http://localhost:3000/jobs?email=${email}`);
  return await res.json();
};
