import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div> Default Page</div>
    },
    {
      path: '/home',
      element: <div> Home Page</div>
    },
    {
      path: '/about',
      element: <div> About me Page</div>
    },
    {
      path: '/contact',
      element: <div> Contac Page</div>
    },

  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
