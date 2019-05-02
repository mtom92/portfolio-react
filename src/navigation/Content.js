import React , {Component} from 'react';
import { Route } from 'react-router-dom'

import About from '../pages/About'
import Home from '../pages/Home'
import Procedures from '../pages/Projects'
import Contact from '../pages/Blog'

class Content extends Component {
  render(){
    let services = [{service:'Whitening',desc:'Whithening fast! 30 min or lest'},{service:'Cleaning',desc:'Your theet will be cleaned as it deserve'},
    {service:'Bad puns',desc:'Just using alittle the basic english'}, {service:'Braces',desc:'Brace for impact!'}, {service:'Root Canals',desc:'deeply unnerving'}]

     return (
       <div>
         <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/projects" render={
            () => (<Procedures services={services} />)
          } />
          <Route  path="/blog" render={
            () => (<Contact name="Thooty" phone="(555) 555-5555" />)
          } />
       </div>

    );
  }
}

export default Content;
