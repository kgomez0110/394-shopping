import React, { useEffect, useState } from 'react';
import ProductGrid from './ProductGrid';
import Sizes from './Sizes';
import { Grid } from 'semantic-ui-react';



const Dashboard = () => {

  const [allProducts, getProducts] = useState(null);

  useEffect(() => {
    fetch('./data/products.json')
      .then(resp => resp.json())
      .then(({products}) => {
        getProducts(products);
      });
  });
  return (
    <Grid celled columns={2}>
      <Grid.Row>
        <Grid.Column width={3}>
          <Sizes></Sizes>
        </Grid.Column>
        <Grid.Column width={13}>
          {allProducts ? <ProductGrid products={allProducts}></ProductGrid>: <div></div>}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}


export default Dashboard;