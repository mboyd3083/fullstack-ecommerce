import SecondaryNavBar from "./SecondaryNavBar";
import PrimaryNavBar from "./PrimaryNavBar";
import Banner from "./Banner";
import SummerDealBanner from "./SummerDealBanner";

const Header = () => {
  return (
    <header className="header_container">
      <Banner />
      <SummerDealBanner />
      <PrimaryNavBar />
      <SecondaryNavBar />
    </header>
  );
};
export default Header;
