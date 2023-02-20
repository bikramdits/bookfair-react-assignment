import "App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider, Typography } from "antd";
import { Navbar } from "components/layout";
import Home from "pages/home";
import Dashboard from "pages/dashboard";
import { currentTheme } from "theme";
import PrivateRoute from "private-route";
import USER_ROLES from "models/enums/roles";

const App = () => {
  // currently i am just taking a static variable to change authentication state but in a real application the value will be based on the response from the backend/third-party API
  // It is prefered to store this in any type of global state (eg. ContextAPI, Redux etc.)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const CurrentUserRole = USER_ROLES.ADMIN;

  return (
    <BrowserRouter>
      <ConfigProvider theme={currentTheme}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home login={{ isLoggedIn, setIsLoggedIn }} />}
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                authState={{ isLoggedIn, CurrentUserRole }}
                roles={[USER_ROLES.ADMIN]}
              >
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              // A new 404(not found) component can be added instead of "Typography.Title" component below
              <Typography.Title
                level={2}
                style={{ textAlign: "center", marginTop: "5%" }}
              >
                404! Not Found.
              </Typography.Title>
            }
          />
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
