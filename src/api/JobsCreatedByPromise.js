export const jobsCreatedByPromise = async (email, accessToken) => {
  const res = await fetch(
    `https://career-code-server-drab.vercel.app/jobs/applications?email=${email}`,
    {
      headers: { authorization: `Bearer ${accessToken}` },
    }
  );
  return await res.json();
};
