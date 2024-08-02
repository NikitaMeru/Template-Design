import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './Components/Resume';
import Template2 from './Components/Template2';
import ResumeData from './Components/ResumeData'; 
import Template3 from './Components/Template3';
import Template4 from './Components/Template4';
import Template5 from './Components/Template5';
import Template6 from './Components/Template6';
import Template7 from './Components/Template7';
import './index.css';

function App() {
  return (
    <div>
    <Router>
      <Routes>
       <Route path="/resume" element={<Resume data={ResumeData} />} />
        <Route path="/template2" element={<Template2 data={ResumeData} />} />
        <Route path="/" element={<Resume data={ResumeData} />} /> 
        <Route path="/template3" element={<Template3 data={ResumeData} />} />
        <Route path="/template4" element={<Template4 data={ResumeData}/>} />
        <Route path="/template5" element={<Template5 data={ResumeData}/>} />
        <Route path="/template6" element={<Template6 data={ResumeData}/>} />
        <Route path="/template7" element={<Template7 data={ResumeData}/>} />
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
