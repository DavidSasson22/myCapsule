//Return array with capsole data
async function getConsoleData () {
  const src = `https://appleseed-wa.herokuapp.com/api/users/`;
  try {
    const getdata = await fetch(src);
    const consoleData = await getdata.json();
    return (consoleData);
  }
  catch (err) {
    console.error(err);
  };
};

//Return an object with data of specific student
async function getStudentData (id) {
  const src = `https://appleseed-wa.herokuapp.com/api/users/${id}`;
  try {
    const getdata = await fetch(src);
    const studentData = await getdata.json();
    return (studentData);
  }
  catch (err) {
    console.error(err);
  };
};

//Creat Student class objects and enter it to new Capsule Object
async function studentMaker (consoleData) {
  const myCapsule = new Capsule;

  for (let i = 0; i < consoleData.length; i ++) {
    let studentID = consoleData[i].id;
    let studentExtraData = await getStudentData(studentID);
    let student = new Student(studentID, consoleData[i].firstName.toLowerCase(), consoleData[i].lastName.toLowerCase(), consoleData[i].capsule, studentExtraData.age, studentExtraData.city.toLowerCase(), studentExtraData.gender.toLowerCase(), studentExtraData.hobby.toLowerCase());
    myCapsule.create(student);
  };
  return myCapsule 
};


async function main () {
  console.log(`MAIN CALLED`);
  const consoleData = await getConsoleData();
  const myCapsule = await studentMaker(consoleData);
  console.log(`main: ${typeof(myCapsule)}`);
  localStorage.setItem("myGroup", JSON.stringify(myCapsule));
  return myCapsule
}
