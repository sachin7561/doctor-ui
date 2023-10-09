
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Allrest from './Components/Allrest/Allrest';
import Header from './Components/Header/Header';
import Viewrest from './Components/ViewRest/Viewrest';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path="/" element={<Allrest/>}/>
      <Route path='/view/:id' element={<Viewrest/>}/>
     </Routes>
     <Footer/>
    
    </div>
  );
}

export default App;
