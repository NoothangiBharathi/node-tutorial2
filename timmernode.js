// //setTimeout
// setTimeout(() => {
//     console.log("This runs after 3 seconds");
//   }, 3000); // Delay in milliseconds

  
//   //setInterval


//   setInterval(() => {
//     console.log("This runs every 2 seconds");
//   }, 2000); // Interval in milliseconds

  
//   // setImmediate
//   setImmediate(() => {
//     console.log("This runs immediately after the current event loop cycle");
//   });

  
//   // Clear Timers

//   const timeoutId = setTimeout(() => {
//     console.log("This will not run");
//   }, 5000);
  
//   // Cancel the timeout
//   clearTimeout(timeoutId);
  
//   const intervalId = setInterval(() => {
//     console.log("This will also not run");
//   }, 1000);
  
//   // Cancel the interval
//   clearInterval(intervalId);
  











// Flux Architecture


const dispatcher = new Dispatcher();

const store = {
  value: 0,
  getValue() {
    return this.value;
  },
  updateValue(newValue) {
    this.value = newValue;
  }
};

dispatcher.register((action) => {
  switch(action.type) {
    case 'UPDATE_VALUE':
      store.updateValue(action.payload);
      console.log('Store updated:', store.getValue());
      break;
    default:
      break;
  }
});

const action = { type: 'UPDATE_VALUE', payload: 10 };
dispatcher.dispatch(action);




// Redux Architecture



import { createStore } from 'redux';

// Reducer
function counter(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(counter);

// Actions
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // { count: 1 }

store.dispatch({ type: 'DECREMENT' });
console.log(store.getState()); // { count: 0 }















// Context API




import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState('Hello from Context!');
  
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue('New Value!')}>Change Value</button>
    </div>
  );
};

const App = () => (
  <MyProvider>
    <ChildComponent />
  </MyProvider>
);

export default App;










// Higher-Order Components (HOCs)


import React from 'react';

function withLogger(WrappedComponent) {
  return function(props) {
    console.log('Rendering with props:', props);
    return <WrappedComponent {...props} />;
  };
}

const Hello = (props) => <h1>Hello, {props.name}!</h1>;

const EnhancedHello = withLogger(Hello);

const App = () => <EnhancedHello name="World" />;

export default App;




// Render Props



import React, { useState } from 'react';

const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
    {render(position)}
  </div>;
};

const App = () => (
  <MouseTracker render={({ x, y }) => (
    <h1>Mouse position: {x}, {y}</h1>
  )} />
);

export default App;
