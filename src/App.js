import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Navbar } from './components/Navbar';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Feed } from './Pages/Feed';
import { RequireAuth } from './hoc/RequireAuth';
import { Post } from './Pages/Post';
import { Carrier } from './Pages/Carrier';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        < Route path='/feeds' element={
        <RequireAuth >
          <Feed />
        </RequireAuth>} />
        < Route path='/posts' element={
        <RequireAuth >
          <Post />
        </RequireAuth>} />
        < Route path='/carriers' element={
        <RequireAuth >
          <Carrier />
        </RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
