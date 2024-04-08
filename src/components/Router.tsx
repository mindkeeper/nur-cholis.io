import { createBrowserRouter } from 'react-router-dom';
import Home from '../app/home';
import Layout from './Layout';
import Intersection from '../app/TestPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ element: <Home />, path: '/' }],
  },
  {
    element: <Intersection />,
    path: '/test',
  },
]);
export default router;
