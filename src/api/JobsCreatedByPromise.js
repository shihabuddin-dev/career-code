export const jobsCreatedByPromise = async (email, accessToken) => {
  const res = await fetch(
    `http://localhost:3000/jobs/applications?email=${email}`,
    {
      headers: { authorization: `Bearer ${accessToken}` },
    }
  );
  return await res.json();
};
