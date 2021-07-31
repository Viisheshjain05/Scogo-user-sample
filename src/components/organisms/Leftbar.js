import projectIcon from "../../assets/projects.svg";
import helpDeskIcon from "../../assets/help-desk.svg";
import sitesIcon from "../../assets/sites.svg";
import teamIcon from "../../assets/team.svg";
import messageIcon from "../../assets/message.svg";
import rupeeIcon from "../../assets/rupee.svg";

export default function Leftbar() {
  return (
    <div
      className="w-20 flex flex-col items-center py-2"
      style={{ fontSize: 12, color: "#999999" }}
    >
      <div className="flex flex-col items-center relative w-full py-3">
        <img alt="blank" src={projectIcon} className="w-5 h-5" />
        <p className="">Projects</p>
      </div>
      <div className="flex flex-col items-center relative w-full py-3">
        <img alt="blank" src={helpDeskIcon} className="w-5 h-5" />
        <p className="">Help Desk</p>
      </div>
      <div className="flex flex-col items-center relative w-full py-3">
        <img alt="blank" src={sitesIcon} className="w-5 h-5" />
        <p className="">Sites</p>
      </div>
      <div className="flex flex-col items-center relative w-full py-3">
        <img alt="blank" src={teamIcon} className="w-5 h-5" />
        <p className="">Team</p>
      </div>
      <div
        className="flex flex-col items-center relative w-full py-3 light-blue"
        style={{ color: "#12355F" }}
      >
        <div className="absolute dark-blue w-1 left-0 top-0 h-full"> </div>
        <img alt="blank" src={messageIcon} className="w-5 h-5" />
        <p className="">Super Chat</p>
      </div>
      <div className="flex flex-col items-center relative w-full py-3">
        <img alt="blank" src={rupeeIcon} className="w-5 h-5" />
        <p className="">Payments</p>
      </div>
    </div>
  );
}
