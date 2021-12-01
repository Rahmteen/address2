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

- Once the `npm start` command has completed, the application should automatically open up in your    web browser. If for some reason that doesn't happen automatically, open up your web browser manually and navigate to [http://localhost:8080/](http://localhost:8080/)

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

</br>

## The assignment
- Build the web frontend client of an “Address Book” application
  - Web client should initially display the list of persons from the address book.
  - The user should be able to select a contact from the list in order to see more details about that contact
  - Contacts can be retreived from [randomuser.me](https://randomuser.me/)
- Hints
  - User should see the list of persons from the address book
  - User should be able to select a person from the list and navigate to a details page
    - User should be able to see the Contact's first name, last name, phone number on the details page
- Deliverables
  - A summary of the assignment
  - Your overall approach
  - What features you implemented
  - Given more time, what else would you have liked to complete and how
    long it would have taken you?
  - Given more time, what else would you have done to make the project
    more robust?
  - Production-ready code that:
    - Your code checked into a git repository that can be shared with us (Github,
      Gitlab, Bitbucket, etc…). We should be able to run the code
    - Follows community standard syntax and style
    - Has no debug logging, TODOs, or FIXMEs
    - Has test coverage to ensure quality and safety






</br>

# Approach

## overall approach

## Why react?

 My first decision was to figure out where to build the application. In this case, I chose React. I  chose react for it's modular component architecture and it's effecient Virtual DOM rendering capabilities. React is responsive, has clear documentation, and there is a ton of info about it all over the web.

</br>

### Choosing State Management

### The Tradeoffs...
There is a tradeoff with every state management solution. It's important to be aware of the sacrifices you're making when chosing how to manage state. Here were some of my considerations:


- First I thought of Redux. I appreciate it's predictability and single source of truth(redux store) when distributing state globally. But due to it's complexity, Redux is most appropriate for complex applications. In this case, Redux felt like overkill for this basic address book application. 
  
- Next I considered using react Context api(w/ hooks). Context, can provide state globally, and it's simpler to impliment than redux. It has some performance issues at scale, but in smaller applications,it can be a fantastic solution. Considering the size/complexity this Address Book app, I felt that using Context was a good potential option.
  
- Finally I considered manually drilling the props(state). Prop drilling is great for small apps that don't need global state managment. The main drawback with propdrilling is that props can only be passed down from parent components to their children. While that sounds like a huge drawback, in a smaller apps, its usually not a problem. In fact, sometimes prop drilling can be the most elegant solution. My rule of thumb is this: As long as the props dont need to be drilled down more than 3 levels of components, I consider prop drilling.
  
## Features

Though it wasn't explicity stated, I couldn't imagine building an Address Book without full crud functionality. As I considered how many contacts someone might have in their Address Book (hundreds/potentially thousands), I realized a search function would be extremely helpful.


- Retreive Contacts
- View details of existing contacts
- Edit the details of existing contacts (ex: change a contat's name/phone/email)
- Add a new contact
- Delete a contact 
- search function (search for a specific contact)
- 

### Conclusion
 I considerd the size and potential structure of this Address Book app. I considered the fact that the app has no backend (besides the `randomuser.me` endpoint) or database to connect to. I didn't see a significant need for a global state management. So in this case, I decided that prop drilling would be the most appropriate and mature choice.



## Testing
