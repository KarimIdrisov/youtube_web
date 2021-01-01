import React from 'react';
import Start from "./Pages/Start"
import Error from "./Pages/Error"
import Video from "./Pages/Video"
import Search from "./Pages/Search";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/video/:videoId" component={Video}/>
                    <Route path="/results/:key" component={Search}/>
                    <Route path="/results/" component={Start}/>
                    <Route exact path="/" component={Start}/>
                    <Route component={Error}/>
                </Switch>
            </Router>
        </div>
    );
}
