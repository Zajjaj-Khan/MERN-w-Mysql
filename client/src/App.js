import "./App.css";
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
 

  return <div className="App">
    <Router>
      <Link>Create a Post!</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>     
        <Route path="/createpost" element={<Home/>}/>     
      </Routes>

    </Router>

  </div>;
}

export default App;
