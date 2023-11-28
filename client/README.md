
# IntelliStack

 Elevate your business to new heights with our cutting-edge
                      cloud services. Seamlessly collaborate with your team,
                      securely store and access your data from anywhere, and
                      experience the power of innovation at your fingertips.

                      


## Tech Stack

**Client:** React, Redux, Material UI

**Server:** Node, Express


## Installation

Install my-project with npm

```bash
  npm install Saas
  cd Saas
```
    
## Features

- Responsive
- Live previews
- Fullscreen mode
- Cross platform




## Running backend

To run tests, run the following command

```bash
  http://localhost:4000/api/v1/query/post-query
  http://localhost:4000/api/v1/user/register
```


## Screenshots
This is the first route for registering of an user 
![backend1](https://github.com/AryanSingh21/Xenonstack/assets/91134328/b36c9de4-f895-4446-a6c5-97e41756407f)

Now similarly we have established all the routes in the backend for register login and contact pages.
![backend2](https://github.com/AryanSingh21/Xenonstack/assets/91134328/f8aa5205-7782-4f15-984c-9c59f113ac84)

Now after establishing and testing all those routes in postman

we will move towards Frontend

## Pages

* Layout
* Header
* App (Landing page)
* login
* register
* contact

## Layout

```bash
  const Layout = () => {
  return (
    <>
      <Header />
      <div
        className="App"
        style={{
          background: "linear-gradient(to right, #526D82, #27374D)",
          height: "auto",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};
  
```
![frontend1](https://github.com/AryanSingh21/Xenonstack/assets/91134328/d0d68be4-2eb9-4d6b-a237-16f69fba3ed3)

Now similarly we have used Material UI for the Frontend part of each pages

```bash
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.14.18",
    "@mui/material": "^5.14.18",
    "@mui/styles": "^5.14.18",
    "@reduxjs/toolkit": "^1.9.7",
  
```

Then for maintaining our state we have used reduxjs

## Create Store

```bash

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userReducer";
import { queryReducer } from "./reducer/queryReducer";
const reducer = combineReducers({
  user: userReducer,
  query: queryReducer,
  // blogs: blogReducer,
});
const initialState = {};
const store = configureStore({
  reducer: reducer,
  initialState,
});

export default store;


```

## useSelector and useDispatch

```bash

import { useDispatch, useSelector } from "react-redux";

```


## Usage of Redux tool for States
![reduxtool](https://github.com/AryanSingh21/Xenonstack/assets/91134328/1bdbb8c7-b1da-4d52-a41d-3f3ccce27373)


here we have used redux tool for maintaining and debugging of the states in the App






## Feedback

If you have any feedback, please reach out to us at aryansingh1102@gmail.com




## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2

