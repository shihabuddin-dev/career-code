export const myApplicationsPromise = async (email, accessToken) => {
  const res = await fetch(`https://career-code-server-drab.vercel.app/applications?email=${email}`, {
    headers: { authorization: `Bearer ${accessToken}` },
  });
  return await res.json();
};
