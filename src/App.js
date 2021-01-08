import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Layout from './hocs/Layout'
import Home from './pages/Home'
import "./index.css";
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Statement from './pages/Statement';
import { BreakpointProvider } from "react-socks";

export default function App() {
  return (
    <BreakpointProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/statement" component={Statement} />
          </Switch>
        </Layout>
      </Router>
    </BreakpointProvider>
  )
}

