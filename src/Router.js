import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout";
import ItemListPage from "./pages/secondhand/ItemListPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route index element={<h1>홈페이지</h1>} />
        <Route path="items" element={<ItemListPage />} />
      </Route>
      <Route element={<Outlet />}>
        <Route path="login" element={<h1>로그인</h1>} />
        <Route path="signup" element={<h1>회원가입</h1>} />
      </Route>
      <Route path="*" element={<h1>에러</h1>} />
    </>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}
