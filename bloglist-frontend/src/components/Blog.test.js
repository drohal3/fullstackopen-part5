import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'

test('renders blog', () => {
  const blog = {
    "title": "test blog",
    "author": "test test",
    "url": "http://test.com",
    "likes": 123,
    "id": "test123"
  }

  const loggedInUser = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpZCI6IjYzNDE1ODEwMDNjMjBmOTMyOGIzZTQxZCIsImlhdCI6MTY2Njc4MTQ0NiwiZXhwIjoxNjY2Nzg1MDQ2fQ.wrXAMQlbQ63ZnsU2w2w1eqSk5gQ_IBQt-Ja1hwSpZis",
    "username": "test",
    "name": "test test"
  }

  const updateBlog = () => {
    // do nothing
  }

  const removeBlog = () => {
    // do nothing
  }

  const { container } = render(<Blog blog={blog} loggedInUser={loggedInUser} updateBlog={updateBlog} removeBlog={removeBlog}/>)


  const blogTitle = container.querySelector('.blogTitle')
  const blogDetail = container.querySelector('.blogDetail')
  expect(blogTitle).toHaveTextContent(`${blog.title} ${blog.author}`)
  expect(blogDetail).toHaveStyle('display: none')
})