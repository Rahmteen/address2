# Engineering Challenge - Web Frontend

### Build the web frontend client of an “Address Book” application

</br>

## Deployment Steps

Instal local dependencies

```
  npm install
```

To start application

```
  npm start
```

> <small>note: This should prompt your web browser to open a window, otherwise, manually navigate to [http://localhost:8080/](http://localhost:8080/) </small>
 

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

<br />

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

<br/> 

> 1. Landing page with users in a table.
> 
> 2. Details page (ideally with ability to edit and delete users)
> 
> 3. Add contact page and form 
> 

<br/> 

### UI/UX

Next I considered the user experience and decided that a search functionality would be important. At the very least the application must have the ability to sort users. I drew up a sketch design for what the main app would look like and made a quick wire frame for how I wanted to design the hierarchy for app's components.

### TDD

Once I had built a skeleton of the app, I wrote units tests for my components with ```jest/react-testing-library```. Snapshots and window render tests provided basic coverage within my scope. This helped manage potential errors through further development.

The component I wanted to start with was the Landing page. This was going to be my source of data. I worked my way to the ```UserTableItem``` component where each individual contact would be displayed. From there, I built one component at a time. Of course I was being mindful of state throughout this process.

<i>My questions included:</i>

  - Does the reality of what I've built match my wire frame? What deviations are necessary? Why?
  - Is this the component located in best place for this application? 
  - What other features might be necessary in this component?
  - Where should I be storing state for this component?
  - Is this a display or functional component? 
  - How am I going to layout/style this component?
  

## Technologies

## React?

React is responsive, efficient, has clear documentation, and immense support for debugging and libraries. My prior experience with this SPA made it the obvious choice.

</br>

### Choosing State Management

### The Tradeoffs...
There is a tradeoff with every state management solution. It's important to be aware of the sacrifices you're making when chosing how to manage state. Here were some of my considerations:


- First I thought of Redux. I appreciate it's predictability and single source of truth. The cost of time for implementing this technology would heavily outweight the benefit. The application is simple and won't be needing extensive, scalable data management.
  
- Next I considered using React's Context API. Though it has some reliability issues at scale, in smaller applications it can be a fantastic solution. Considering the size/complexity this Address Book app, I felt that using Context was a good potential option.
  
- Considering none of my state was going to be needed past 3 component levels, the simple choice of prop drilling solved many of my issues without the time consuming overhead. This was the clear choice when building my app. 
  
## Features

Though it wasn't explicity stated, I couldn't imagine building an Address Book without full CRUD functionality. As I considered how many contacts someone might have in their Address Book (hundreds/potentially thousands), I realized a search function would be extremely helpful.

>
> 1. Retreive Contacts
> 2. View details of existing contacts
> 3. Edit the details of existing contacts (ex: change a contat's name/phone/email)
> 4. Add a new contact
> 5. Delete a contact 
> 6. search function (search for a specific contact)
>

### Conclusion
I considerd the size and potential structure of this Address Book app. I considered the fact that the app has no backend (besides the `randomuser.me` endpoint) or database to connect to. I didn't see a significant need for a global state management. So in this case, I decided that ```prop drilling``` would be the most appropriate and mature choice. I provided surface level coverage for my components with ```jest``` and ```react-testing-library```. Beyond the component logic, I also leveraged the react-bootstrap component library for responsive elements and ```mobile friendly``` design. With a handful of features I deemed required like a ```search``` and ```sort```, I finished development and pushed to source control. 

