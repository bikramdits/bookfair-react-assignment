import React, { useState, useEffect } from "react";
import {  ShoppingCartOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Col, MenuProps, Row } from "antd";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { MainContainer } from "components/products/product-list";
import colors from "assets/scss/color-variables";

const items: MenuProps["items"] = [
  {
    label: "BookFair",
    key: "home",
  },
  {
    label: "Shops",
    key: "about",
  },
  {
    key: "cart",
    icon: <Badge count={0} showZero><ShoppingCartOutlined /></Badge>,
  },
  {
    key: "login",
    icon: <UserOutlined />,
    children: [
      {
        label: 'Login',
        key: 'setting:1',
        icon: <LoginOutlined />,
      },
      // {
      //   label: 'Option 2',
      //   key: 'setting:2',
      // },
    ],
  }
];

const Navigation = styled.div `
    border-bottom: 1px solid ${colors.tertiaryColor};
    ul{
            border:none;
            display: flex;
            justify-content: flex-end;
      li{
        text-align:center;
        padding: 10px 0;
        .ant-badge-count {
           display: flex;
           align-items: center;
           justify-content: center;           
            font-size: 11px;
        }
        span{
           &.anticon {
              min-width: 20px !important;
              font-size: 20px !important;
            }
           &.ant-menu-title-content:empty {
             display: none;
            }
        }
      }
    }
      
`;
const Logo = styled.div `
  font-size: 30px;
  font-weight: 500;
  display: flex;
  align-items: center;
  height: 100%;
  color: ${colors.primaryColor} !important;

`;



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
    <Navigation>
      <MainContainer>        

        <Row>
          <Col sm={24} md={6}>
            <Logo>Bookfair</Logo>
          </Col>
          <Col sm={24} md={18}>
              <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />   
          </Col>
        </Row>  
      </MainContainer>
    </Navigation>
  );
};

export default App;
