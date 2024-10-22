//setTimeout
setTimeout(() => {
    console.log("This runs after 3 seconds");
  }, 3000); // Delay in milliseconds

  
  //setInterval


  setInterval(() => {
    console.log("This runs every 2 seconds");
  }, 2000); // Interval in milliseconds

  
  // setImmediate
  setImmediate(() => {
    console.log("This runs immediately after the current event loop cycle");
  });

  
  // Clear Timers

  const timeoutId = setTimeout(() => {
    console.log("This will not run");
  }, 5000);
  
  // Cancel the timeout
  clearTimeout(timeoutId);
  
  const intervalId = setInterval(() => {
    console.log("This will also not run");
  }, 1000);
  
  // Cancel the interval
  clearInterval(intervalId);
  