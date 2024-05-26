import React, {useState ,useEffect} from 'react'
import{Link}from "react-router-dom";
import { SidebarData } from '../Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons';
import './Sidebar.css';
import Logo from '../imgs/logo.png';


const Sidebar = (props) => {
  const [selected, setSelected] = useState(0);
  const [selected1, setSelected1] = useState(-1); 
  const[showdown,setShowdown]=useState("Products"==props.sel);

 
  
   return (
    <div className='Sidebar'>
      <div className='logo'>
        <img src="https://i.ibb.co/JFTktff/1715376248741-2.png" alt='log' />
       
      </div>
      
      {/* Menu */}

      <div className='menu'>
      {SidebarData.map((item,index)=>{
        return(
          <div>
     <div className={ selected===2&& item.heading=='Products' ?'menuItem active':props.sel===item.heading&&selected!=2 ?'menuItem active':'menuItem ' }

             key={index}
             onClick={() => {
              setSelected(index);
                   if (item.heading != 'Products') {
                setShowdown(false);
                setSelected1(-1);
                
                }
               
              }

            }>
<div onClick={()=>{  if (item.heading === 'Products') {
            setShowdown(!showdown);
            
          }       if (item.heading != 'Products') {
            setShowdown(false);
            setSelected1(-1);
          }}} >
             <item.icon/>
             
           <Link className='hio' to={item.heading =='Orders' ?"/Orders" : item.heading =='DashBoard' ?"/DashBoard":"javascript:;"}> {item.heading}</Link></div> 

             {item.heading === 'Products' && showdown && (
                <>
        {item.heading === 'Products' && showdown && item.arr && (
                <>
                {console.log("hello")}
  <div className='space'>
                  {item.arr.map((subItem, subIndex) => (
                    <div className={ showdown==true && props.ch ==subItem ? "subitem actives" : 'subitem activess'} onClick={()=>{setSelected1(subIndex); setShowdown(true);}}>
                    <Link to={subItem=="prouduct deatiels"?"/prouductDeatiels":"/AddProduct"} key={subIndex}onClick={()=>{setShowdown(true);}}>{subItem} </Link> 
                    <br/>

                    </div>
                  ))}
                 </div>
               
                </>
              )}

                
                </>
              )}

               
                
          </div>

          </div>

        )
      })}
      
      <div className='menuItem9'>
        <UilSignOutAlt/>
      </div>
      </div>
       
    </div>
    
  )
}

export default Sidebar