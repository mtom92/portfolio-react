import React, {Component} from 'react'


class Blog extends Component {

   render(){

     let posts = this.props.posts.map((s,i) => {
      return (
        <li key={i}>
        <h2>{s.title}</h2>
        <p class="subtext">{s.content}</p>
        </li>
      )
    })

     return(
        <div className="divabout">
        <ul>
          {posts}
        </ul>

        </div>
     )
   }

}

export default Blog;
