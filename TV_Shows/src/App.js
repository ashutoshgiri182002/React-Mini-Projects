import { BrowserRouter, Routes, Route} from "react-router-dom";

import MainPage from './components/MainPage';
import ShowPage from './components/ShowPage';



function App() {


  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/shows/:show_id" element={<ShowPage/>} />
        </Routes>

      </BrowserRouter>

    </div>

  );
}

export default App;
