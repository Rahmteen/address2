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
My initial approach to building this app was to consider the main features that I wanted to implement.
I knew I wanted to include:
- Landing page 
- Details page (ideally with ability to edit and delete users)
- Add contact page 
  
  Next I considered the user experience started thinking about the user experience, and I decided that search functionality and/or  the ability to sort users would potentially be important.

  I drew up a sketch design for what the main app would look like.

  After that, I made a quick wire frame for how I wanted to design the Hierarchy for app's components.
  At that point, I was able to see what consider my options for state management. 

  I then built out a super stripped skeleton of the app, and wrote a couple very of basic snapshot tests with Jest/React-testing-library to save time. This helped to make sure that each component was rendering properly as I built each one of them out further.

  The component I wanted to start with, was the Landing page which is where I would be requesting my data. Once I built out that component, and worked my way to the UserTableItem component where is where displayed each individual contact. From there, I built one component at a time. Of course I was being mindful of state throughout this process. I was asking things like:

  - Does the reality of what I've built match my wire frame? What deviations are necessary? Why?
  - Is this the component located in best place for this application? 
  - What other features might be necessary in this component?
  - Where should I be storing state for this component?
  - Is the state that's being used in this component going to be needed by other components? If so,   which ones? How will it get there?
  - How am I going to layout/style this component?
  
  I moved my from component to component the app's functionality was built out.
  Lastly, I added more tests to increase the app's reliability.
  




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
