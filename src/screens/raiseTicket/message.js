import playIcon from "../../assets/play.svg";
import pauseIcon from "../../assets/pause.svg";
import telephoneIcon from "../../assets/telephone.svg";
import threeDotIcon from "../../assets/three-dot.svg";

export default function Message({ message }) {
  return (
    <div
      className={
        "border-b-2 flex justify-between p-4 " +
        (message.active ? " light-blue " : " bg-white ")
      }
    >
      {/* left */}
      <div>
        <div className="flex items-center mb-1">
          <img alt="blank" src={message.play ? playIcon : pauseIcon} />
          <h5
            className="font-semibold ml-1"
            style={{ color: "#151515", fontSize: 14 }}
          >
            {message.title}
          </h5>
        </div>
        <p className="text-sm mb-1" style={{ color: "#999999" }}>
          Requested by{" "}
          <span className="font-semibold" style={{ color: "#F48A21" }}>
            {message.requestBy}
          </span>
        </p>
        <p className="text-sm mb-1" style={{ color: "#999999" }}>
          Team{" "}
          <span className="font-semibold" style={{ color: "#151515" }}>
            {message.team}
          </span>
        </p>
        <p className="text-sm mb-2" style={{ color: "#999999" }}>
          Location{" "}
          <span className="font-semibold" style={{ color: "#151515" }}>
            {message.location}
          </span>
        </p>
        {message.tag === "New" && (
          <span
            className="rounded-full text-sm blue text-white"
            style={{ padding: "2px 12px" }}
          >
            {message.tag}
          </span>
        )}
        {message.tag === "Ongoing" && (
          <span
            className="rounded-full text-sm green text-white"
            style={{ padding: "2px 12px" }}
          >
            {message.tag}
          </span>
        )}
        {message.tag === "Closed" && (
          <span
            className="rounded-full text-sm red text-white"
            style={{ padding: "2px 12px" }}
          >
            {message.tag}
          </span>
        )}
      </div>

      {/* right */}
      <div className="flex flex-col justify-between">
        {/* top */}
        <div className="flex flex-col items-end">
          <div className="flex">
            <div
              className="text-white flex items-center justify-center orange w-4 h-4 rounded-full mr-4 font-bold"
              style={{ fontSize: 10 }}
            >
              2
            </div>
            <img alt="blank" src={threeDotIcon} />
          </div>
          <img alt="blank" src={telephoneIcon} className="w-4 h-4 mt-3" />
        </div>

        {/* bottom */}
        <div className="">
          <p className="text-sm mb-2" style={{ color: "#999999" }}>
            Site ID{" "}
            <span className="font-semibold" style={{ color: "#151515" }}>
              {message.siteId}
            </span>
          </p>
          <p className="text-sm" style={{ color: "#999999" }}>
            {" "}
            {message.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
}
