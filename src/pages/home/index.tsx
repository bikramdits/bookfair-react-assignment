import { Typography, Space } from "antd";
import {
  GithubOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import Notify from "utils/notify";
import ChangeLanguage from "utils/change-language";
import BasicButton from "components/elements/button";
import ProductList from "components/products/product-list";
import ShopBanner from "components/shop-banner";

const Home = ({ login: { isLoggedIn, setIsLoggedIn } }: any) => {
  const { t } = useTranslation();

  return (
    <>
      <ShopBanner />
      <ProductList
        title="Latest Books"
        products={[
          {
            id: 1,
            title: "Book1",
            stockCount: 100,
            price: 50,
            cover:
              "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=2000",
          },
          {
            id: 2,
            title: "Book2",
            stockCount: 100,
            price: 80,
            cover:
              "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=2000",
          },
          {
            id: 3,
            title: "Book3",
            stockCount: 100,
            price: 60,
            cover:
              "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=2000",
          },
        ]}
      />
    </>
  );
};

export default Home;
