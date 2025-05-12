import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth/Auth.tsx";
import Root from "./pages/Root.tsx";
import UserMain from "./pages/UserMain/UserMain.tsx";


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
        // loader: ...Loader,
      },
    ],
  }]
);




function App() {
  return <RouterProvider router={router} />
}

export default App
