import Cards from "../components/cards";
import Header from "../components/header";

import facebookIcon from "../assets/icon-facebook.svg";

function App() {
  return (
    <>
      <Header />

      <main className="max-w-[1440px] mx-auto absolute top-[8.5rem] left-1/2">
        <Cards
          cardColor="#178FF5"
          socialMedia="Facebook"
          socialIcon={facebookIcon}
          username="@nathanf"
          followers={1987}
          score="green"
          newFollowers={12}
        />
      </main>
    </>
  );
}

export default App;
