//? Component
import Layout from "../../template/Layout";
import LeftMenu from "./leftMenu";
import closeIcon from "../../assets/close.svg";
import Ticket from "../../components/molecule/ticket";
import Send from "../../components/molecule/send";

//? Context
import { RaiseTicketContext } from "../../context";
import { Consume } from "../../context/consume";

function RaiseTicket(props) {
  const { RaiseTicketData } = props;
  return (
    <>
      <Layout>
        <LeftMenu data={RaiseTicketData.data} />

        {/* mid menu */}
        <div
          className="flex flex-col h-full border-r-2"
          style={{ backgroundColor: "#F8F8F8", width: 530 }}
        >
          <div className="my-1 text-lg bg-white px-4 py-3 flex w-full items-center justify-between">
            <div className="w-fullflex items-center">Raise a Ticket</div>
            <div>
              <img alt="" src={closeIcon} />
            </div>
          </div>

          {/* ticket */}
          <Ticket message={RaiseTicketData.data[0]} />

          {/* send */}
          <Send />
        </div>

        {/* right menu */}
        <div
          className="flex flex-grow"
          style={{ backgroundColor: "#F8F8F8" }}
        ></div>
      </Layout>
    </>
  );
}

export default Consume(RaiseTicket, [RaiseTicketContext]);
