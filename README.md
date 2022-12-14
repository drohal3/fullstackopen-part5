# Fullstack Open - Part5: Testing React apps
Part 5 of the Full Stack online course https://fullstackopen.com/en/part5

## Exercise 5.1: bloglist frontend, step1
**Task:**
Clone the application from [GitHub](https://github.com/fullstack-hy2020/bloglist-frontend) with the command:
```
git clone https://github.com/fullstack-hy2020/bloglist-frontend
```
remove the git configuration of the cloned application
```
cd bloglist-frontend   // go to cloned repository
rm -rf .git
```
The application is started the usual way, but you have to install its dependencies first:
```
npm install
npm start
```
Implement login functionality to the frontend. The token returned with a successful login is saved to the application's state user.

If a user is not logged-in, only the login form is visible.

fullstack content
If user is logged-in, the name of the user and a list of blogs is shown.

fullstack content
User details of the logged-in user do not have to be saved to the local storage yet.

NB You can implement the conditional rendering of the login form like this for example:
```
if (user === null) {
return (
<div>
<h2>Log in to application</h2>
<form>
//...
</form>
</div>
)
}

return (
<div>
<h2>blogs</h2>
{blogs.map(blog =>
<Blog key={blog.id} blog={blog} />
)}
</div>
)
}
```

**Solution:**
Log in functionality implemented according to the course material.

## Exercise 5.2: bloglist frontend, step2
**Task:**
Make the login 'permanent' by using the local storage. Also implement a way to log out.

fullstack content
Ensure the browser does not remember the details of the user after logging out.

**Solution:**
Log out functionality implemented as instructed in the course material. 

## Exercise 5.3: bloglist frontend, step3
**Task:**
Expand your application to allow a logged-in user to add new blogs

**Solution:**
Adding a new blog implemented.

## Exercise 5.4: bloglist frontend, step4
Implement notifications which inform the user about successful and unsuccessful operations at the top of the page. For example, when a new blog is added, the following notification can be shown:

*\*picture is available in the course material*

Failed login can show the following notification:

*\*picture is available in the course material*

The notifications must be visible for a few seconds. It is not compulsory to add colors.

**Solution:**
Reused notifications from the part 3

## Exercise 5.5 Blog list frontend, step5
**Task**
Change the form for creating blog posts so that it is only displayed when appropriate. Use functionality similar to what was shown [earlier in this part of the course material](https://fullstackopen.com/en/part5/props_children_and_proptypes#displaying-the-login-form-only-when-appropriate). If you wish to do so, you can use the Togglable component defined in part 5.

By default the form is not visible

It expands when button create new blog is clicked

The form closes when a new blog is created.

**Solution:**
Implemented as instructed

## Exercise 5.6 Blog list frontend, step6
**Task:**
Separate the form for creating a new blog into its own component (if you have not already done so), and move all the states required for creating a new blog to this component.

The component must work like the NoteForm component from the [material](https://fullstackopen.com/en/part5/props_children_and_proptypes) of this part.

**Solution:**
Blog form moved ot its own component together with its states.

## Exercise 5.7* Blog list frontend, step7
**Task:**
Let's add a button to each blog, which controls whether all of the details about the blog are shown or not.

Full details of the blog open when the button is clicked.

And the details are hidden when the button is clicked again.

At this point the like button does not need to do anything.

The application shown in the picture has a bit of additional CSS to improve its appearance.

It is easy to add styles to the application as shown in part 2 using inline styles:
```
const Blog = ({ blog }) => {
const blogStyle = {
paddingTop: 10,
paddingLeft: 2,
border: 'solid',
borderWidth: 1,
marginBottom: 5
}

return (
<div style={blogStyle}>
<div>
{blog.title} {blog.author}
</div>
// ...
  </div>
)}
```
NB: even though the functionality implemented in this part is almost identical to the functionality provided by the Togglable component, the component can not be used directly to achieve the desired behavior. The easiest solution will be to add state to the blog post that controls the displayed form of the blog post.

**Solution:**
Blog component extended.

## Exercise 5.8: Blog list frontend, step8
Implement the functionality for the like button. Likes are increased by making an HTTP PUT request to the unique address of the blog post in the backend.

Since the backend operation replaces the entire blog post, you will have to send all of its fields in the request body. If you wanted to add a like to the following blog post:
```
{
_id: "5a43fde2cbd20b12a2c34e91",
user: {
_id: "5a43e6b6c37f3d065eaaa581",
username: "mluukkai",
name: "Matti Luukkainen"
},
likes: 0,
author: "Joel Spolsky",
title: "The Joel Test: 12 Steps to Better Code",
url: "https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/"
},
```
You would have to make an HTTP PUT request to the address /api/blogs/5a43fde2cbd20b12a2c34e91 with the following request data:
```
{
user: "5a43e6b6c37f3d065eaaa581",
likes: 1,
author: "Joel Spolsky",
title: "The Joel Test: 12 Steps to Better Code",
url: "https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/"
}
```
Backend has to be updated too to handle the user reference.

One last warning: if you notice that you are using async/await and the then-method in the same code, it is almost certain that you are doing something wrong. Stick to using one or the other, and never use both at the same time "just in case".

**Solution:**
Like increase action implemented without modifying backend.

## Exercise 5.9: Blog list frontend, step9
**Task:**
Modify the application to list the blog posts by the number of likes. Sorting the blog posts can be done with the array sort method.

**Solution:**
Sorting implemented in the rendering part of the blog list.

## Exercise 5.10: Blog list frontend, step10
**Task:**
Add a new button for deleting blog posts. Also implement the logic for deleting blog posts in the frontend.

The confirmation dialog for deleting a blog post is easy to implement with the window.confirm function.

Show the button for deleting a blog post only if the blog post was added by the user.

**Solution:**
Button added and blog removal logic implemented.

## Exercise 5.11: Blog list frontend, step11
**Task:**
Define PropTypes for one of the components of your application.

**Solution:**
PropTypes defined for Blog component.

## Exercise 5.12: Blog list frontend, step12
**Task:**
Add ESlint to the project. Define the configuration according to your liking. Fix all of the linter errors.

Create-react-app has installed ESlint to the project by default, so all that's left for you to do is to define your desired configuration in the .eslintrc.js file.

NB: do not run the eslint --init command. It will install the latest version of ESlint that is not compatible with the configuration file created by create-react-app!

**Solution:**
ESlint configured and code styles fixed

## Exercise 5.13: Blog list tests, step1
**Task:**
Make a test which checks that the component displaying a blog renders the blog's title and author, but does not render its url or number of likes by default.

Add CSS-classes to the component to help the testing as necessary.

**Solution:**
Test implemented in Blog.test.js file and passed after when running 
```
CI=true npm test
```

## Exercise 5.14: Blog list tests, step2
**Task:**
Make a test which checks that the blog's url and number of likes are shown when the button controlling the shown details has been clicked.

**Solution:**
Implemented in the same test as the previous exercise.

## Exercise 5.15: Blog list tests, step3
**Task:**
Make a test which ensures that if the like button is clicked twice, the event handler the component received as props is called twice.

**Solution:**
Implemented as a new test.

## Exercise 5.16: Blog list tests, step4
**Task:**
Make a test for the new blog form. The test should check, that the form calls the event handler it received as props with the right details when a new blog is created.

**Solution:**
Implemented in BlogForm.test.js file.

## Exercise 5.17: bloglist end to end testing, step1
**Task:**
Configure Cypress to your project. Make a test for checking that the application displays the login form by default.

The structure of the test must be as follows:
```
describe('Blog app', function() {
beforeEach(function() {
cy.request('POST', 'http://localhost:3003/api/testing/reset')
cy.visit('http://localhost:3000')
})

it('Login form is shown', function() {
// ...
})
})
```
The beforeEach formatting blog must empty the database using for example the method we used in the material.

**Solution:**
Implemented as instructed.

## Exercise 5.18: bloglist end to end testing, step2
**Task:**
Make tests for logging in. Test both successful and unsuccessful login attempts. Make a new user in the beforeEach block for the tests.

The test structure extends like so:
```
describe('Blog app', function() {
beforeEach(function() {
cy.request('POST', 'http://localhost:3003/api/testing/reset')
// create here a user to backend
cy.visit('http://localhost:3000')
})

it('Login form is shown', function() {
// ...
})

describe('Login',function() {
it('succeeds with correct credentials', function() {
// ...
})

    it('fails with wrong credentials', function() {
      // ...
    })
})
})
```
Optional bonus exercise: Check that the notification shown with unsuccessful login is displayed red.

**Solution:**
Implemented as instructed, skipped the bonus exercise checking styles for now.

## Exercise 5.19: bloglist end to end testing, step3
**Task:**
Make a test which checks that a logged-in user can create a new blog. The structure of the test could be as follows:
```
describe('Blog app', function() {
// ...

describe('When logged in', function() {
beforeEach(function() {
// log in user here
})

    it('A blog can be created', function() {
      // ...
    })
})

})
```
The test has to ensure that a new blog is added to the list of all blogs.

**Solution:**
Implemented as instructed.

## Exercise 5.20: bloglist end to end testing, step4
**Task:**
Make a test which checks that users can like a blog.

**Solution:**
Implemented as instructed

## Exercise 5.21: bloglist end to end testing, step5
**Task:**
Make a test for ensuring that the user who created a blog can delete it.

Optional bonus exercise: also check that other users cannot delete the blog.

**Solution:**
Implemented as instructed.

## Exercise 5.22: bloglist end to end testing, step6
**Task:**
Make a test which checks that the blogs are ordered according to likes with the blog with the most likes being first.

This exercise is quite a bit trickier than the previous ones. One solution is to add a certain class for the element which wraps the blog's content and use the eq method to get the blog element in a specific index:
```
cy.get('.blog').eq(0).should('contain', 'The title with the most likes')
cy.get('.blog').eq(1).should('contain', 'The title with the second most likes')
```
Note that you might end up having problems if you click a like button many times in row. It might be that cypress does the clicking so fast that it does not have time to update the app state in between the clicks. One remedy for this is to wait for the number of likes to update in between all clicks.

**Solution:**
Implemented as instructed. Added 
```
defaultCommandTimeout: 10000
```
to cypress.config.js