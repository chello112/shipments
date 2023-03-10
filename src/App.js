import Dashboard from "./components/Dashboard";
//import Table from "./test/Table";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Dashboard />
      {/* <Table /> */}
      <ToastContainer position="top-center" />
    </div>
  );
};

export default App;
