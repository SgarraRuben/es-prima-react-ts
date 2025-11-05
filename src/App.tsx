import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>Test</h1>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<p>test</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
