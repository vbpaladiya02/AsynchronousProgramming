// function fetchDataFromServer(callback) {
//     setTimeout(() => {
//       const data = { id: 1, name: 'Callback Example' };
//       callback(data);
//     }, 1000); // Simulating a 1-second delay
//   }
  
//   // Callback function to process the fetched data
//   function processData(data) {
//     console.log('Data fetched:', data);
//   }
  
  // Calling the asynchronous function with a callback
//   fetchDataFromServer(processData);
//   console.log('Fetching data...');






  // Callback hell
function stepOne(callback) {
    setTimeout(() => {
      console.log('Step 1 completed');
      callback();
    }, 1000);
  }
  
  function stepTwo(callback) {
    setTimeout(() => {
      console.log('Step 2 completed');
      callback();
    }, 1000);
  }
  
  function stepThree(callback) {
    setTimeout(() => {
      console.log('Step 3 completed');
      callback();
    }, 1000);
  }
  
  function startProcess() {
    console.log('Starting process...');
    stepOne(() => {
      stepTwo(() => {
        stepThree(() => {
          console.log('Process completed');
        });
      });
    });
  }
  
  // Start the nested callback process
  startProcess();
  