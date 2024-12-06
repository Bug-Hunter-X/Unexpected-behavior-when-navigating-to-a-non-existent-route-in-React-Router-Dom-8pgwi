# Unexpected Route Behavior in React Router Dom

This repository demonstrates an unexpected behavior in React Router Dom v6 when navigating to a route that does not exist.  The `NotFound` component, intended to handle unmatched routes, does not render correctly.

## Issue Description

The application uses `react-router-dom` v6 to handle routing. When a user attempts to navigate to a route that is not defined in the `Routes` component, the `NotFound` component (or a similar component designed for handling 404 errors) should be displayed. However, in this example, the `NotFound` component does not render, resulting in unexpected behavior. 

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Navigate to any route that doesn't exist, such as `/invalid-route`.

## Expected Behavior

The `NotFound` component should render, displaying a "404 Not Found" message (or similar).

## Actual Behavior

No component is rendered when navigating to an invalid route. The screen is blank, or there is some other unexpected output.

## Solution

The solution is provided in `AppSolution.js`.