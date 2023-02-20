import React, { useState, useEffect } from "react";
import { HomeOutlined, GithubOutlined, SmileOutlined, DashboardOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: "BookFair",
    key: "home",
    // icon: <HomeOutlined />,
  },
  {
    label: "About(404)",
    key: "about",
    icon: <SmileOutlined />,
  },
  {
    label: "Dashboard",
    key: "dashboard",
    icon: <DashboardOutlined />,
  },
  {
    label: "Github",
    key: "github",
    icon: <GithubOutlined />,
  }
];

const App: React.FC = () => {
  const [current, setCurrent] = useState("home");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const currentPath = pathname.replace("/", "");
    const isPathAvailable = items.filter((el: any) => el.key === pathname);
    if (isPathAvailable) {
      if (currentPath === "") setCurrent("home");
      else setCurrent(currentPath);
    }
  }, [location, items]);

  const onClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "home":
        navigate("/");
        setCurrent(e.key);
        break;
      case "github":
        window.open(
          "https://github.com/saddamditswins/Ant_Graphql_Architecture/",
          "_blank"
        );
        break;
      case "about":
        navigate("/about");
        setCurrent(e.key);
        break;
      case "dashboard":
        navigate("/dashboard");
        setCurrent(e.key);
        break;
      default:
        break;
    }
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default App;
