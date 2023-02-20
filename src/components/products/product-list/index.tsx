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

const MianContainer = styled.div`
  max-width: 1199px;
  width:100%;
  margin: 0 auto;

 `;


const ProductList: React.FC<SaleProductListProps> = ({ title="Books", products }) => {
  return (
    <>
   
    <MianContainer>
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
    </MianContainer>
    </>
  );
};

export default ProductList;
