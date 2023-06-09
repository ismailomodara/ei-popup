# Ei Popup

This web application allows users to create and customize popups that are easily embeddable on any website.

![alt text](public/unfurl.png)

## Project Folder Structure
The project consists of two main folders as common to project built with Vue, `public` and `src` folders.

`public` directory houses all static assets

`src` contains several directory structure to contain files/subdirectories specific to the naming.

`assets` contains application image, styles and icons

`components` contains application components group into application context subdirectories (App, Popups).

`layouts` contains different layouts used for different pages.

`pages` contains all pages including app specific pages and general pages.

`router` contains file that defines our application routes.

`store` contains file that defines our application state.

`App.vue` The Vue component where our app is built

## Local Development Setup

1. Clone the repository.
   ```bash 
      git clone https://github.com/ismailomodara/ei-popup
   ```
2. Run command to install all required dependencies.
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3. Start up development server
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
4. Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.
