import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import HomeScreen from './screens/HomeScreen';
import ProductListScreen from './screens/ProductListScreen';

import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import UserListScreen from './screens/UserListScreen';
import UserMatchScreen from './screens/UserMatchScreen';
import SearchBox from './components/SearchBox';
import { listProductCategories } from './actions/productActions';
import StickyHeadTable from './screens/dataTable';
import Calendar from './screens/Calendar';
import Community from './screens/Community'
function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            </button>
            <Link className="brand" to="/">
              Team Cook 
            </Link>
          </div>
          <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
          {/* <Link to="/table">Match</Link> */}
          <Link to="/community"> Community</Link>
          <div>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                    
                  </li>
                </ul>
              </div>
            ) : (
              
              <Link to="/signin">Sign In</Link>

            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>        
        <main>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/community" component={Community}></Route>
          
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/test" component={UserMatchScreen}></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <Route path="/" component={Calendar} exact></Route>
          <Route path="/match" component={StickyHeadTable} exact></Route>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
