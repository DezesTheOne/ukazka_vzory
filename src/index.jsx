import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { ListPage } from './pages/ListPage';
import { MultiSelectPage } from './pages/MultiSelectPage';
import { SingleSelectPage } from './pages/SingleSelectPage';
import { SimpleDetailPage } from './pages/SimpleDetailPage';
import { DownloadDetailPage } from './pages/DownloadDetailPage';
import { ListDetailPage } from './pages/ListDetailPage';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ListPage />,
      },
      {
        path: '/multi-select',
        element: <MultiSelectPage />,
      },
      {
        path: '/single-select',
        element: <SingleSelectPage />,
      },
      {
        path: '/simple-detail',
        element: <SimpleDetailPage />,
      },
      {
        path: '/download-detail',
        element: <DownloadDetailPage />,
      },
      {
        path: '/list-detail',
        element: <ListDetailPage />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
