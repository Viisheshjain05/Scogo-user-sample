import playIcon from "../../../assets/play.svg";
import pauseIcon from "../../../assets/pause.svg";
import fileIcon from "../../../assets/attachment-white.svg";
import ticketImage from "../../../assets/ticket-image.png";

export default function Ticket({ message }) {
  return (
    <div
      className="mr-4 ml-auto mt-6 rounded-lg bg-white"
      style={{ width: 335 }}
    >
      {/* image */}
      <div className="relative">
        <img alt="blank" src={ticketImage} />
        {/* new */}
        <div className="absolute top-3 blue px-3 text-white py-1 rounded-r-full">
          New
        </div>
        {/* 1/3 */}
        <div className="absolute top-3 right-3 bg-opacity-25 bg-black px-3 text-white py-1 rounded-full">
          1/3
        </div>
        {/* location */}
        <div className="absolute bottom-3 right-3 bg-opacity-25 bg-black px-3 text-white py-1 rounded-full">
          <div className="flex">
            <img alt="blank" src={fileIcon} className="mr-2" />
            <p>2</p>
          </div>
        </div>
        {/* files */}
        <div className="absolute bottom-3 left-3 bg-opacity-25 bg-black px-3 text-white py-1 rounded-full">
          Reliance, Mumbai
        </div>
      </div>

      {/* detail */}
      <div className="flex justify-between p-4">
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
          <p className="text-sm mb-1" style={{ color: "#888" }}>
            Requested by{" "}
            <span className="font-semibold" style={{ color: "#F48A21" }}>
              {message.requestBy}
            </span>
          </p>
          <p className="text-sm mb-1" style={{ color: "#888" }}>
            Team:{" "}
            <span className="font-semibold" style={{ color: "#12355F" }}>
              {message.team}
            </span>
          </p>
          <p className="text-sm mb-1" style={{ color: "#888" }}>
            Location:{" "}
            <span className="font-semibold" style={{ color: "#12355F" }}>
              {message.location}
            </span>
          </p>
          <p className="text-sm" style={{ color: "#888" }}>
            Status:{" "}
            <span className="font-semibold" style={{ color: "#12355F" }}>
              Created
            </span>
          </p>
        </div>

        {/* right */}
        <div className="flex flex-col justify-end">
          {/* bottom */}
          <div className="">
            <p className="text-sm mb-1" style={{ color: "#888" }}>
              Site ID{" "}
              <span className="font-semibold" style={{ color: "#12355F" }}>
                {message.siteId}
              </span>
            </p>
            <p className="text-sm" style={{ color: "#888" }}>
              {" "}
              {message.createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
