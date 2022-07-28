import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import Offers from './pages/Offers'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './components/PrivateRoutes'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore/>} />
          <Route path='/offers' element={<Offers/>} />
          <Route path='/profile' element={<PrivateRoutes />}>
          <Route path='/profile' element={<Profile/>} />
          </Route>
          <Route path='/sign-in' element={<Signin/>} />
          <Route path='/sign-up' element={<Signup/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
        </Routes>
      <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
