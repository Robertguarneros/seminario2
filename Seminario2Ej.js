var arrayPromise = fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
            console.log(json);//Here we have the array of users with all of the data
            return json.map((user) => {
                  return {//Here we are returning a new object with only the id, name and email of each user with mapping
                        id: user.id,
                        name: user.name,
                        email: user.email
                  }
            });
      })
      .then(modifiedArray => {//Here we have the modified array with the new objects
            console.log(modifiedArray);
            return modifiedArray;
      });

//Now, to work with the array, you can chain more .then() methods:
arrayPromise.then(array => {
      // array represents the modified array previously returned
      // Filtering users whose last name starts with 'R'
      const filteredUsers = array.filter(user => user.name.split(' ')[1].startsWith('R'));
      console.log(filteredUsers);
      const countUsers = array => {
            return array.reduce((count) => {
                return count + 1; // Increment count for each user
            }, 0); // Initial value of count is 0
        };
        // Call the countUsers function and log the result
        const totalUsers = countUsers(array);
        console.log("Total users:", totalUsers);
});