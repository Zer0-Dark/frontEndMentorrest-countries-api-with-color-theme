/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MainLayout({ darkMode, changeDarkMode }) {
    return (
        <div className={darkMode}>
            <Navbar changeDarkMode={changeDarkMode} darkMode={darkMode}></Navbar>
            <Outlet />
        </div>
    )
}

export default MainLayout