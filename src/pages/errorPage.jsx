const ErrorPage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <div className="h-screen flex flex-col justify-center items-center gap-3 text-white">
      <h1 className="text-9xl font-bold animate-bounce-up">404</h1>
      <h1 className="text-3xl font-bold">Oops! Page Not Found</h1>
      <p className="text-center">
        The Page you're looking for seems to have wandered off into space.
      </p>
      <p>
        Don't worry, even astronauts get lost sometimes!
      </p>
      <p className="text-5xl animate-rotate mt-5">
        🚀
      </p>
    </div>
    <div id="particles" className="absolute z-[-1] animate-twinkle"></div>
    </div>
  );
};

export default ErrorPage;
