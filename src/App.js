import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const Dashboard = lazy(() => import("./Dashboard"));

export default function App() {
  return (
    <div className="App">
      <h1>Code-Splitting</h1>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}
