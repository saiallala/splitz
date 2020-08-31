import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import SplitzContainer from './components/Splitz/SplitzContainer';
import Requests from './components/Requests/Requests'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import AddNewBill from './components/AddNewBill/AddNewBill';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path ='/' exact component={SplitzContainer}/>
            <Route path ='/Requests' exact component={Requests}/>
            <Route path ='/addNewBill' exact component={AddNewBill}/>
         </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
