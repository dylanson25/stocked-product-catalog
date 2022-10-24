import { Navigate, Routes, Route } from "react-router-dom";
import { AuthRoutes } from "../auth/routes";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
