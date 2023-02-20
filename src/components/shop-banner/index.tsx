import React from 'react'
import { Col, Row } from "antd";
import styled from 'styled-components';
import { MainContainer } from 'components/products/product-list';

const ShopWrapper = styled.div `
  background-image: linear-gradient(-40deg, #e2eef5 70%,  #d1e4ee 20px);
`;

const ShopContant = styled.div`

`;


function ShopBanner() {
  return (
       <MainContainer>
        <Row>
          <Col sm={24} md={18}>
            <ShopWrapper>
              <ShopContant>
                 <h1>Many desktop publishing packages and web page editors</h1>
                 <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              </ShopContant>
              <img src="../../../assets/images/logo.svg" alt=""/>
            </ShopWrapper>
          </Col>
          <Col sm={24} md={6}>
            <Row>
               <Col sm={24} md={24}>
                 <ShopWrapper></ShopWrapper>
               </Col>
               <Col sm={24} md={24}>
               <ShopWrapper></ShopWrapper>
               </Col>
            </Row>
          </Col>
        </Row>
    </MainContainer>
  )
}

export default ShopBanner