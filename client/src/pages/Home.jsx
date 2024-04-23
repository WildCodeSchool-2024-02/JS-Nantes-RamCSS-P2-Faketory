import LastNews from "../components/LastNews";
import Sniper from "./Sniper";
import "../assets/css/grid.css";
import "../assets/icomoon/style.css";

function Home() {
  return (
    <div className="container-fluid mt-5">
      <div className="row animate-child-apparition">
        <div className="col-md-3 d-md-flex flex-column justify-content-md-center">
          <h1>Quelle est la vraie actualité ?</h1>
        </div>
        <div className="col-md-6 text-center">
          <Sniper />
        </div>
        <div className="col-md-3">
          <LastNews />
        </div>
      </div>
    </div>
  );
}
export default Home;
