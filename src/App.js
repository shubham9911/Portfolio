
import './App.css';
import "bootstrap/dist/css/bootstrap.css"; // isko add karne se react-bootstrap chala hai
import SideBar from './SideBar'
import Introduction from './Introduction';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      
      <SideBar/>
      
      <Introduction/>
      <Skills/>
      <Projects/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
