import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalLayout from "@layouts/GlobalLayout";
import UserPage from "@page/UserPage";


function App() {
  const savedTheme = (localStorage.getItem('theme')) || 'light';
  document.documentElement.setAttribute('data-bs-theme', savedTheme);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GlobalLayout></GlobalLayout>}>
            <Route index element={<Navigate to="users" replace />} />
            <Route path="users" element={<UserPage></UserPage>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
