export const jobsCreatedByPromise = async (email) => {
  const res = await fetch(`https://career-code-server-drab.vercel.app/jobs/applications?email=${email}`);
  return await res.json();
};
