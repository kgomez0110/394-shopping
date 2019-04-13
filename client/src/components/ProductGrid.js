import React from 'react';
import { Container, Image, Header, Button, Grid } from 'semantic-ui-react';

const Picture = ({ url }) => {
  
  const getPicture = (picURL) => {
    return './data/' + picURL + '.jpg';
  }


// 10412368723880262_1 //
  return (
    // <Image src={url}></Image>
    <Image src="https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/10547961582846888_1.jpg"></Image>
  );
}

const Description = ({ description }) => {

  const descriptionStyle = {
    position: "relative",
    marginLeft: "50%"
  };
  return (
    <Container text style={descriptionStyle}>
      <Header as="h3">{description}</Header>
    </Container>
  );
}

const Price = ({ price }) => {

  const priceStyle = {
    position: "relative",
    marginTop: "5px",
    marginLeft: "50%"
  };
  return (
    <Container text style={priceStyle}>
      <Header as="h2">{price}</Header>
    </Container>
  );
}

const AddCart = () => {

  const buttonStyle = {
    position: "relative",
    height: "45px",
    width: "100%",
    backgroundColor: "black",
    color: "white",
    bottom: "0px"
  };

  return (
    <Button style={buttonStyle} content='Add to Cart'></Button>
  );
}

const Product = ({ url, description, price }) => {

  const divStyle = {
    maxWidth : "230px",
    maxHeight : "430px"
  };

  return (
    <div style={divStyle}>
      <Picture url={url}></Picture>
      <Description description={description}></Description>
      <Price price={price}></Price>
      <AddCart></AddCart>
    </div>
  );
}

// fetch('./data/products.json')
// .then(resp => resp.json()) 
// .then(({products}) => {
//    ReactDOM.render(<App products={products} />, document.getElementById('root'));
// });

// const skus = Object.keys(products);
  // const items = skus.map(sku => <li>{products[sku].title}</li>);
  // return <ul>{items}</ul>;
const ProductGrid = ({ products }) => {
  
  const skus = Object.keys(products);
  const items = skus.map(sku => <Grid.Column><Product url={sku} description={products[sku].title} price={products[sku].currencyFormat+products[sku].price}></Product></Grid.Column>);

  return (
    <Grid columns={4}>
      {items}
    </Grid>
  );
}

export default ProductGrid;