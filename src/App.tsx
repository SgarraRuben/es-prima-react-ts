import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {useGetTestQuery} from '@store/api';

function Layout() {

  const { data } = useGetTestQuery();
  return (
    <div>
      <h1>Test</h1>
      {<p>{data ? JSON.stringify(data) : 'Loading...'}</p>}
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


