CRUD APP 

username : aceinfoway
password : abc

This app is created using react js 

- this is single page application 
  app.js is a root component which is rendered on root element
  there are 5 other component - Login.js , Home.js , Navbar.js , Product.js , Form.js

- App.js
  in this file we have created the react routing which provide the functionality to change between diffrent path without reloading the page
  also there is one state variable "isAuthenticated" which takes the true or false argument from the login page
  if user is varified then and only then it can enter the app otherwise it will redirect to login page 

- Login.js
  in this component we have created 4 state variable each for different purpose. username and password state is linked to input value of username and password
  status state is used for storing the value of null or success from which we can know if user has entered correct crentials if user entered credentials is correct then we store "success" value into the satus
  which will redirect the user to the home page of application
  there is a array called credentials in which i have stored the correct username and password
  there is a function called checkcredentials that returns promise which returns the error if credentials are wrong and if credentials are true it resolve the promise

- Navbar.js
  this component is used to create the navigation bar in this app
  it has 4 options
  Home : which redirects to home page if it is clicked
  product : which redirects to product page if it is clicked
  form : which redirects to home form if it is clicked
  logout button : which logs out the user and also runs the function called Handlelogout
  this function will clear the user data from local storage and redirect the user back to the login page

  
- Home.js
  in this component we have imported the Navbar component to show navigation in our app
  it shows short inforamation about the app
  and at the center of home page there is a "Go" button which redirects the user to the product page

- Product.js
  in this product page there are 2 interface named address and userdata which provide template to use in variable
  in main function there is a useNavigate and Uselocation hook which is used for navigating into next page and location hook is used for sending data to the component
  location.state variable takes data from the edit function and sends it to form component
  there are 2 useEffect function . first useEffect has async function called fetchData which fetches data from the JSONplaceholder website and stores it in the userData state
  also it stores the data in local storage . in this i have created one condition in which it checks if is there any data in local storage it yes then it fetches it and stores it into userdata state
  or it will runs the fetchdata function
  second useEffect is used for saving the changed data from the edit button. there is a condition location.state which indicates if this data is new or upadated 
  HandleRemoveTask fuunction use filter method to discard the selected data and set new data to userData state
  HandleAddTask function navigates the user to the form in which user can store the new data
  HandleEditTask function first stores the current value into local storage and then provide the item data which is to be updated to form componenet using location.state and then redirects the user to form
  
  on the product page there is data listed which is fetched from api and it is shown in tabular form
  there are many options like add , edit, remove , show which add basic functionality in crud app

- Form.js
  in this component there are 10 state variable that is used to store the data from the user
  if user clicks on add button in product page this form will be empty and let user store the new data
  if user clicks on edit button of any data then this form fields contain the data of item and let user update the value
  it has save button which will save new or updated data to the lovcal storage and redirect the user back to the product page
  
  















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
