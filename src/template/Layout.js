//? Component
import Leftbar from "../components/organisms/Leftbar";
import Topbar from "../components/organisms/Topbar";

export default function Layout({children}) {
  return (
    <div className='flex flex-col h-screen'>
      <Topbar />
      <div className='flex flex-grow' 
        style={window.innerWidth<=1440 ? 
          {height: 1.25*window.innerHeight-64, zoom: '80%'} : 
          {height: window.innerHeight-64, zoom: '100%'}}
      >
        <Leftbar />
        {children}
      </div>
    </div>
  )
}