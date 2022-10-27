import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses/Courses';
import Error from './components/Error/Error';
import Faq from './components/Faq/Faq';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/courses',
          element: <Courses></Courses>
        },
        {
          path: 'faq',
          element: <Faq></Faq>
        }
      ],
    },
    { path: '*', element: <Error></Error> },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
