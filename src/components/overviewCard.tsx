import up from "../assets/icon-up.svg";
import down from "../assets/icon-down.svg";

type OverviewCardProps = {
  name: string;
  icon: string;
  alt?: string;
  value: number | string;
  percentValue: number;
  scoreType?: string;
  mode?: string | "light" | "dark";
};

const OverviewCard = ({
  name,
  icon,
  alt,
  value,
  percentValue,
  scoreType,
  mode,
}: OverviewCardProps) => {
  return (
    <div
      className={`w-full max-w-none lg:max-w-64 p-6 transition-all duration-200 cursor-pointer ${
        mode === "light" ? "bg-card-light" : "bg-card"
      } ${
        mode === "light" ? "hover:bg-card-light-hover" : "hover:bg-card-hover"
      } rounded-md`}
    >
      <div className="flex flex-col justify-between gap-6 w-full">
        <div className="flex justify-between items-center">
          <h3
            className={`font-bold text-sm ${
              mode === "light" ? "text-pure-gray" : "text-blue-gray"
            }`}
          >
            {name}
          </h3>
          <img src={icon} alt={alt} />
        </div>

        {/* Second Line */}
        <div className="flex justify-between items-center">
          <h2
            className={`font-bold text-[2rem] leading-none transition-all duration-200 ${
              mode === "light" ? "text-black" : "text-white"
            }`}
          >
            {value}
          </h2>
          <div className="flex justify-center items-center gap-1 leading-normal">
            {scoreType === "green" ? (
              <img src={up} alt="Up Icon" />
            ) : (
              <img src={down} alt="Down Icon" />
            )}
            <h3
              className={`${
                scoreType === "green" ? "text-green" : "text-red"
              } font-bold text-xs`}
            >
              {percentValue}%
            </h3>
          </div>
        </div>
      </div>
      {/* First Line */}
    </div>
  );
};

export default OverviewCard;
