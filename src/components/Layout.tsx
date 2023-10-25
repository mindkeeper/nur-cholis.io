import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className='relative flex flex-col w-screen mx-auto text-base max-w-[1440px] md:flex-row'>
        <Outlet/>
    </div>
  )
}

export default Layout