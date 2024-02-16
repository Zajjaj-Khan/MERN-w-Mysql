import "./App.css";
import CreatePost from "./pages/CreatePost";
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
    <div className="navbar">
          <Link to="/"> Home Page</Link>
          <Link to="/createpost"> Create A Post</Link>
        </div>
      <Routes>
        <Route path="/" element={<Home/>}/>     
        <Route path="/createpost" element={<CreatePost/>}/>     
      </Routes>

    </Router>

  </div>;
}

export default App;
