import React , {Component} from 'react';
import { Route } from 'react-router-dom'

import About from '../pages/About'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Blog from '../pages/Blog'

class Content extends Component {
  render(){
    let post = [{title:'Whitening',content:'Lorem ipsum dolor sit amet, illud etiam graeco per eu, rebum impetus scripserit qui at, ei autem hendrerit his. Id mea eros praesent ullamcorper. Quo dicam abhorreant at, dolor ponderum legendos et vel. Ius duis maiorum evertitur cu, pro ut tale maiorum suavitate, in etiam timeam iudicabit quo. Et mei impedit percipit ocurreret, vidit detraxit sapientem et vel. Pro ne forensibus rationibus dissentiunt, pri eripuit aliquid hendrerit ei. Id quo magna legimus docendi. Nec at nisl putent docendi. Diceret posidonium id quo, facilisis temporibus eu vel. Ius legimus imperdiet cu, nec cu tale inermis facilis, et duo stet tollit suscipit.'},
    {title:'Cleaning',content:'Lorem ipsum dolor sit amet, illud etiam graeco per eu, rebum impetus scripserit qui at, ei autem hendrerit his. Id mea eros praesent ullamcorper. Quo dicam abhorreant at, dolor ponderum legendos et vel. Ius duis maiorum evertitur cu, pro ut tale maiorum suavitate, in etiam timeam iudicabit quo.'},
    {title:'Bad puns',content:'Lorem ipsum dolor sit amet, illud etiam graeco per eu, rebum impetus scripserit qui at, ei autem hendrerit his. Id mea eros praesent ullamcorper. Quo dicam abhorreant at, dolor ponderum legendos et vel. Ius duis maiorum evertitur cu, pro ut tale maiorum suavitate, in etiam timeam iudicabit quo. Et mei impedit percipit ocurreret, vidit detraxit sapientem et vel. Pro ne forensibus rationibus dissentiunt, pri eripuit aliquid hendrerit ei. Id quo magna legimus docendi. Nec at nisl putent docendi. Diceret posidonium id quo, facilisis temporibus eu vel. Ius legimus imperdiet cu, nec cu tale inermis facilis, et duo stet tollit suscipit.'},
    {title:'Braces',content:'Lorem ipsum dolor sit amet, illud etiam graeco per eu, rebum impetus scripserit qui at, ei autem hendrerit his. Id mea eros praesent ullamcorper. Quo dicam abhorreant at, dolor ponderum legendos et vel. Ius duis maiorum evertitur cu, pro ut tale maiorum suavitate, in etiam timeam iudicabit quo.'},
    {title:'Root Canals',content:'Lorem ipsum dolor sit amet, illud etiam graeco per eu, rebum impetus scripserit qui at, ei autem hendrerit his. Id mea eros praesent ullamcorper. Quo dicam abhorreant at, dolor ponderum legendos et vel. Ius duis maiorum evertitur cu, pro ut tale maiorum suavitate, in etiam timeam iudicabit quo. Et mei impedit percipit ocurreret, vidit detraxit sapientem et vel. Pro ne forensibus rationibus dissentiunt, pri eripuit aliquid hendrerit ei. Id quo magna legimus docendi. Nec at nisl putent docendi. Diceret posidonium id quo, facilisis temporibus eu vel. Ius legimus imperdiet cu, nec cu tale inermis facilis, et duo stet tollit suscipit.'}]

     return (
       <div>
         <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/projects" component={Projects} />
          <Route  path="/blog" render={
            () => (<Blog  posts={post} />)
          } />
       </div>

    );
  }
}

export default Content;
