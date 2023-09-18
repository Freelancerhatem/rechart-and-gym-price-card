import PropTypes from 'prop-types';
import Link from '../Link/Link';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
const Nav = () => {
    const[open,setOpen] = useState(false);
    const routes = [
    {id: 1, path: '/', name: 'Home'},
    {id: 2, path: '/items', name: 'Item List'},
    {id: 3, path: '/item/:id', name: 'Item Detail'}];
    

    return (
        <nav >
            <div className='md:hidden text-2xl relative' onClick={()=>setOpen(!open)}>
            {
                open == true ? <AiOutlineClose></AiOutlineClose> : <HiMenuAlt1></HiMenuAlt1>
            }
            
            </div>
            
            <ul className={`list-none absolute md:static ${open == true? 'top-16':'-top-40'} duration-1000 md:flex bg-slate-800 rounded-sm text-white  p-4 mx-4 my-2`}>
                {routes.map((route,index)=><Link key={route.id} route={route} index={index}></Link>)} 
            </ul>
        </nav>
    );
};

Nav.propTypes = {
  routes:PropTypes.array  
};

export default Nav;