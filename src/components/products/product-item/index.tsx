import React from "react";
import { Link } from "react-router-dom";
import IBook from "models/interfaces/IBook";
import { Row, Col, Card, Typography, Button } from "antd";
const { Text } = Typography;

interface SaleProductItemProps {
  product: IBook;
}

const SaleProductItem: React.FC<SaleProductItemProps> = ({ product }) => {
  const { id, title, price, cover } = product;
  const featured_image = cover;
  const on_sale = false
  return (
    <Col className="centered-col" sm={24} md={8}>
          <Link to={`/product/${id}`}>    
            <Card
            hoverable
            cover={
                featured_image ? <img alt="example" src={featured_image} /> : null
            }
            >
            <Row>
                <Text style={{ textAlign: "center" }} strong>
                {title}
                </Text>
                {on_sale && <Button style={{ marginLeft: 10 }}>Sale!</Button>}
            </Row>
            <Row>
                <Text type="secondary" delete={on_sale}>
                {`$${price}`}
                </Text>
                {on_sale && (
                <Text style={{ marginLeft: 15 }}>{`$${price}`}</Text>
                )}
            </Row>
            </Card>
        </Link>
      </Col>  
      
  );
};

export default SaleProductItem;
