# JGadget Backend Setup Guide

This guide will help you run the `server.js` backend for the JGadget website.

## Prerequisites

You need **Node.js** installed on your computer.
1.  Download it from: [https://nodejs.org/](https://nodejs.org/)
2.  Install the **LTS** version.
3.  Verify installation by opening a terminal and typing `node -v`.

## Installation

1.  Open your terminal / command prompt.
2.  Navigate to the project folder:
    ```bash
    cd c:\Users\olajuwon\Desktop\jgadget
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
    *This will download the `express` and `cors` libraries listed in `package.json`.*

## Running the Server

1.  Start the server:
    ```bash
    npm start
    ```
2.  You should see:
    ```
    JGadget Backend running at http://localhost:3000
    ```

## Using the Backend (Future Steps)

Currently, the frontend files (`index.html`, `script.js`) are configured to use a **mock database** (localStorage) so you can demo the site immediately without a server.

To switch to the real backend in the future:
1.  Open `js/script.js`.
2.  Replace the `localStorage` logic with `fetch()` calls to `http://localhost:3000/api/...`.
