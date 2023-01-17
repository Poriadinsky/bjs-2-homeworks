function compareArrays(arr1, arr2) {
   if (arr1.length !== arr2.length) {
      return false;
   }
   return arr1.every((val, index) => val === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
   const filteredUsers = users.filter(user => user.gender === gender);
   if (filteredUsers.length === 0) {
      return 0;
   }
   const ages = filteredUsers.map(user => user.age);
   const sumAges = ages.reduce((acc, age) => acc + age);
   return sumAges / ages.length;
}