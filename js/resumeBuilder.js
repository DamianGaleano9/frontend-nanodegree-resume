var bio = {
  "name" : "Damian Galeano",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "300-36398-69",
    "email" : "dj.damian.b@hotmail.com",
    "gitHub" : "DamianGaleano9",
    "twitter" : "DamianGaleano",
    "location" : "Medellin"
  }, 

  "WelcomeMessage" : "Hello everyBody",
  "skills" : ["Web Developer", "Dj", "Entrepreneur"],
  "bioPic" : "images/fry.jpg"

};


var name = bio.name;
formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var gitHub = bio.contacts.gitHub;
var formattedGit = HTMLgithub.replace("%data%", gitHub);
$("#topContacts").append(formattedGit);

var twitter = bio.contacts.twitter;
var formmattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formmattedTwitter);


var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);




var education  = {
  "schools" : [
    {
      "name" : "University Of Medellin",
      "location" : "Medellin, Antioquia, Col",
      "degree" : "Master",
      "major" : ["CS"],
      "dates" : "2013",
      "url" : "https://www.udem.edu.co/"
    },
    {
      "name" : "University Of Medellin",
      "location" : "Medellin, Antioquia, Col",
      "degree" : "Master",
      "major" : ["CS"],
      "dates" : "2013",
      "url" : "https://www.udem.edu.co/"
    }
  ],

  "onlineCourses" : [
    {
      "title" : "JavaScript Intro",
      "school" : "Udacity",
      "dates" : 2017,
      "url" : "https://classroom.udacity.com/courses/ud804/lessons/1930528550/concepts/19506785590923"
    }
  ]

};

var work = {
  "jobs": [
    {
      "employer" : "Planet Express",
      "title" : "Delivery Boy",
      "dates" : "Januray 3000 - Future",
      "description" : "I'm a delivery boy on my Planet, my job is to distribute pizza all over the galaxy we are planet exprees we live in the year 3000"
    }, 
    {
      "employer" : "Planet Express",
      "title" : "Delivery Boy",
      "dates" : "Januray 3000 - Future",
      "description" : "My job now in addition to distributing pizza all over the planet is to help my nephew the teacher when he has to take dangerous particles to different parts of the space"
    }  
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "atomic particle transporter",
      "dates" : "Januray 3600 - Future",
      "description" : "I'm a delivery boy on my Planet mi first, my job is to distribute pizza all over the galaxy we are planet exprees we live in the year 3000 ",
      "images" : [
        "images/fry.jpg"
      ]

    }
  ]
};




if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#header").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#header").append(formattedSkill);
}


var displayWork = function(){
  
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
  
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
  
    $(".work-entry:last").append(formattedEmployerTitle);
  
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
  
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  } 
}

displayWork();

