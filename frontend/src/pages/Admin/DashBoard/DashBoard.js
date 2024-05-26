import "./DashBoard.css";
import Sidebar from "../../../components/Sidebar";
import MainDash from "../../../components/MainDash/MainDash";
import RightSide from "../../../components/RightSide/RightSide";
const DashBoard =()=>{
    return(
    <div className="App">
    <div className='AppGlass'>
     <><Sidebar sel="DashBoard"
     />

     <MainDash/>
     <RightSide/>
      </></div></div>);

}
export default DashBoard