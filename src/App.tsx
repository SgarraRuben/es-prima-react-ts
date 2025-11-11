import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "@atoms/Spinner";


const UserPage = lazy(() => import("@page/UserPage"));
const GlobalLayout = lazy(() => import("@layouts/GlobalLayout"));

function App() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-bs-theme", savedTheme);
  return (
    <>
      <BrowserRouter>
       <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<GlobalLayout />}>
            <Route index element={<Navigate to="users" replace />} />
            <Route path="users" element={<UserPage />} />
          </Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
