import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Demo from './Scheduler.js';
import { render } from "react-dom";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
<<<<<<< HEAD
=======

  
>>>>>>> a0cb6d2b536c666b9bce113319bf81f4bf904d73
  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);
  return (
<<<<<<< HEAD

    <div className="Demo" > 
=======
    <div>
>>>>>>> a0cb6d2b536c666b9bce113319bf81f4bf904d73
      <Demo />
    </div>
  );
}
