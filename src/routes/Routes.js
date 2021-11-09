import { Route } from 'react-router';
import RouteSwitch from './RouteSwitch';
import Home from '../views/home/home';
import AboutProject from '../views/home/about-project';
import NotFound from '../views/not-found/not-found';


export default function routes() {
    console.log("ran");
    return(
        <RouteSwitch>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about-project' element={<AboutProject />} />
            <Route path='*' exact element={<NotFound />} />
        </RouteSwitch>
    );
};