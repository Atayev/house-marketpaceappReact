import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import Offers from './pages/Offers'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import CreateListing from './pages/CreateListing'
import EditListing from './pages/EditListing'
import Category from './pages/Category'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './components/PrivateRoutes'
import Listing from './pages/Listing'
import Contact from './pages/Contact'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore/>} />
          <Route path='/offers' element={<Offers/>} />
          <Route path='/category/:categoryName' element={<Category/>} />
          <Route path='/profile' element={<PrivateRoutes />}>
          <Route path='/profile' element={<Profile/>} />
          </Route>
          <Route path='/sign-in' element={<Signin/>} />
          <Route path='/sign-up' element={<Signup/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/create-listing'  element={<CreateListing/>} />
          <Route path='/edit-listing/:listingId'  element={<EditListing/>} />
          <Route path='/category/:categoryName/:listingId'  element={<Listing />} />
          <Route path='/contact/:landlordId'  element={<Contact />} />

        </Routes>
      <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
