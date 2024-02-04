const formatDate = (value) => {
  const createAtData = new Date(value);
  const options = { month: "long", day: "numeric", year: "numeric" };
  return createAtData.toLocaleDateString("en-US", options);
};

export default formatDate;
