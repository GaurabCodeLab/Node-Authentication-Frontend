import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Protected from "./pages/Protected";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    path: "/protected",
    element: <Protected />
  }
])

const App = ()=>{
  return (
<Login />
  )
};

export default App;