import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';


import MainLayout from './Layouts/MainLayout';
import HomePage from './Pages/HomePage';
import CountryPage from './Pages/CountryPage';
import countryData from "../data.json"
import { useState } from 'react';



function App() {
  let [darkMode, setDarkMode] = useState('dark');
  function changeDarkMode() {
    setDarkMode((prev) => prev == 'dark' ? "" : "dark")

  }



  const router = createBrowserRouter(
    createRoutesFromElements(


      <Route path='/' element={<MainLayout darkMode={darkMode} changeDarkMode={changeDarkMode} />}>
        <Route index element={<HomePage darkMode={darkMode} countryData={countryData} />}></Route>
        <Route path='/country/:id' element={<CountryPage darkMode={darkMode} countryData={countryData} />}></Route>
      </Route>


    )
  )





  return (<RouterProvider router={router} />)
}

export default App;
