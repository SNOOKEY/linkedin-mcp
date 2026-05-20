export function searchJobs(role, location = "Remote") {
  const encodedRole = encodeURIComponent(role);
  const encodedLocation = encodeURIComponent(location);

  return `https://www.linkedin.com/jobs/search/?keywords=${encodedRole}&location=${encodedLocation}`;
}
