import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card data-cy={`product-card-${product.index}`} style={{ height: "100%" }}>
      <Card.Img src={product.product_image?.url} alt="product image" />
      <Card.ImgOverlay>
        <Card.Title
          style={{
            marginTop: "90%",
            fontSize: "0.9rem",
            textTransform: "uppercase"
          }}
        >
          {product.name}
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default ProductCard;
