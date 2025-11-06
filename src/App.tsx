import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalLayout from "@layouts/GlobalLayout";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GlobalLayout></GlobalLayout>}>
            <Route index element={<p>test</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


