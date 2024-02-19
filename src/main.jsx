import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './capitulos.css'
import './main.css';
import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Layaout from './components/Layaout.jsx';
import Capitulos from './components/Capitulos.jsx';
import Actores from './components/Actores.jsx';
import Home from './components/Home.jsx';
import Error from './components/Error.jsx';
import ActoresCapitulos from './components/ActoresCapitulos.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(


<BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Layaout/>}>

          <Route index element={<Home/>}/>

          <Route path="capitulos" element={<Capitulos/>}>
          <Route path="actoresCapitulos/:id" element={<ActoresCapitulos />} />


          
         </Route>

          <Route path="actores" element={<Actores/>}/>

          <Route path="*" element={<Error/>}/>

      </Route>
    </Routes>
  </BrowserRouter>


)
