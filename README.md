# One Piece Anime Characters Guide

Welcome to the One Piece Anime Characters Guide project! In this project, you will create a web application that allows users to explore and learn about characters from the One Piece anime series. The application will feature several views and functionalities, including:

1. **Character List Page**: Displaying a list of all the One Piece characters.
3. **Search Functionality**: Allowing users to search for characters by name, traits, or affiliations.

### Your Tech Stack
- Client: [React](https://facebook.github.io/react)
- Server: [NodeJS](https://nodejs.org), with the [Express](https://express.js.com) framework
- Database: [MongoDB](https://mongodb.com) with the [Mongoose](https://mongoosejs.com) ODM.
- Database: [MYSQL](https://www.mysql.com/).
- Additional libraries and tools:
- [Axios](https://github.com/axios/axios)

HOW TO START THIS APP

By design, this assessment contains more work than you will be able to complete in a day, so don't be concerned about not completing all of the steps below. Rather, please work on the following steps **in order**, moving on to the next step only after the one you are working on is complete. **Commit frequently** with informative messages.

---
### Before You Begin:

** This application is divided into two main folders one for the react client in a folder with the name react-client and one for the backend with the name backEnd.

**Complete these setup tasks**:
- [ ] open a the terminal from within the repository folder and split it into two terminals;
- [ ] In the first one run this command : cd backEnd/
- [ ] In the second one run this command : cd react-client/

- [ ] Run `npm install` inside the `react-client` directory to install dependencies for your frontend.
- [ ] Run `npm install` inside the `backEnd` directory to install dependencies for your backend.
- [ ] Ensure that the MongoDB process is running on your computer (`mongod`) if you are going to use mongoDb.
- [ ] Create the database by running `npm run db:setup` from inside the `backEnd` directory. Make sure you check if the database was successfully seeded using MongoDBCompass or any tool of your choice. It should contain the 6 Charcters in the `data.json` file.
- [ ] :
  - start your application with two commands, `npm  start` from inside the `react-client` directory and `npm start` from inside the `backEnd` directory , in two separate terminal tabs.
  - If successfully the react client will be opened automatically in your browser and you server should be listening on port 5000
  - first thing you need to do is to explore all the files in both react-client and backend directories and explore the application on your browser.
**WHEN THESE TASKS ARE COMPLETE:** proceed to Step One.

---
## Steps

The project involves several steps to complete various functionalities. Each step is outlined below:

---

### Step One: Fetching Data from the Server

- First make sure that the server is running !!!.
- Implement Axios request in the client-side code to fetch characters from the server.
- Update the client to replace sample data with data obtained from the server.
- Make a commit with the message "Complete Step One" when done.

[url : `http://localhost:5000/get`  , method : `GET`]
---

### Step Two: Search Functionality

- Modify the search bar so that allows users to search for characters by name.
- Update the client to make the search display search results.
- Make a commit with the message "Complete Step Three" when done.



---

### Step Three: Add Character

- implement functionality to add characters using add component
- Make sure to check the necessary server endpoint to acheive adding a character to the database
- Make a commit with the message "Complete Step Four" when done.

[url : `http://localhost:5000/add`  , method : `POST`]
---


### Step Four: Update and Delete

- implement functionality to update and delete characters by clicking update and delete button in the allCharacters component
- Make sure to check the necessary server endpoints to acheive updating and deleting a character from the database
- Make a commit with the message "Complete Step Five" when done.


[url : `http://localhost:5000/delete/:id`  , method : `DELETE`]
---
[url : `http://localhost:5000/update/:id`  , method : `PUT`]
--


## Available Resources

- [ReactJS Docs](https://facebook.github.io/react/)
- [NodeJS Docs](https://nodejs.org/)
- [ExpressJS Docs](https://expressjs.com/)
- [MySQL Official Documentation](https://dev.mysql.com/doc/)
- [Axios Docs](https://github.com/axios/axios)
- [Google Search](https://google.com) to search for documentation and tutorials
