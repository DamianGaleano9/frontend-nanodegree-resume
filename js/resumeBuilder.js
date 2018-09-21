// $("#main").append("Damian Galeano");

//var awesomeThougs = "I'm Damian and I am AWESOME!";
//console.log(awesomeThougs);

//var funThougs = awesomeThougs.replace("AWESOME", "FUN");
  //  $("#main").append(funThougs);

var formattedName  = HTMLheaderName.replace("%data%", "Damian Galeano");
$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append(formattedRole);

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
  "biopic" : "images/fry.jpg"

};


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

}

var work = {
  "jobs": [
    {
      "employer" : "Planet Express",
      "title" : "Delivery Boy",
      "dates" : "Januray 3000 - Future",
      "description" : "I'm a delivery boy on my Planet"
    }, 
    {
    "employer" : "Planet Express",
      "title" : "Delivery Boy",
      "dates" : "Januray 3000 - Future",
      "description" : "I'm a delivery boy on my Planet"
    }  
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "Delivery Boy",
      "dates" : "Januray 3000 - Future",
      "description" : "I'm a delivery boy on my Planet",
      "images" : [
        "images/fry.jpg"
      ]

    }
  ]
}




if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#header").append(formattedSkill);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#header").append(formattedSkill);
}