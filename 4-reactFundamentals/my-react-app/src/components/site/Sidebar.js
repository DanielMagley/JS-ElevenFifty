import React from 'react'

import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo'
import JSXRules from '../concepts/JSXRules';
import ClassComponentDemo from '../concepts/ClassComponentDemo';
import LifeCycleDiagram from '../concepts/LifeCycleCodepen';
import PropsDemo from '../concepts/PropsDemo';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import NytApp from '../apps/Nyt-react-app/NytApp'
import MovieSearchApp from '../apps/movie-search-app/MovieApp';

const Sidebar = () => (

  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rationale">Rationale</Link></li>
        <li><Link to="/functionalcomponent">Functional Component</Link></li>
        <li><Link to="/jsxRules">JSX Rules</Link></li>
        <li><Link to="/classcomponent">Class Components</Link></li>
        <li><Link to="/propsdemo">Props Demo</Link></li>
        <li><Link to="/lifecyclediagram">Life Cycle Diagram</Link></li>
        <li><Link to="/movie">Movie Search App</Link></li>
        <li><Link to="/timer">Timers</Link></li>
        <li><Link to="/nyt">New York Times App</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        

      </ul>
    </div>
    <div className="sidebar-route">
        <Switch>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/resources"><Resources /></Route>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
            <Route exact path="/classcomponent"><ClassComponentDemo /></Route>
            <Route exact path="/jsxRules"><JSXRules /></Route>
            <Route exact path="/lifecyclediagram"><LifeCycleDiagram /></Route>
            <Route exact path="/movie"><MovieSearchApp /></Route>
            <Route exact path="/timer"><TimePiecesApp /></Route>
            <Route exact path="/nyt"><NytApp /></Route>
            <Route exact path="/propsdemo"><PropsDemo /></Route>
        </Switch>
    </div>
  </div>

)

export default Sidebar;