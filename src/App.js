// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MajorList from './components/MajorList';
import AddMajor from './components/AddMajor';


function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route exact path="/" element={<MajorList />} />
            <Route path="/add" element={<AddMajor />} />
            <Route path="/majors/edit/:id" element={<AddMajor />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
