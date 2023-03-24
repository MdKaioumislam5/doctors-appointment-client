import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'react-day-picker/dist/style.css';
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header';
import About from './Pages/Home/About/About';
import Login from './Pages/Home/Login/Login';
import Reviews from './Pages/Home/Reviews/Reviews';
import ContactUs from './Pages/Home/ContactUs/ContactUs';
import Appointment from './Pages/Home/Appointment/Appointment/Appointment';
import SignUp from './Pages/Home/SignUp/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/header',
          element: <Header></Header>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/appointment',
          element: <Appointment></Appointment>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/reviews',
          element: <Reviews></Reviews>
        },
        {
          path: '/contactUs',
          element: <ContactUs></ContactUs>
        },
      ]
    },
    {
      path: "/dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
     <ToastContainer />
    </div>
  );
}

export default App;
