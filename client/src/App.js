import React from 'react';
import { Button } from 'semantic-ui-react';

const App = ({products}) => {
  const skus = Object.keys(products);
  const items = skus.map(sku => <li>{products[sku].title}</li>);
  return <ul>{items}</ul>;
  
};

export default App;