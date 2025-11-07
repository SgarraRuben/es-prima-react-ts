import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalLayout from "@layouts/GlobalLayout";
import UserPage from "@page/UserPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GlobalLayout></GlobalLayout>}>
            <Route index element={<UserPage></UserPage>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


