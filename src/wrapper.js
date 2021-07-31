// TODO -  Context Apis to pass data into Project

// Components
import RaiseTicket from "./screens/raiseTicket";

// Context
import { GetSelectedTeam } from "./context/providers";

export default function Wrapper() {
  return (
    <GetSelectedTeam>
      <RaiseTicket />
    </GetSelectedTeam>
  );
}
