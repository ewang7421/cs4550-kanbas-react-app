import KanbasNavigation from "./KanbasNavigation";
import Nav from "../Nav";

function Kanbas() {
  return (
    <div class="container h-100 mx-0 px-0">
      <div class="row mt-2">
        <div class="col">
          <Nav />
        </div>
      </div>
      <div class="row h-100">
        <div className="d-flex">
          <KanbasNavigation />
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Kanbas;
