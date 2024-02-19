import "./App.css";
import CreatePost from "./pages/CreatePost";
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
function App() {
 

  return <div className="App">
    <Router>
    <div className="navbar">
          <Link to="/"> Home Page</Link>
          <Link to="/createpost"> Create A Post</Link>
          <Link to="/login">Login</Link>
          <Link to="/Registor">Registration</Link>

        </div>
      <Routes>
        <Route path="/" element={<Home/>}/>     
        <Route path="/createpost" element={<CreatePost/>}/>   
        <Route path="/post/:id" element={<Post/>}/>   
        <Route path="/login" element={<Login/>}/>
        <Route path="/Registor" element={<Registration/>}/>  

      </Routes>

    </Router>

  </div>;
}

export default App;
