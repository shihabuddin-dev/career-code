export const myApplicationsPromise = async (email) => {
  const res = await fetch(`https://career-code-server-drab.vercel.app/applications?email=${email}`);
  return await res.json();
};
 