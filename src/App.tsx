import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";

// const router = createBrowserRouter([
//   <Route path="/" element={<Reception/>}/>

// ]);

function App() {
  return (
    <div>
      <Layout />


      <Routes>

        <Route path='floor/:id' element={<PrivateRoute component={<Floor />} />} />
        {<Route path='/' element={<Reception />} />}
        <Route path='/' element={<Reception />} />
      </Routes>

    </div>
  );
}

export default App;
