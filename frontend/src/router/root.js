import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import memberRouter from "./memberRouter";

const Loading = <div>Loading....</div>;
const Main = lazy(() => import("../pages/MainPage"));
const Mypay = lazy(() => import("../pages/MypayPage"));
const DebtCollection = lazy(() => import("../pages/DebtCollection"));
const Qna = lazy(() => import("../pages/QnaPage"));
const Loan = lazy(() => import("../pages/LoanPage"));

const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "/mypay",
    element: (
      <Suspense fallback={Loading}>
        <Mypay />
      </Suspense>
    ),
  },
  {
    path: "/loan",
    element: (
      <Suspense fallback={Loading}>
        <Loan />
      </Suspense>
    ),
  },
  {
    path: "/debtCollection",
    element: (
      <Suspense fallback={Loading}>
        <DebtCollection />
      </Suspense>
    ),
  },
  {
    path: "/qna",
    element: (
      <Suspense fallback={Loading}>
        <Qna />
      </Suspense>
    ),
  },
  {
    path: "member",
    children: memberRouter(),
  },
]);

export default root;
