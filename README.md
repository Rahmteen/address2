# Engineering Challenge - Web FrontEnd

### Build the web frontend client of an “Address Book” application

</br>

## Deployment Steps

- Fork this Repository
- Clone to your local machine (make sure you have Node.js installed)
- In your terminal, navigate to the location of this project.
- Then run:

```
  npm install
```

- Then run:

```
  npm start
```

</br>

Once the `npm start` command has completed, the application should automatically open up in your web browser. If for some reason that doesn't happen automatically, open up your web browser manually and navigate to [http://localhost:8080/](http://localhost:8080/)

</br>
</br>

# How to use the app

- You begin by seeing your contacts displayed on the landing page
- To view or edit of the details of a specific contact, just mouse over to the contact and click.
- If you want to add a new user, click the `Add User` link in the Nav bar.
- You can always return to your list of contacts by clicking on the `Address Book` link in the Nav bar.
- **Note because there is no database connected to the app currently, refreshing your browser will cause a your contacts to be reset.**

</br>

# Summary

## Why react?

This assignment left a lot of room for choices. My first decision was to figure out where to build the application. In this case, I chose React.js. I specifically chose react for it's modular component architecture and it's effecient Virtual DOM rendering capabilities. React is responsive, has clear documentation, and there is a ton of info about it all over the web.

## Choosing State Management

As a general rule I prefer simple and elegant solutions but there is always a trade off... When choosing how to handle state in this application, I considered a few options:


- First I thought of Redux. I appreciate it's predictability and single source of truth(redux store) when ditributing state globally. But it's complexity/setup seemed like overkill for this app.
- Next I considered using Context api(w/ hooks). Context, can distribute state glabally, and it's far simpler than redux, but then I started consider... Do I need to distribute state globally? 
  
- Finally I considered manually drilling the props. Prop drilling is great for small apps, but it is limited because props can only be passed down through parent components. I prefer prop dilling as long as the props dont need to be drilled down more than 3 levels of components.
  
- I considerd the potential structure of the application as well as the fact that the app has no backend or database to connect to. I saw no real need for global state distrobution, in an app that this size. So in this case, I felt that prop drilling would be the most appropriate and mature choice.



## Testing

Your web client should initially display the list of persons from the address book. The user
should be able to select a person from the list in order to see more details about that person.
Please use the API endpoints from https://randomuser.me/ (Documentation can be found at
https://randomuser.me/documentation ). Your client should be responsive.

○ A summary of the assignment
■ Your overall approach
■ What features you implemented
■ Given more time, what else would you have liked to complete and how
long it would have taken you?
■ Given more time, what else would you have done to make the project
more robust?
● Production-ready code that:
○ Your code checked into a git repository that can be shared with us (Github,
Gitlab, Bitbucket, etc…). We should be able to run the code
○ Follows community standard syntax and style
○ Has no debug logging, TODOs, or FIXMEs
○ Has test coverage to ensure quality and safety