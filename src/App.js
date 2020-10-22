import React, { useEffect, Suspense} from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import OrderContainer from './Components/Order/OrderContainer';
import ScrollTop from "react-scrolltop-button";
import { FiArrowUp } from "react-icons/fi";
import {CircularProgress} from '@material-ui/core'
import { AnimatePresence, motion } from 'framer-motion';
import Events from './Components/Events/Events';
import './App.css';
import ContactContainer from './Components/Contacts/ContactContainer';
import Error from './Components/Error/Error';

const About = React.lazy(() => import('./Components/About/About'));
const Gallary = React.lazy(() => import('./Components/Gallary/Gallary'));
const ShopContainer = React.lazy(() => import('./Components/Shop/ShopContainer'));
const Works = React.lazy(() => import('./Components/Works/Works'));


const App = () => {    
  return (
    <Provider store={store}>
      <div className="wrapper">
      <Header />
      <div className="content">
        <AnimatePresence>
          <Switch>
            <Route exact path="/" render={() => <Home /> } />
            <Route exact path="/works" render={() => <Suspense fallback={ <div className="progress">
            <CircularProgress />
            </div>}>
              <Works />
            </Suspense> } />
            <Route exact path="/gallary" render={() => <Suspense fallback={<div className="progress">
            <CircularProgress />
            </div>}>
              <Gallary />
            </Suspense> } />
            <Route exact path="/shop" render={() =>  <Suspense fallback={<div className="progress">
            <CircularProgress />
            </div>}>
              <ShopContainer />
            </Suspense> } />
            <Route exact path="/about" render={() => <Suspense fallback={ <div className="progress">
            <CircularProgress />
            </div>}>
              <About />
            </Suspense> } />
            <Route exact path="/events" render={() => <Suspense fallback={ <div className="progress">
            <CircularProgress />
            </div>}>
              <Events />
            </Suspense> } />
            <Route exact path="/contacts" render={() => <ContactContainer /> } />
            <Route exact path="/shop/order" render={() => <OrderContainer /> } />
            <Route path=""  render={() => <Error /> } />
        </Switch>
        </AnimatePresence>
        <ScrollTop
              text={<FiArrowUp className='srollUp' />}
              distance={200}
              speed={400}
              icon={<FiArrowUp className='srollUp' />}
              id={"spinner"}
            />
      </div>
      
    </div>
    </Provider>
  )
}

export default App;
