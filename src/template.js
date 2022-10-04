//const Intern = require("../lib/Intern");

const  generateTeamProfile = (team) => {
  const teamMembers = [];
  
  const generateManager = manager => {
	  return `
    <div class="card mb-3 p-3">
      <div class="card-header text-white bg-primary">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3><i class="fa-sharp fa-solid fa-briefcase"></i> ${manager.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> ID: ${manager.getId()}</li>
          <li class="list-group-item"> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item"> Office number: ${manager.office}</li>
        </ul>
      </div>
    </div>
    `
    ;}
  teamMembers.push(team
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => generateManager(manager))
    );

  const generateEngineer = engineer => {
    return `
    <div class="card mb-3 p-3">
      <div class="card-header text-white bg-success">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fa-solid fa-desktop"></i> ${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> ID: ${engineer.getId()}</li>
          <li class="list-group-item"> Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item"> GitHub: <a target="_blank" href="https://github.com/${engineer.github}"> ${engineer.github}</a></li>
        </ul>
      </div>
    </div>
    `
    ;}
    teamMembers.push(team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => generateEngineer(engineer))
        .join("")
        );

  const generateIntern = intern => {
    return `
    <div class="card mb-3 p-3">
      <div class="card-header text-white bg-info">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fa-solid fa-graduation-cap"></i> ${intern.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> ID: ${intern.getId()}</li>
          <li class="list-group-item"> Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item"> School: ${intern.school}</li>
        </ul>
      </div>
    </div>

  `
  ;}
  teamMembers.push(team
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => generateIntern(intern))
    .join("")
    );

    console.log(team);
    return teamMembers.join('');
};

//Create the profiles section
const profileTemplate = (team) => {

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Edu+SA+Beginner&family=Montserrat:wght@300&family=Roboto:wght@100&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/e6d52879b7.js" crossorigin="anonymous"></script>
</head>

<body>
  <header>
    <div class="d-flex justify-content-center py-3 bg-danger text-white">
      <h1 class="page-title">Team Profile</h1>
    </div>
  </header>

  <main>
    <div class="container d-flex justify-content-center py-5">
      <div class="row row-cols1 row-cols-3 mb-3 d-flex justify-content-center text-center" id="employeeBoxes">
        ${generateTeamProfile(team)}
      </div>
    </div>
  </main>
    
</body>
</html>
  `
}

module.exports = profileTemplate;
