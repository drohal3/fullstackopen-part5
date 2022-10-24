import {useState, useEffect, useRef} from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

import Togglable from './components/Togglable'
import BlogForm from "./components/BlogForm";

const Notification = ({message, type}) => {
  let notificationClass = `notification ${type}`

  return type !== 'none' ? (<div className={notificationClass}>
    <p>{message}</p>
  </div>) : null
}

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const MessageTypes = {
    Success: "success", Error: "error", None: "none"
  }
  const [message, setMessage] = useState(MessageTypes.None)
  const [messageType, setMessageType] = useState(MessageTypes.None)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedBloglistappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setMessage("Wrong username or password.")
      setMessageType(MessageTypes.Error)
      setTimeout(() => {
        setMessageType(MessageTypes.None)
      }, 5000)
    }
  }

  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBloglistappUser')
    blogService.setToken(null)
    setUser(null)
  }

  const blogFormRef = useRef()

  const handleNewBlog = async (event) => {
    event.preventDefault()

    try {
      const newBlog = await blogService.create({title: newTitle, author: newAuthor, url: newUrl})
      setBlogs(blogs.concat(newBlog))

      setNewAuthor('')
      setNewTitle('')
      setNewUrl('')
      blogFormRef.current.toggleVisibility()

      setMessage(`A new blog${newBlog.name} by ${newBlog.author} added`)
      setMessageType(MessageTypes.Success)
      setTimeout(() => {
        setMessageType(MessageTypes.None)
      }, 5000)
    } catch (e) {
      setMessage("Error, new blog could not be added.")
      setMessageType(MessageTypes.Error)
      setTimeout(() => {
        setMessageType(MessageTypes.None)
      }, 5000)
    }
  }

  const loginForm = () => (
    <div>
      <h2>log in to application</h2>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({target}) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({target}) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )

  const blogList = () => {
    return (
      <div>
        <h2>blogs</h2>
        <p>{user.name} logged in <button onClick={handleLogout}>logout</button></p>
        <Togglable buttonLabel="create new blog" ref={blogFormRef}>
          <BlogForm handleNewBlog={handleNewBlog}/>
        </Togglable>

        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog}/>
        )}
      </div>
    )
  }

  return (
    <div>
      <Notification message={message} type={messageType}/>
      {user === null ?
        loginForm() :
        blogList()
      }
    </div>
  )
}

export default App
