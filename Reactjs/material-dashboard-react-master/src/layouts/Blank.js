import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Catalog from 'modules/frontend/catalog/Catalog';
import Home from 'modules/frontend/home/Home';

const Blank = () => {
    return (
        <>

            <Link to="/">Home</Link>&nbsp;
            <Link to="/Catalog">Dishes</Link>

            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/catalog" exact>
                    <Catalog />
                </Route>

            </Switch>
        </>
    );
}

export default Blank;


