1. What problem does the context API help solve?

** It allows a developer to avoid prop drilling.  This way you can manage your state easier.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

** actions are an object, the object is related to the actions that are taking place in the app.  A reducer is a function applies the action and updates the state. A store is a ceneralized location for reducers and states to allow us to remove the state management from the app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

** application state is when a state lives in the top most level and needs to be used by most if not all of the app.  Component stat is when state lives in an individual component and doesn't need to be used by other components in the app, except that component's children. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

*** redux-thunk is a function that returns a function, it allows us to call a function indirectly by passing it through the middleware first.  It doesn't change our action-creators just how it's being passed to the app.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

***complex api, because this is where is got more simple before it got hard again.
