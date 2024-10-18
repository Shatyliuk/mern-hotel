import { Outlet } from "react-router-dom";
import Layout from "./layouts/Layout";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <Layout>
      <Outlet />

      <Toaster />
    </Layout>
  );
}

export default App;
