import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth/Auth.tsx";
import Root from "./pages/Root.tsx";
import UserMain from "./pages/UserMain/UserMain.tsx";
import AdminMain from "./pages/AdminMain/AdminMain.tsx";
import ShopMain from "./pages/ShopMain/ShopMain.tsx";
import loaderUserMain from "./pages/UserMain/loaderUserMain.tsx";


const router = createBrowserRouter(
  [{
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Auth />,
        // loader: ...Loader,
      },
      {
        path: "/main",
        index: true,
        element: <UserMain />,
        loader: loaderUserMain,
      },
      {
        path: "/AdminMain",
        index: true,
        element: <AdminMain />,
        // loader: ...Loader,
      },
      {
        path: "/ShopMain",
        index: true,
        element: <ShopMain />,
        // loader: ...Loader,
      },
    ],
  }]
);




function App() {
  return <RouterProvider router={router} />
}

export default App
