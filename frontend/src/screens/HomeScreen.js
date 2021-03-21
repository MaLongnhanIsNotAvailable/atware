import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Demo from './Scheduler.js';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);
  return (

    <div className="Demo" > 
      <Demo />
    </div>
  );
}
