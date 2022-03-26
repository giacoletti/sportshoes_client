import React, { useEffect, useState } from "react";
import Products from "../modules/Products";
import ProductCard from "../components/ProductCard";
import { Form, Container, Row, Col } from "react-bootstrap";

const ProductsDisplay = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await Products.index();
    !response.message && setProducts(response.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const productsList = products.map((product, index) => {
    product.index = index + 1;
    return (
      <Col key={product.id} xs={6} md={4}>
        <ProductCard product={product} />
      </Col>
    );
  });

  return (
    <Container fluid className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col xs lg="10">
          <Form.Control
            data-cy="product-search-field"
            type="text"
            placeholder="Search product..."
          />
          <Row xs={1} md={2} className="g-4 mt-1">
            {productsList}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsDisplay;
