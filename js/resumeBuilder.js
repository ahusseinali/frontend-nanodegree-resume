var bio = {
    "name": "Ahmed Ali",
    "role": "Software Engineer",
    "contactInfo": {
        "gmail": "a.husseinzaki@gmail.com",
        "hotmail": "a.husseinzaki@hotmail.com",
        "github": "https://github.com/ahusseinali",
        "mobile": "+1(425)615-5422"
    },
    "pictureUrl": "https://avatars0.githubusercontent.com/u/9116873?v=3&s=460",
    "welcomeMessage": "Welcome to my personal resume page.",
    "skills": ["Software Development", "Software Design", "Web Development",
        "RESTful services", ".NET", "Java", "HTML", "CSS", "JavaScript",
        "Bootstrap", "KnockoutJS"]
};

var work = {};
work.position = "Software Engineer";
work.employer = "Microsoft Corp.";
work.years = "2.5 years";
work.city = "Redmond, WA, USA";

var dataReplace = "%data%";
$("#header").prepend(HTMLheaderRole.replace(dataReplace, bio.role));
$("#header").prepend(HTMLheaderName.replace(dataReplace, bio.name));
$("#header").prepend(HTMLbioPic.replace(dataReplace, bio.pictureUrl));
$("#topContacts").append(HTMLmobile.replace(dataReplace, bio.contactInfo.mobile));
$("#topContacts").append(HTMLemail.replace(dataReplace, bio.contactInfo.gmail));
$("#topContacts").append(HTMLemail.replace(dataReplace, bio.contactInfo.hotmail));
$("#topContacts").append(HTMLgithub.replace(dataReplace, bio.contactInfo.github));
$("#header").append(HTMLwelcomeMsg.replace(dataReplace, bio.welcomeMessage));
$("#header").append(HTMLskillsStart);
$("#skills").append(HTMLskills.replace(dataReplace, bio.skills.join(", ")));

$("#workExperience").append(HTMLworkStart);
var htmlWorkSelector = $(".work-entry").last();
htmlWorkSelector.append(HTMLworkEmployer.replace(dataReplace, work.employer) +
    HTMLworkTitle.replace(dataReplace, work.position));
htmlWorkSelector.append(HTMLworkDates.replace(dataReplace, work.years));
htmlWorkSelector.append(HTMLworkLocation.replace(dataReplace, work.city));

