import React from 'react';

import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
 
import AddExpensePage from '../components/AddPage';
import EditExpensePage from '../components/EditPage';
import HelpExpensePage from '../components/HelpPage';
import NotFoundPage from '../components/NotFound';
import ExpenseDashBoardPage from '../components/DashboardPage';
import Header from '../components/Header';
 




const AppRouter = () =>(
<BrowserRouter>
    <div>
      <Header/>
      <Switch>
    <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
    <Route path="/create" component={AddExpensePage}/>
    
    <Route path='/edit/:id' component={EditExpensePage}/>

    

    <Route path="/help" component={HelpExpensePage}/>
    <Route component={NotFoundPage}/>
    </Switch>
    </div>
    
  </BrowserRouter>
)

export default AppRouter;