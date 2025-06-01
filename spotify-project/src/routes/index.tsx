import { Route, Routes } from 'react-router-dom';
// import DashboardPage from '../pages/DashboardPage';
// import SearchPage from '../pages/SearchPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
// import PremiumPage from '../pages/PremiumPage';
// import DownloadPage from '../pages/DownloadPage';

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<DashboardPage />} />
      <Route path="/search" element={<SearchPage />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      {/* <Route path="/premium" element={<PremiumPage />} />
      <Route path="/download" element={<DownloadPage />} /> */}
    </Routes>
  );
}
