import React from 'react'
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';  
import { Link, NavLink } from 'react-router-dom';

import { links } from '../data/dummy'; 
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {

  const { activeMenu, setActiveMenu,screenSize, currentColor } = useStateContext();

  const handleCloseSidebar = () =>{
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false);
    }
  }

  const activeLink = 'flex item-center mt-3 gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex item-center mt-3 gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md m-2 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray';

  return (
    <div className="ml-3 h-screen md:overflow-hidden 
      overflow-auto md:hover:overflow-auto pd-10">
      {activeMenu ? (
        <>
          <div className='flex justify-between items-center'>
            <Link to="/" onClick={handleCloseSidebar} className="items-center
              flex gap-3 ml-3 mt-4 text-xl font-extrabold text-slate-900 
              dark:text-white tracking-tight">
              <SiShopware/> <span>Shoppy</span>
            </Link>
            <TooltipComponent  content="Menu" postion="BottomCenter">
              <button className=' md:hidden text-xl rounded-full p-3 hover:bg-light-gray
                mt-4 block'
                onClick={() => setActiveMenu( prevActiveMenu => !prevActiveMenu)}>
                <MdOutlineCancel/>
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {links.map((item) =>(
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) =>(
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar}
                    style={({isActive}) => ({ backgroundColor : isActive ? currentColor : '' })}
                    className = {({isActive}) => 
                      isActive ? activeLink : normalLink
                  }
                  >
                    {link.icon}
                    <span className='capitalize'>{link.name}</span>
                  </NavLink>

                ))}
              </div>
            ))}
          </div>
          
        </>
      ):(
        <></>
      )}
    </div>
  )
}

export default Sidebar