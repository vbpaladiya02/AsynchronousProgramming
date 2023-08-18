// Simulating asynchronous operations with Promises
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = {
          1: { id: 1, name: 'Alice' },
          2: { id: 2, name: 'Bob' },
        };
        
        const user = users[userId];
        
        if (user) {
          resolve(user);
        } else {
          reject(new Error('User not found'));
        }
      }, 1000); // Simulating a 1-second delay
    });
  }
  
  // Using async/await to work with asynchronous code
  async function getUserData(userId) {
    try {
      const user = await fetchUserData(userId)
      console.log('User data:', user);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Calling the async function
  getUserData(1);
  getUserData(3); // This will trigger an error
  