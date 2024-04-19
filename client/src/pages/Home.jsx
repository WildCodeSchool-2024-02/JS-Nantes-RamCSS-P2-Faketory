import LastNews from "../components/LastNews";
import Sniper from "./Sniper";
import "../assets/css/grid.css";
import "../assets/icomoon/style.css";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h1>Quelle est la vraie actualité ?</h1>
        </div>
        <div className="col-md-6">
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
