import Title from "./Title";
import Line from "./Line";
import Weeks from "./Weeks";

function SideBar() {
  return (
    <div className="flex flex-col gap-14 lg:w-100">
      <Title />
      <Line />
      <Weeks />
    </div>
  );
}

export default SideBar;
