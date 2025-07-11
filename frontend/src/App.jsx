import Affiliates from "./components/affiliates/affiliates.jsx";
import Header from "./components/common/header.jsx";
import FootNav from "./components/common/FootNav.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./components/home/home.jsx";
import Coupons from "./components/coupons/coupons.jsx";
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import UserAccount from "./components/account/useraccount.jsx";
import Refer from "./components/refer/refer.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Profile from "./components/account/Profile.jsx";
import Earnings from "./components/account/Earnings.jsx";
import AccountTab from "./components/account/AccountTab";
import Payments from "./components/account/Payments.jsx";
const AppLayout1 = () => (
  <>
    <Header />

    <Outlet />

    <Footer />
    <FootNav />
    
  </>
);
const AppLayout2 = () => (
  <>
    <Header />

    <Outlet />

    <FootNav />
  </>
);
const App = () => {
  // Use basename only in production (GitHub Pages)
  const basename = import.meta.env.PROD ? '/coupondel' : '';
  
  return (
    <>
      <Router basename={basename}>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<AppLayout1 />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<AppLayout2 />}>
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/account" element={<AccountTab />}>
              <Route path="/account/profile" element={<Profile />} />
              <Route path="/account/earnings" element={<Earnings />} />
              <Route path="/account/payments" element={<Payments />} />
            </Route>
            <Route path="/refer" element={<Refer />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
};

export default App;
