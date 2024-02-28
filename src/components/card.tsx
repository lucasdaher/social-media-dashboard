import up from "../assets/icon-up.svg";
import down from "../assets/icon-down.svg";

type CardProps = {
  cardColor?: string;
  socialMedia?: string;
  socialIcon: string;
  username: string;
  followers: number | string;
  score?: string;
  newFollowers?: number;
  typeFollowers: string | "FOLLOWERS";
  mode?: string | "light" | "dark";
};

const Card = ({
  cardColor,
  socialIcon,
  socialMedia,
  username,
  followers,
  score,
  newFollowers,
  typeFollowers,
  mode,
}: CardProps) => {
  return (
    <div
      className={`w-full max-w-[468px] lg:w-64 h-auto ${
        mode === "light" ? "bg-card-light" : "bg-card"
      } z-10 transition-all duration-200 cursor-pointer ${
        mode === "light" ? "hover:bg-card-light-hover" : "hover:bg-card-hover"
      } py-8 rounded-md border-t-4 ${
        (cardColor === "facebook" && "border-facebook-color") ||
        (cardColor === "instagram" && "border-instagram-color-mid") ||
        (cardColor === "twitter" && "border-twitter-color") ||
        (cardColor === "youtube" && "border-youtube-color")
      }`}
    >
      <div className="flex justify-center items-center gap-2 mb-7">
        <img src={socialIcon} alt={socialMedia} />
        <h3
          className={`text-xs font-bold leading-normal transition-all duration-200 ${
            mode === "light" ? "text-black" : "text-blue-gray"
          }`}
        >
          {username}
        </h3>
      </div>

      <div className="flex flex-col justify-center items-center gap-[0.5rem]">
        <h1
          className={`${
            mode === "light" ? "text-black" : "text-white"
          } font-bold text-[3.5rem] leading-none transition-all ease-in-out duration-200`}
        >
          {followers}
        </h1>
        <h2
          className={`font-normal leading-normal text-xs tracking-[0.3125rem] ${
            mode === "light" ? "text-pure-gray" : "text-blue-gray"
          } mb-7 transition-all ease-in-out duration-200`}
        >
          {typeFollowers}
        </h2>

        {/* Recieved */}
        <div
          className={`flex justify-center items-center gap-1 ${
            score === "green" ? "text-green" : "text-red"
          }`}
        >
          {score === "green" ? (
            <img src={up} alt="Up Icon" />
          ) : (
            <img src={down} alt="Down Icon" />
          )}
          <h4
            className={`${
              score === "green" ? "text-green" : "text-red"
            } font-bold text-xs`}
          >
            {newFollowers} Today!
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
