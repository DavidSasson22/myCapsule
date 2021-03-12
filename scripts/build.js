async function getFromLocal() {
  let myCapsule = new Capsule;
  const myGroup = localStorage.getItem("myGroup");
  if (myGroup !== null) {
    myCapsule = new Capsule;
    const myCapsule0 = JSON.parse(myGroup);
    for (student of myCapsule0.all) {
      myCapsule.create(student);
    }
  }
  else {
    myCapsule = main();
  }
  console.log(myCapsule)
  console.log(`getFromLocal: ${typeof (myCapsule)}`);
  return myCapsule
};


async function buildPage(myCapsule) {
  console.log(`buildPage called`);
  const table = document.querySelector(".myTable");
  table.innerHTML = `<tr>
  <th>id</th>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Age</th>
  <th>Capsule</th>
  <th>City</th>
  <th>Gender</th>
  <th>Hobby</th>
  <th>
  </th>
</tr>`;
  for (let i = 0; i < myCapsule.all.length; i++) {

    let row = document.createElement('tr');
    let id = document.createElement('td');
    let idT = document.createTextNode(`${myCapsule.all[i].id}`);
    id.appendChild(idT);
    row.appendChild(id);

    let name = document.createElement('td');
    let nameT = document.createTextNode(`${myCapsule.all[i].firstName}`);
    name.appendChild(nameT);
    row.appendChild(name);

    let lastName = document.createElement('td');
    let lastT = document.createTextNode(`${myCapsule.all[i].lastName}`);
    lastName.appendChild(lastT);
    row.appendChild(lastName);

    let age = document.createElement('td');
    let ageT = document.createTextNode(`${myCapsule.all[i].age}`);
    age.appendChild(ageT);
    row.appendChild(age);

    let capsule = document.createElement('td');
    let capsuleT = document.createTextNode(`${myCapsule.all[i].capsule}`);
    capsule.appendChild(capsuleT);
    row.appendChild(capsule);

    let city = document.createElement('td');
    let cityT = document.createTextNode(`${myCapsule.all[i].city}`);
    city.appendChild(cityT);
    row.appendChild(city);

    let gender = document.createElement('td');
    let genderT = document.createTextNode(`${myCapsule.all[i].gender}`);
    gender.appendChild(genderT);
    row.appendChild(gender);

    let hobby = document.createElement('td');
    let hobbyT = document.createTextNode(`${myCapsule.all[i].hobby}`);
    hobby.appendChild(hobbyT);
    row.appendChild(hobby);

    let trash = document.createElement('td');
    let trashB = document.createElement('button');
    trashB.setAttribute("class", "styless");
    let trashI = document.createElement('img');
    trashI.setAttribute("class", `trash`);
    trashI.setAttribute("src", `./fonts/trash-alt-regular.svg`);

    trash.appendChild(trashB);
    trashB.appendChild(trashI);
    row.appendChild(trash);

    table.appendChild(row);
  }
}


async function buildByParameter(arr) {
  console.log(`buildByParameter`);
  const table = document.querySelector(".myTable");

  if (arr) {
    table.innerHTML = `<tr>
    <th>id</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Age</th>
    <th>Capsule</th>
    <th>City</th>
    <th>Gender</th>
    <th>Hobby</th>
    <th>
    </th>
  </tr>`;
    for (let i = 0; i < arr.length; i++) {
      let row = document.createElement('tr');
      let id = document.createElement('td');
      let idT = document.createTextNode(`${arr[i].id}`);
      id.appendChild(idT);
      row.appendChild(id);

      let name = document.createElement('td');
      let nameT = document.createTextNode(`${arr[i].firstName}`);
      name.appendChild(nameT);
      row.appendChild(name);

      let lastName = document.createElement('td');
      let lastT = document.createTextNode(`${arr[i].lastName}`);
      lastName.appendChild(lastT);
      row.appendChild(lastName);

      let age = document.createElement('td');
      let ageT = document.createTextNode(`${arr[i].age}`);
      age.appendChild(ageT);
      row.appendChild(age);

      let capsule = document.createElement('td');
      let capsuleT = document.createTextNode(`${arr[i].capsule}`);
      capsule.appendChild(capsuleT);
      row.appendChild(capsule);

      let city = document.createElement('td');
      let cityT = document.createTextNode(`${arr[i].city}`);
      city.appendChild(cityT);
      row.appendChild(city);

      let gender = document.createElement('td');
      let genderT = document.createTextNode(`${arr[i].gender}`);
      gender.appendChild(genderT);
      row.appendChild(gender);

      let hobby = document.createElement('td');
      let hobbyT = document.createTextNode(`${arr[i].hobby}`);
      hobby.appendChild(hobbyT);
      row.appendChild(hobby);

      let trash = document.createElement('td');
      let trashB = document.createElement('button');
      trashB.setAttribute("class", "styless");
      let trashI = document.createElement('img');
      trashI.setAttribute("class", `trash`);
      trashI.setAttribute("src", `./fonts/trash-alt-regular.svg`);

      trash.appendChild(trashB);
      trashB.appendChild(trashI);
      row.appendChild(trash);

      table.appendChild(row);
    }
  }
}



async function build() {
  console.log(`build called`);
  const myCapsule = await getFromLocal();
  buildPage(myCapsule);

  const allCities = [];
  const allHobies = [];

  const reset = document.querySelector(`#reset`);

  const byFirstIn = document.querySelector(`#byFirst`);
  const firstB = document.querySelector(`#firsBut`);

  const byLast = document.querySelector(`#byLast`);
  const lastB = document.querySelector(`#lastBut`);

  const byAge = document.querySelector(`#byAge`);
  const ageB = document.querySelector(`#ageBut`);

  const byCapsule = document.querySelector(`#byCapsule`);
  const capsuleB = document.querySelector(`#capsuleBut`);

  const byCity = document.querySelector(`#byCity`);
  const cityB = document.querySelector(`#cityBut`);

  const byGender = document.querySelector(`#byGender`);
  const genderB = document.querySelector(`#genderBut`);

  const byHobby = document.querySelector(`#byHobby`);
  const hobbyB = document.querySelector(`#hobbyBut`);


  for (key in myCapsule.byCity) {
    allCities.push(key);
  }
  allCities.sort();
  allCities.forEach(city => {
    let option = document.createElement(`option`);
    option.setAttribute(`value`, city);
    option.innerText = city;
    byCity.appendChild(option);
  })


  for (key in myCapsule.byHobby) {
    allHobies.push(key);
  }
  allHobies.sort();
  allHobies.forEach(hobby => {
    let option = document.createElement(`option`);
    option.setAttribute(`value`, hobby);
    option.innerText = hobby;
    byHobby.appendChild(option);
  })

  reset.addEventListener("click", () => buildPage(myCapsule));


  firstB.addEventListener("click", () => {
    buildByParameter(myCapsule.searchByFirstName(byFirstIn.value.toLowerCase()));
  });
  byFirstIn.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      buildByParameter(myCapsule.searchByFirstName(byFirstIn.value.toLowerCase()));
    };
  });


  lastB.addEventListener("click", () => {
    buildByParameter(myCapsule.searchByLastName(byLast.value.toLowerCase()));
  });
  byLast.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      buildByParameter(myCapsule.searchByLastName(byLast.value.toLowerCase()));
    };
  });

  ageB.addEventListener("click", () => {
    buildByParameter(myCapsule.searchByAge(byAge.value));
  });
  byAge.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      buildByParameter(myCapsule.searchByAge(byAge.value));
    };
  });


  capsuleB.addEventListener("click", () => {
    buildByParameter(myCapsule.searchByCapsule(byCapsule.value));
  });
  byCapsule.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      buildByParameter(myCapsule.searchByCapsule(byCapsule.value));
    };
  });


  cityB.addEventListener("click", () => {
    buildByParameter(myCapsule.searchByCity(byCity.value));
  });
  byCity.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      buildByParameter(myCapsule.searchByCity(byCity.value));
    };
  });


  genderB.addEventListener("click", () => {
    buildByParameter(myCapsule.searchByGender(byGender.value));
  });
  byGender.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      buildByParameter(myCapsule.searchByGender(byGender.value));
    };
  });

  hobbyB.addEventListener("click", () => {
    buildByParameter(myCapsule.searchByHobby(byHobby.value));
  });
  byHobby.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      buildByParameter(myCapsule.searchByHobby(byHobby.value));
    };
  });
};


build();