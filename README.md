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
