class Student {
  constructor(id, firstName, lastName, capsule, age, city, gender, hobby) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.capsule = capsule;
    this.age = age;
    this.city = city;
    this.gender = gender;
    this.hobby = hobby;
  };
};


class Capsule {
  static counter = 0;
  
  constructor() {
    this.all = [];
    this.byFirstName = {};
    this.byLastName = {};
    this.byCapsule = {};
    this.byAge = {};
    this.byCity = {};
    this.byGender = {};
    this.byHobby = {};
  };

  //Here I crete several Objects/ Dictionaries, who are pointing to the correct objects stored in this.all

  create(student) {
    this.all.push(student);

    //Create Object of students with FirstName as a key
    if (student.firstName in this.byFirstName) {
      this.byFirstName[student.firstName].push(this.all[Capsule.counter])
    }
    else {
      this.byFirstName[student.firstName] = [this.all[Capsule.counter]];
    };

    //Create Object of students with LastName as a key
    if (student.lastName in this.byLastName) {
      this.byLastName[student.lastName].push(this.all[Capsule.counter])
    }
    else {
      this.byLastName[student.lastName] = [this.all[Capsule.counter]];
    };

    //Create Object of students with Age as a key
    if (student.age in this.byAge) {
      this.byAge[student.age].push(this.all[Capsule.counter])
    }
    else {
      this.byAge[student.age] = [this.all[Capsule.counter]];
    };

    //Create Object of students with Capsule as a key
    if (student.capsule in this.byCapsule) {
      this.byCapsule[student.capsule].push(this.all[Capsule.counter])
    }
    else {
      this.byCapsule[student.capsule] = [this.all[Capsule.counter]];
    };

    //Create Object of students with CityName as a key
    if (student.city in this.byCity) {
      this.byCity[student.city].push(this.all[Capsule.counter])
    }
    else {
      this.byCity[student.city] = [this.all[Capsule.counter]];
    };

    //Create Object of students with Gender as a key
    if (student.gender in this.byGender) {
      this.byGender[student.gender].push(this.all[Capsule.counter])
    }
    else {
      this.byGender[student.gender] = [this.all[Capsule.counter]];
    };

    //Create Object of students with Hobby as a key
    if (student.hobby in this.byHobby) {
      this.byHobby[student.hobby].push(this.all[Capsule.counter])
    }
    else {
      this.byHobby[student.hobby] = [this.all[Capsule.counter]];
    };
    Capsule.counter += 1;
  };

  //This methods for effective search
  searchByFirstName (name) {
    if (this.byFirstName.hasOwnProperty(name)) {
      console.log(`true`);
      return this.byFirstName[name];
    }
    else {
      console.log(`false`);
      alert(`There is no student called ${name}`);
    }
  } 
  searchByLastName (name) {
    if (this.byLastName.hasOwnProperty(name)) {
      console.log(`true`);
      return this.byLastName[name];
    }
    else {
      console.log(`false`);
      alert(`There is no student with famely name ${name}`);
    }
  } 
  searchByCapsule (num) {
    if (this.byCapsule.hasOwnProperty(num)) {
      console.log(`true`);
      return this.byCapsule[num];
    }
    else {
      console.log(`false`);
      alert(`There is no ${num} capsule`);
    }
  } 
  searchByAge (age) {
    if (this.byAge.hasOwnProperty(age)) {
      console.log(`true`);
      return this.byAge[age];
    }
    else {
      console.log(`false`);
      alert(`There are no students ${age} years old`);
    }
  } 
  searchByCity (city) {
    if (this.byCity.hasOwnProperty(city)) {
      console.log(`true`);
      return this.byCity[city];
    }
    else {
      console.log(`false`);
      alert(`There are no students in ${city}`);
    }
  } 
  searchByGender (gen) {
    if (this.byGender.hasOwnProperty(gen)) {
      console.log(`true`);
      return this.byGender[gen];
    }
    else {
      console.log(`false`);
      alert(`There are no ${gen} students`);
    }
  }
  searchByHobby (hob) {
    if (this.byHobby.hasOwnProperty(hob)) {
      console.log(`true`);
      return this.byHobby[hob];
    }
    else {
      console.log(`false`);
      alert(`There are no students like ${hob}`);
    }
  }  
}