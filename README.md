## Tech Blog - Steve Barry

## <span style="color:green"> The Task</span>

The task was to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. 

### ⭐ ⭐ S.T.A.R. ⭐ ⭐

**SITUATION**

The provided user story was: 

> <span style="font-style:italic">AS A developer who writes about tech</span>
> 
> <span style="font-style:italic">I WANT a CMS-style blog site</span>
>
> <span style="font-style:italic">SO THAT I can publish articles, blog posts, and my thoughts and opinions</span>

**TASK**

Provide a solution that allows a user to post blogs, be able to update and delete them, and allow other logged in users to comment on them. There should also be a time out feature.

**ACTION**

Writing of a solution to resolve the situation, including:
* Layout
  * *Simple, yet attractive design*
  * *Logical layout*
  * *Improved code visualisation - eg: indentation*
  * *Error free loading*
  * *Favicon designed and added*
  * *Thorough comments*
  * *Intuitive design*
  * *Handlebars templates used for efficiency*
* Javascript
  * *Error free performance*
  * *Multiple functions to separate aspects of code*
  * *Thorough comments*
* GIT
  * *Numerous commits to track changes in code*
  * *Code deployed to Github and Heroku for public viewing*
* FUNCTIONALITY
  * *Time out feature*
  * *Create, update, view, and delete posts*
  * *Comment feature*

**RESULT**

The end code is stored on Github, and publicly available and viewable, as well as the app being deployed to Heroku. This result meets all requirements of the User Story and acceptance criteria:

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## <span style="color:green"> The Outcome</span>

As the acceptance criteria has been met and exceeded, the task is now complete. 

You can view the finished solution [HERE](https://nbs-techblog.herokuapp.com/)

Alternatively, here is a screenshot:

> ![Screenshot of Quiz Time page](./public/images/screen.png "Screenshot of Quiz Time page")

---
<p style="text-align:center;">Written by <span style="font-style:italic">Steve Barry</span> - Due date 23/12/2021</p>

<p style="text-align:center;">© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.</p>
