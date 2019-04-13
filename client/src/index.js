import React from 'react';
import ReactDOM from 'react-dom';
//import '../semantic/dist/semantic.min.css'
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import  Sizes from './components/Sizes';
import ProductGrid from './components/ProductGrid';
import Dashboard from './components/Dashboard';


fetch('./data/products.json')
.then(resp => resp.json()) 
.then(({products}) => {
   ReactDOM.render(<App products={products} />, document.getElementById('root'));
});

// ReactDOM.render(<Sizes></Sizes>, document.getElementById('root'));
//ReactDOM.render(<Product url="10412368723880262_1" description="woo" price="$10.00"></Product>, document.getElementById('root'));

// fetch('./data/products.json')
// .then(resp => resp.json()) 
// .then(({products}) => {
//    ReactDOM.render(<ProductGrid products={products} />, document.getElementById('root'));
// });

// ReactDOM.render(<Dashboard></Dashboard>, document.getElementById('root'));