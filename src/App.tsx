import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";
import Tester from "./pages/Tester";

// const router = createBrowserRouter([
//   <Route path="/" element={<Reception/>}/>

// ]);

function App() {
  return (
    <div>
      <Layout />




    </div>
  );
}

export default App;
