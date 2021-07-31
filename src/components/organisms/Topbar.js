import Logo from "../../assets/logo.svg";
import messageIcon from "../../assets/message.svg";
import walletIcon from "../../assets/wallet.svg";
import notificationIcon from "../../assets/notification.svg";
import profilePicture from "../../assets/profile-photo.svg";
import arrowDown from "../../assets/arrow-below.svg";

export default function Topbar() {
  return (
    <nav>
      <div
        className="w-full py-1 px-4 flex items-center justify-between"
        style={{ height: 64 }}
      >
        {/* logo */}
        <div>
          <img src={Logo} alt={"SCOGO Networks"} />
        </div>

        {/* right icons */}
        <div className="flex space-x-6 items-center">
          <div className="relative">
            <img alt="blank" src={messageIcon} className="w-5 h-5" />
            <div
              className="absolute w-4 h-4 rounded-full orange -top-1.5 -right-1.5 
              text-white font-bold text-xs flex items-center justify-center"
              style={{ fontSize: 9 }}
            >
              3
            </div>
          </div>
          <div>
            <img alt="blank" src={walletIcon} className="w-5 h-5" />
          </div>
          <div className="relative">
            <img alt="blank" src={notificationIcon} className="w-5 h-5" />
            <div
              className="absolute w-4 h-4 rounded-full orange -top-1.5 -right-1.5 
              text-white font-bold flex items-center justify-center"
              style={{ fontSize: 9 }}
            >
              10
            </div>
          </div>
          <div className="flex space-x-2">
            <img alt="blank" src={profilePicture} />
            <img alt="blank" src={arrowDown} />
          </div>
        </div>
      </div>
    </nav>
  );
}
