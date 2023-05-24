import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Main from '../src/layout/Main';
import Friends from './components/Friends/Friends';
import NotFound from './components/NotFound/NotFound';
import FriendDetails from './components/FriendDetails/FriendDetails';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        {
          path: '/friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends />
        },
        { path: '/friends/:friendId', element: <FriendDetails /> }
      ]
    },

    { path: '*', element: <NotFound /> }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
