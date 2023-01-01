
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formm from './Component/Form';
import Thanks from './Component/Thanks';


function App() {
  return (
    <BrowserRouter>
     
      <Routes>

        <Route exact path={"/"} element={<Formm/>} />
        <Route exact path={"/thanks"} element={<Thanks/>} />


      </Routes>

    </BrowserRouter>

  );
}

export default App;
