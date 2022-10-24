import {useState} from "react";

const BlogForm = ({createNewBlog}) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const handleNewBlog = (event) => {
    event.preventDefault()
    setNewAuthor('')
    setNewTitle('')
    setNewUrl('')

    createNewBlog({title: newTitle, author: newAuthor, url: newUrl})
  }

  return (
    <form onSubmit={handleNewBlog}>
      <div>title <input type="text" value={newTitle} name="newTitle"
                        onChange={({target}) => setNewTitle(target.value)}/></div>
      <div>author <input type="text" value={newAuthor} name="newAuthor"
                         onChange={({target}) => setNewAuthor(target.value)}/></div>
      <div>url <input type="text" value={newUrl} name="newUrl" onChange={({target}) => setNewUrl(target.value)}/></div>
      <button type="submit">create</button>
    </form>
  )
}

export default BlogForm