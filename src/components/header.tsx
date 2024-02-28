type HeaderProps = {
  mode?: string;
  handleMode?: () => void;
};

const Header = ({ mode, handleMode }: HeaderProps) => {
  return (
    <header
      className={`transition-all duration-300 w-full h-[15.25rem] rounded-header absolute top-0 left-0 z-0 ${
        mode === "light" ? "bg-background-header-light" : "bg-background-header"
      }`}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center max-w-[468px] lg:max-w-[1440px] mx-auto px-6 lg:px-40 py-9">
        <div className="flex flex-col justify-start items-start lg:justify-between lg:gap-1 w-full mb-5">
          <h1
            className={`${
              mode === "light" ? "text-black" : "text-white"
            } font-bold text-2xl lg:text-3xl transition-all duration-300 w-full`}
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

        <div className="flex justify-between lg:justify-end items-center gap-3 w-full pt-5 lg:mt-0 lg:border-t-0 border-t-2 border-[#333A55]">
          <h2
            className={`${
              mode === "light" ? "text-light-gray" : "text-blue-gray"
            } font-bold text-sm transition-all duration-200`}
          >
            Dark Mode
          </h2>
          <button
            title="Change mode"
            type="button"
            className={`${
              mode === "light"
                ? "bg-light-bg-button"
                : "bg-gradient-to-r from-green-start to-green-stop"
            } rounded-full w-12 h-6 transition-all duration-300 flex justify-center items-center relative outline-none border-none`}
            onClick={handleMode}
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
