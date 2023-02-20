import React from "react";
// import { Product } from '../../actions';
import ProductItem from "components/products/product-item";
import "./style.css";
import IBook from "models/interfaces/IBook";
import { Col, Row, Typography } from "antd";
import styled from "styled-components";

interface SaleProductListProps {
  title?: string;
  products: IBook[];
}

export const  MainContainer = styled.div`
  max-width: 1140px;
  width:100%;
  margin: 0 auto;
  padding: 0 15px;

 `;


const ProductList: React.FC<SaleProductListProps> = ({ title="Books", products }) => {
  return (
    <>
   
    <MainContainer>
     <Typography.Title
        level={2}
        style={{ margin: 0, color: "#333", marginTop: "6em" }}
      >
        {title}
      </Typography.Title>
    <Row gutter={[16 ,32]}>
        
      {products.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
      </Row>
    </MainContainer>
    </>
  );
};

export default ProductList;
