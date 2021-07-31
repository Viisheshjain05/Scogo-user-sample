import emojiIcon from "../../../assets/emoji.svg";
import cameraIcon from "../../../assets/camera.svg";
import fileIcon from "../../../assets/attachment.svg";
import sendIcon from "../../../assets/send.svg";

export default function Send() {
  return (
    <div className="mt-auto mx-1 text-lg bg-white h-12 flex w-full items-center justify-between">
      {/* emoji */}
      <div className="h-full w-20 items-center justify-center flex border-r-2">
        <img alt="blank" src={emojiIcon} />
      </div>

      {/* input */}
      <input
        placeholder="Write here"
        className="w-full px-4 focus:outline-none"
      />

      {/* right */}
      <div className="flex space-x-1 items-center">
        <img alt="blank" src={cameraIcon} />
        <img alt="blank" src={fileIcon} />

        <div className="h-full w-24 items-center justify-center flex border-l-2">
          <img alt="blank" src={sendIcon} />
        </div>
      </div>
    </div>
  );
}
