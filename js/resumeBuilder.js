// $("#main").append("Damian Galeano");

//var awesomeThougs = "I'm Damian and I am AWESOME!";
//console.log(awesomeThougs);

//var funThougs = awesomeThougs.replace("AWESOME", "FUN");
  //  $("#main").append(funThougs);

var formattedName  = HTMLheaderName.replace("%data%", "Damian Galeano");
$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append(formattedRole);