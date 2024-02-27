import { useEffect, useState } from "react";

const Header = () => {
  const [mode, setMode] = useState<string>("dark");

  const handleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.body.className = mode === "light" ? "light" : "";
  }, [mode]);

  return (
    <header
      className={`transition-all duration-300 w-full h-[15.25rem] rounded-header ${
        mode === "light" ? "bg-background-header-light" : "bg-background-header"
      }`}
    >
      <div className="flex justify-between items-center header-container max-w-[1440px] mx-auto px-40 py-9">
        <div className="flex flex-col justify-center items-start gap-1">
          <h1
            className={`${
              mode === "light" ? "text-black" : "text-white"
            } font-bold text-3xl transition-all duration-300`}
          >
            Social Media Dashboard
          </h1>
          <p
            className={`${
              mode === "light" ? "text-pure-gray" : "text-blue-gray"
            } font-bold text-sm transition-all duration-300`}
          >
            Total Followers: 23,004
          </p>
        </div>

        <div className="flex justify-center items-center gap-3">
          <h2
            className={`${
              mode === "light" ? "text-light-gray" : "text-blue-gray"
            } font-bold text-sm transition-all duration-200`}
          >
            Dark Mode
          </h2>
          <button
            className={`${
              mode === "light"
                ? "bg-light-bg-button"
                : "bg-gradient-to-r from-green-start to-green-stop"
            } rounded-full w-12 h-6 transition-all duration-300 flex justify-center items-center relative outline-none border-none`}
            onClick={() => handleMode()}
          >
            <div
              className={`w-[1.125rem] h-[1.125rem] rounded-full absolute ${
                mode === "light" ? "bg-white" : "bg-dark-blue"
              } transition-all duration-500 ${
                mode === "light" ? "translate-x-[65%]" : "-translate-x-[65%]"
              }`}
            ></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
