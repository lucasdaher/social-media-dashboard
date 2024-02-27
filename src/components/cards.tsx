import up from "../assets/icon-up.svg";
import down from "../assets/icon-down.svg";

type CardsProps = {
  cardColor?: string;
  socialMedia?: string;
  socialIcon: string;
  username: string;
  followers: number;
  score?: string;
  newFollowers?: number;
  percentFollowers?: number;
};

const Cards = ({
  cardColor,
  socialIcon,
  socialMedia,
  username,
  followers,
  score,
  newFollowers,
  percentFollowers,
}: CardsProps) => {
  return (
    <div
      className={`w-64 h-auto bg-card-bg py-8 px-16 rounded-md border-t-4 border-[${cardColor}]`}
    >
      <div className="flex justify-center items-center gap-2 mb-7">
        <img src={socialIcon} alt={socialMedia} />
        <h3 className="username text-xs font-bold leading-normal text-blue-gray">
          {username}
        </h3>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-white font-bold text-6xl">{followers}</h1>
        <h2 className="tracking-[0.3125rem] text-blue-gray mb-7">FOLLOWERS</h2>

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

export default Cards;
