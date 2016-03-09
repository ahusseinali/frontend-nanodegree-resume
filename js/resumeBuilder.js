var bio = {
    'name': 'Ahmed Ali',
    'role': 'Software Engineer',
    'contactInfo': {
        'gmail': 'a.husseinzaki@gmail.com',
        'hotmail': 'a.husseinzaki@hotmail.com',
        'github': 'https://github.com/ahusseinali',
        'mobile': '+1(425)615-5422'
    },
    'pictureUrl': 'https://avatars0.githubusercontent.com/u/9116873?v=3&s=460',
    'welcomeMessage': 'Welcome to my personal resume page.',
    'skills': ['Software Development', 'Software Design', 'Web Development',
        'RESTful services', '.NET', 'Java', 'HTML', 'CSS', 'JavaScript',
        'Bootstrap', 'KnockoutJS']
};

var work = [{
    'position': 'Software Engineer',
    'employer': 'Microsoft Corp.',
    'years': 'October 2013 - present',
    'city': 'Redmond, WA, USA',
    'description': 'I am a Software Engineer at Microsoft. I work on the services side in ' +
        'Bing Online Advertising. I am responsible for improving and maintaining offline pipeline ' +
        'services that extract features from raw BI logs to help with predicting click probability ' +
        'on user queries. My role extensively uses .Net framework along with internal frameworks ' +
        'and tools to handle Big Data management and job scheduling. I work on performance, ' +
        'scale and validation problems to maintain SLA with the increasing scale of data.'
},{
    'position': 'Software Development Contestant',
    'employer': 'Freelance at TopCoder (http://www.topcoder.com)',
    'years': 'April 2012 - September 2013',
    'city': 'Home Office',
    'description': 'I participated and won at several development contests that were held by ' +
        'TopCoder community. My Profile (https://www.topcoder.com/members/DrAhmed) has a detailed ' +
        'description of all the projects I participated in. I used ASP.NET MVC 3.0, C#.NET 4.0, WCF, ' +
        'Html, jQuery, IBM Lotus Notes, MS Access 2007 with VBA, SQL Server 2008 and Linux Shell script ' +
        'in most of the contests.'
},{
    'position': 'Teaching Assistant',
    'employer': 'Faculty of Engineering, Cairo University',
    'years': 'March 2011 - September 2013',
    'city': 'Giza, Egypt',
    'description': 'I Worked as a teaching assistant giving lab sessions and tutorials in ' +
        'some computer science concepts such as Fundamentals of operating systems, ' +
        'Distributed Operating Systems, Logic Design, Computer Networks, Computer Graphics ' +
        'and Database Administration'
}];

var education = {
    'schools': [{
        'school': 'Faculty of Engineering, Cairo University',
        'degree': 'BA',
        'years': 'September 2005 - July 2010',
        'city': 'Giza, Egypt',
        'major': 'Computer Engineering'
    }],
    'onlineCourses': [{
        'title': 'Front-End Web Developer Nanodegree',
        'school': 'Udacity',
        'dates': 'February 2016',
        'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }]
};

var projects = [{
    'title': 'Microsoft GigJam',
    'dates': 'Novemer 2014 to September 2015',
    'description': 'Microsoft GigJam is a cross platform app that improves the sharing experience.\n' +
        'The app has gadgets that you can add, edit and share with others in an online session or ' +
        'in an offline mode. Editing the gadgets can be collaborative. That means changes appear ' +
        'in real time at all the session users screen.\nEven better, GigJam allows cutomized sharing of' +
        'gadgets for different users. That means every session can contain different gadgets and they can all ' +
        'be open simultaneously.\nThis tremendously improves business productivity.',
    'image': 'https://pbs.twimg.com/profile_images/620570299772186624/0iYMfE43_400x400.png'
}]

var dataReplace = '%data%';
$('#header').prepend(HTMLheaderRole.replace(dataReplace, bio.role));
$('#header').prepend(HTMLheaderName.replace(dataReplace, bio.name));
$('#header').prepend(HTMLbioPic.replace(dataReplace, bio.pictureUrl));
$('#topContacts').append(HTMLmobile.replace(dataReplace, bio.contactInfo.mobile));
$('#topContacts').append(HTMLemail.replace(dataReplace, bio.contactInfo.gmail));
$('#topContacts').append(HTMLemail.replace(dataReplace, bio.contactInfo.hotmail));
$('#topContacts').append(HTMLgithub.replace(dataReplace, bio.contactInfo.github));
$('#header').append(HTMLwelcomeMsg.replace(dataReplace, bio.welcomeMessage));
if(bio.hasOwnProperty('skills')) {
    $('#header').append(HTMLskillsStart);
    $('#skills').append(HTMLskills.replace(dataReplace, bio.skills.join(', ')));
}

$('#workExperience').append(HTMLworkStart);
work.forEach(function(workObj) {
    var htmlWorkSelector = $('.work-entry').last();
    htmlWorkSelector.append(HTMLworkEmployer.replace(dataReplace, workObj.employer) +
        HTMLworkTitle.replace(dataReplace, workObj.position));
    htmlWorkSelector.append(HTMLworkDates.replace(dataReplace, workObj.years));
    htmlWorkSelector.append(HTMLworkLocation.replace(dataReplace, workObj.city));
    htmlWorkSelector.append(HTMLworkDescription.replace(dataReplace, workObj.description));
});

$('#education').append(HTMLschoolStart);
var htmlSchoolSelector = $('.education-entry').last();
htmlSchoolSelector.append(HTMLschoolName.replace(dataReplace, education.schools[0].school) +
    HTMLschoolDegree.replace(dataReplace, education.schools[0].degree));
htmlSchoolSelector.append(HTMLschoolDates.replace(dataReplace, education.schools[0].years));
htmlSchoolSelector.append(HTMLschoolLocation.replace(dataReplace, education.schools[0].city));
htmlSchoolSelector.append(HTMLschoolMajor.replace(dataReplace, education.schools[0].major));