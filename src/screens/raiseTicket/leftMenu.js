// TODO - HAVING TRANS ASSETS

// ? Assets
import searchIcon from "../../assets/search.svg";
import helpIcon from "../../assets/help.svg";
import plusIcon from "../../assets/plus.svg";
import topBottomIcon from "../../assets/top-bottom.svg";
import Message from "./message";

//? Common
import trans from "../../common/trans.json";

export default function LeftMenu({ data }) {
  return (
    <div
      className="overflow-auto"
      style={{ width: 420, backgroundColor: "#EEEEEE" }}
    >
      {/*search  */}
      <div className="my-3 mx-4">
        <div className="flex items-center">
          <div className="bg-white w-full mr-4 flex items-center py-2 rounded px-3">
            <img alt="blank" src={searchIcon} className="w-4 h-4 mr-4" />
            <input placeholder="Search" className="w-full focus:outline-none" />
          </div>
          <div>
            <img alt="blank" src={topBottomIcon} />
          </div>
        </div>
      </div>

      {/* chat tickets */}
      <div className="flex bg-white m-1">
        <div
          className="w-2/5 flex justify-center items-center font-bold py-2"
          style={{ color: "#999" }}
        >
          <p>{trans.Chat}</p>
          <div className="gray-8 w-4 h-4 rounded-full text-white text-xs flex items-center justify-center ml-3">
            1
          </div>
        </div>
        <div
          className="w-2/5 flex justify-center items-center font-bold border-b-2  py-2"
          style={{ color: "#12355F", borderColor: "#12355F" }}
        >
          <p>{trans.Tickets}</p>
          <div className="orange w-4 h-4 rounded-full text-white text-xs flex items-center justify-center ml-3">
            1
          </div>
        </div>
        <div className="w-1/5 flex justify-center items-center font-bold  py-2">
          <img alt="blank" src={helpIcon} />
        </div>
      </div>

      {/* raise */}
      <div
        className="flex bg-white m-1 px-6 py-2 font-semibold"
        style={{ color: "#12355F" }}
      >
        <div
          className="flex items-center justify-center w-full border rounded-md py-1"
          style={{ borderColor: "#12355F" }}
        >
          <img alt="blank" src={plusIcon} className="mr-1" />
          <p>{trans.RaiseTicket}</p>
        </div>
      </div>

      {/* tags */}
      <div
        className="flex bg-white m-1 px-6 py-3 font-semibold text-xs space-x-3"
        style={{ color: "#12355F" }}
      >
        <div
          style={{ display: "grid", placeContent: "center" }}
          className="px-5 py-1 rounded-full orange text-white"
        >
          {trans.All}
        </div>
        <div
          className="px-5 py-1 rounded-full border-2"
          style={{ color: "#999", borderColor: "#999" }}
        >
          {trans.New}
        </div>
        <div
          className="px-5 py-1 rounded-full border-2"
          style={{ color: "#999", borderColor: "#999" }}
        >
          {trans.Ongoing}
        </div>
        <div
          className="px-5 py-1 rounded-full border-2"
          style={{ color: "#999", borderColor: "#999" }}
        >
          {trans.Closed}
        </div>
      </div>

      {/* message */}
      {data.map((message, ind) => (
        <Message key={ind} message={message} />
      ))}
    </div>
  );
}
