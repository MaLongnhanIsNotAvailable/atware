import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useDispatch, useSelector } from 'react-redux';
import Demo from './Scheduler.js';
import { userMatch } from '../actions/userActions';
import { userDetailsReducer } from '../reducers/userReducers.js';
import axios from '../../node_modules/axios/index.js';
import data from '../data.js';

export default function UserMatchScreen() {
  const Info = useSelector((state) => state.Info);
  const name = Info.name;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        const {data} = await axios.get(`/api?name=${name}`);
        setUsers(data);
    }
    fetchData();
    
  }, []);
  return (
    <div>
      <div className="row center">
        {users.map((user) => (
          <l1 key={user.name} user={user}></l1>
        ))}
        </div>
    </div>
  );
}
