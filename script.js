let data = [
  { name: 'john', age: 24, profession: 'developer' },
  { name: "jane", age: 27, profession: 'admin' },
];


// 1. Print Developers
function printDeveloper() {
  const developers = data.filter(person => person.profession === 'developer');
  console.log('Developers:', developers);
}







// 2. Add Data
function addData() {

  const newData = {};
  newData.name = prompt('Enter name:');
  newData.age = parseInt(prompt('Enter age:'));
  newData.profession = prompt('Enter profession:');
  data.push(newData);
  console.log('Updated Data:', data);
}






// 3. Remove Admins
function removeAdmin() {

  const nonAdmins = data.filter(person => person.profession !== 'admin');
  data = nonAdmins;
  
  console.log('Data without Admins:', data);
}






// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: "Angel", age:29 , profession: "developer" },
    { name: "Joy", age:27 , profession: "manager" },
  ];
  const combinedArray = [...data, ...dummyArray];
  console.log('Combined Array:', combinedArray);
}





// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;
  console.log('Average Age:', average);
}






// 6. Age Check
function checkAgeAbove25() {

  const hasAgeAbove25 = data.some(person => person.age > 25);
  console.log('At least one person is older than 25:', hasAgeAbove25);
}




// 7. Unique Professions
function uniqueProfessions() {

  const professions = [...new Set(data.map(person => person.profession))];
  console.log('Distinct Professions:', professions);
}




// 8. Sort by Age
function sortByAge() {

  data.sort((a, b) => a.age - b.age);
  console.log('Sorted Data by Age:', data);
}



// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find(person => person.name === 'john');
  if (john) {
    john.profession = 'manager';
  }
  console.log('Updated Data:', data);
}






// 10. Profession Count
function getTotalProfessions() {

  let developerCount = 0;
  let adminCount = 0;


  for (const person of data) {
    if (person.profession === 'developer') {
      developerCount++;
    } else if (person.profession === 'admin') {
      adminCount++;
    }
  }

  console.log('Total Developers:', developerCount);
  console.log('Total Admins:', adminCount);
}



