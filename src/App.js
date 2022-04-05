import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/home';
import Profile from './pages/profile';
import Post from './pages/post';
import Search from './pages/search';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/post" element={<Post />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
