import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Outlet />}>
        <Route index element={<h1>홈페이지</h1>} />
        <Route path="items" element={<h1>중고마켓</h1>} />
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
