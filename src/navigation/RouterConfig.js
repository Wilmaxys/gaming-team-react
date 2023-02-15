import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SERVER } from "./constant";

/* Lazy load pages */
const Server = lazy(() => import("../features/server/Server"));

export const RouterConfig = () => {
  return (
    <>
      {/* Use suspense in order to show loading text until pages are lazy loaded */}
      <Suspense fallback="Loading test...">
        <Routes>
          <Route exact path={SERVER} element={<Server />} />
        </Routes>
      </Suspense>
    </>
  );
};
