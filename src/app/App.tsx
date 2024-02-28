import Card from "../components/card";
import Header from "../components/header";

import facebookIcon from "../assets/icon-facebook.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import youtubeIcon from "../assets/icon-youtube.svg";

import { useEffect, useState } from "react";
import OverviewCard from "../components/overviewCard";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.body.className = mode === "light" ? "light" : "";
  }, [mode]);

  return (
    <div>
      <Header mode={mode} handleMode={handleMode} />

      <main>
        <section className="flex lg:flex-row flex-col gap-6 lg:gap-2 justify-between items-center px-6 lg:px-40 max-w-[1440px] w-full mx-auto mt-[12rem] lg:mt-[8.5rem]">
          <Card
            cardColor="facebook"
            socialMedia="Facebook"
            socialIcon={facebookIcon}
            username="@nathanf"
            followers={1987}
            score="green"
            newFollowers={12}
            typeFollowers="FOLLOWERS"
            mode={mode}
          />

          <Card
            cardColor="twitter"
            socialMedia="Twitter"
            socialIcon={twitterIcon}
            username="@nathanf"
            followers={1044}
            score="green"
            newFollowers={99}
            typeFollowers="FOLLOWERS"
            mode={mode}
          />

          <Card
            cardColor="instagram"
            socialMedia="Instagram"
            socialIcon={instagramIcon}
            username="@realnathanf"
            followers={"11k"}
            score="green"
            newFollowers={1099}
            typeFollowers="FOLLOWERS"
            mode={mode}
          />

          <Card
            cardColor="youtube"
            socialMedia="YouTube"
            socialIcon={youtubeIcon}
            username="Nathan F."
            followers={8239}
            score="red"
            newFollowers={144}
            typeFollowers="SUBSCRIBERS"
            mode={mode}
          />
        </section>

        <section className="flex flex-col justify-center items-start mx-auto max-w-[468px] w-full lg:max-w-[1440px] lg:mx-auto lg:px-40 mt-10 px-6 mb-12">
          <div className="">
            <h1
              className={`text-2xl font-bold mb-6 transition-all duration-200 ${
                mode === "light" ? "text-pure-gray" : "text-white"
              }`}
            >
              Overview - Today
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-start items-center w-full">
            <OverviewCard
              name="Page Views"
              icon={facebookIcon}
              percentValue={3}
              value={87}
              scoreType="green"
              mode={mode}
            />

            <OverviewCard
              name="Likes"
              icon={facebookIcon}
              percentValue={2}
              value={52}
              scoreType="red"
              mode={mode}
            />

            <OverviewCard
              name="Likes"
              icon={instagramIcon}
              percentValue={2257}
              value={5462}
              scoreType="green"
              mode={mode}
            />

            <OverviewCard
              name="Profile Views"
              icon={instagramIcon}
              percentValue={1375}
              value={"52k"}
              scoreType="green"
              mode={mode}
            />

            <OverviewCard
              name="Retweets"
              icon={twitterIcon}
              percentValue={303}
              value={117}
              scoreType="green"
              mode={mode}
            />

            <OverviewCard
              name="Likes"
              icon={twitterIcon}
              percentValue={553}
              value={507}
              scoreType="green"
              mode={mode}
            />

            <OverviewCard
              name="Likes"
              icon={youtubeIcon}
              percentValue={19}
              value={107}
              scoreType="red"
              mode={mode}
            />

            <OverviewCard
              name="Total Views"
              icon={youtubeIcon}
              percentValue={12}
              value={1407}
              scoreType="red"
              mode={mode}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
