
const Error = ({ message = "Something went wrong" }) => {
  return (
    <main id="error">
      <div className="container bg-[white]  flex items-center justify-center h-[100vh] w-full">{message}</div>
    </main>
  );
};

export default Error;
