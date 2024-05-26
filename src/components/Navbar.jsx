/* eslint-disable react/prop-types */
import { FaRegMoon, FaMoon } from 'react-icons/fa'

function Navbar({ changeDarkMode, darkMode }) {
    console.log(darkMode)
    return (
        <div className="flex dark:bg-dark-mode-elements dark:text-dark-mode-text  justify-between shadow-lg p-6 font-main text-light-mode-text">
            <h3 className="ml-4 text-base md:text-xl font-bold">Where is the world?</h3>
            <button onClick={changeDarkMode} className="mr-4 text-base md:text-xl flex justify-center  items-center ">
                {darkMode !== "dark"
                    ? <FaRegMoon className='mr-3 mb-1 text-base md:text-xl'></FaRegMoon>

                    : <FaMoon className='mr-3 mb-1 text-base md:text-xl'></FaMoon>}
                Dark Mode
            </button>

        </div>
    )
}

export default Navbar