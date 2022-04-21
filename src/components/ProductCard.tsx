import React from "react";
import { Card } from "react-bootstrap";
import { ProductListItem } from "../../types";

const ProductCard = ({ product }: { product: ProductListItem }) => {
  return (
    <Card data-cy={`product-card-${product.index}`} style={{ height: "100%" }}>
      <Card.Img
        data-cy={`card-image-${product.index}`}
        src={product.product_image?.url}
        alt="product image"
      />
      <Card.ImgOverlay>
        <Card.Title
          data-cy={`card-title-${product.index}`}
          style={{
            marginTop: "90%",
            fontSize: "1rem",
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
