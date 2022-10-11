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