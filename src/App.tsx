import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import { Layout } from '@components/Layout';
import { Posts } from '@pages/Posts';
import { Post } from '@pages/Post';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Posts />} />
      <Route path='posts' element={<Posts />} />
      <Route path='posts/:id' element={<Post />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
