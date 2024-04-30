import BanniereTest from "./BanniereTest";
import HoroscopeTest from "./HoroscopeTest";
import ImagesTest from "./ImagesTest";
import "./Banniere.css";

function Banniere() {
  return (
    <div className="banniere">
      <HoroscopeTest />
      <ImagesTest />
      <BanniereTest />
    </div>
  );
}

export default Banniere;
