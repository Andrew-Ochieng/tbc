import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import NotFoundPage from '../pages/NotFoundPage';
import About from '../pages/About';
import StatementOfFaith from '../pages/StatementOfFaith';
import OurBeliefs from '../pages/OurBeliefs';
import Literature from '../pages/Literature';
import OurLeaders from '../pages/OurLeaders';
import Sermons from '../pages/Sermons';
import Blog from '../pages/Blog';
import Events from '../pages/Events';
import Give from '../pages/Give';
import BlogDetails from '../components/blogs/BlogDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'about/statement-of-faith',
        element: <StatementOfFaith />,
      },
      {
        path: 'about/our-beliefs',
        element: <OurBeliefs />,
      },
      {
        path: 'about/literature',
        element: <Literature />,
      },
      {
        path: 'about/our-leaders',
        element: <OurLeaders />,
      },
      {
        path: 'sermons',
        element: <Sermons />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'blog/:id',
        element: <BlogDetails />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'give',
        element: <Give />,
      }
    ],
  },
]);