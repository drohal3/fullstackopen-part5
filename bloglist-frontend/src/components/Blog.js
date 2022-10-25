import { useState } from 'react'

const Blog = ({blog, loggedInUser, updateBlog, removeBlog}) => {
  const [isShown, setIsShown] = useState(false)

  const handleLikeAction = () => {
    const blogData = ({
      ...blog,
      likes: blog.likes + 1
    })

    updateBlog(blogData)
  }

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
      likes: {blog.likes} <button onClick={handleLikeAction}>like</button> <br/>
      {blog.user && blog.user.name ? blog.user.name : ""}
      {blog.user && blog.user.username && loggedInUser && loggedInUser.username === blog.user.username &&
        <>
          <br/>
          <button onClick={() => removeBlog(blog)}>remove</button>
        </>
      }
    </div>

  </div>  
)}

export default Blog