export const createdOnDate = (user) => {
  const createdOn = new Date(user?.createdAt);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return createdOn.toLocaleDateString("en-US", options);
};
