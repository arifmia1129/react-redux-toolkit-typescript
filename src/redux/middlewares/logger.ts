import { Middleware } from "@reduxjs/toolkit";

// middleware is a javascript curring function. that accept 3 parameter 1. store, next, action
const logger: Middleware = (store) => (next) => (action) => {
  console.log({
    previousState: store.getState(),
  });
  console.log({
    action,
  });
  next(action);
  console.log({
    currentState: store.getState(),
  });
};

export default logger;
