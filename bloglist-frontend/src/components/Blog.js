import { useState } from 'react'

const Blog = ({blog}) => {
  const [isShown, setIsShown] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const detailStyle = {
    display: isShown ? '' : "none"
  }

  return (
  <div style={blogStyle}>
    <div>{blog.title} {blog.author} <button onClick={() => setIsShown(!isShown)}>{isShown ? "hide" : "show"}</button></div>
    <div style={detailStyle}>
      {blog.url} <br/>
      likes: {blog.likes} <button>like</button> <br/>
      {blog.user && blog.user.name ? blog.user.name : ""}
    </div>

  </div>  
)}

export default Blog