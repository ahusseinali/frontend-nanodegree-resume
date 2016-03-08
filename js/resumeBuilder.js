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

var work = {
    "position": "Software Engineer",
    "employer": "Microsoft Corp.",
    "years": "2.5 years",
    "city": "Redmond, WA, USA"
};

var education = {
    "schools": [{
        "school": "Faculty of Engineering, Cairo University",
        "degree": "BA",
        "years": "5 years",
        "city": "Giza, Egypt",
        "major": "Computer Engineering"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

var projects = [{
    "title": "Microsoft GigJam",
    "dates": "Novemer 2014 to September 2015"
    "description": "Microsoft GigJam is a cross platform app that improves the sharing experience.\n" +
        "The app has gadgets that you can add, edit and share with others in an online session or " +
        "in an offline mode. Editing the gadgets can be collaborative. That means changes appear " +
        "in real time at all the session users screen.\nEven better, GigJam allows cutomized sharing of" +
        "gadgets for different users. That means every session can contain different gadgets and they can all " +
        "be open simultaneously.\nThis tremendously improves business productivity.",
    "image": "https://pbs.twimg.com/profile_images/620570299772186624/0iYMfE43_400x400.png"
}]

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

$("#education").append(HTMLschoolStart);
var htmlSchoolSelector = $(".education-entry").last();
htmlSchoolSelector.append(HTMLschoolName.replace(dataReplace, education.schools[0].school) +
    HTMLschoolDegree.replace(dataReplace, education.schools[0].degree));
htmlSchoolSelector.append(HTMLschoolDates.replace(dataReplace, education.schools[0].years));
htmlSchoolSelector.append(HTMLschoolLocation.replace(dataReplace, education.schools[0].city));
htmlSchoolSelector.append(HTMLschoolMajor.replace(dataReplace, education.schools[0].major));