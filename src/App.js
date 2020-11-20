import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import SplitzContainer from './components/Splitz/SplitzContainer';
import Requests from './components/Requests/Requests'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import AddNewBill from './components/AddNewBill/AddNewBill';
import Intrest from './components/Intrest/Intrest';
import Intrests from './components/Intrests/Intrests';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path ='/' exact component={SplitzContainer}/>
            <Route path ='/Requests' exact component={Requests}/>
            <Route path ='/addNewBill' exact component={AddNewBill}/>
            <Route path ='/intrest' exact component={Intrest}/>
            <Route path ='/intrests' exact component={Intrests}/>
         </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
