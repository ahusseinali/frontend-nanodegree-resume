var dataTemplate = '%data%';

var bio = {
    'name': 'Ahmed Ali',
    'role': 'Software Engineer',
    'contacts': {
        'mobile': '+1(425)615-5422',
        'email': 'a.husseinzaki@gmail.com',
        'github': 'https://github.com/ahusseinali',
        'twitter': '@ahusseinzaki',
        'location': 'Redmond, WA, USA'
    },
    'welcomeMessage': 'Welcome to my personal resume page.',
    'skills': ['Software Development', 'Software Design', 'Web Development',
        'RESTful services', '.NET', 'Java', 'HTML', 'CSS', 'JavaScript',
        'Bootstrap', 'KnockoutJS'],
    'biopic': 'images/ahmed.jpg',
    'display': function() {
        $('#header').prepend(HTMLheaderRole.replace(dataTemplate, this.role));
        $('#header').prepend(HTMLheaderName.replace(dataTemplate, this.name));
        $('#header').append(HTMLbioPic.replace(dataTemplate, this.biopic));
        $('#topContacts').append(HTMLmobile.replace(dataTemplate, this.contacts.mobile));
        $('#topContacts').append(HTMLemail.replace(dataTemplate, this.contacts.email));
        $('#topContacts').append(HTMLgithub.replace(dataTemplate, this.contacts.github));
        $('#topContacts').append(HTMLtwitter.replace(dataTemplate, this.contacts.twitter));
        $('#topContacts').append(HTMLlocation.replace(dataTemplate, this.contacts.location));
        $('#header').append(HTMLwelcomeMsg.replace(dataTemplate, this.welcomeMessage));
        if(this.hasOwnProperty('skills')) {
            $('#header').append(HTMLskillsStart);
            this.skills.forEach(function(skill) {
                $('#skills').append(HTMLskills.replace(dataTemplate, skill));
            });
        }
    }
};

var work = {
    'jobs': [{
        'title': 'Software Engineer',
        'employer': 'Microsoft Corp.',
        'dates': 'October 2013 - present',
        'location': 'Redmond, WA, USA',
        'description': 'I am a Software Engineer at Microsoft. I work on the services side in ' +
            'Bing Online Advertising. I am responsible for improving and maintaining offline pipeline ' +
            'services that extract features from raw BI logs to help with predicting click probability ' +
            'on user queries. My role extensively uses .Net framework along with internal frameworks ' +
            'and tools to handle Big Data management and job scheduling. I work on performance, ' +
            'scale and validation problems to maintain SLA with the increasing scale of data.'
    },{
        'title': 'Software Development Contestant',
        'employer': 'Freelance at TopCoder (http://www.topcoder.com)',
        'dates': 'April 2012 - September 2013',
        'location': 'Ismailia, Egypt',
        'description': 'I participated and won at several development contests that were held by ' +
            'TopCoder community. My Profile (https://www.topcoder.com/members/DrAhmed) has a detailed ' +
            'description of all the projects I participated in. I used ASP.NET MVC 3.0, C#.NET 4.0, WCF, ' +
            'Html, jQuery, IBM Lotus Notes, MS Access 2007 with VBA, SQL Server 2008 and Linux Shell script ' +
            'in most of the contests.'
    },{
        'title': 'Teaching Assistant',
        'employer': 'Faculty of Engineering, Cairo University',
        'dates': 'March 2011 - September 2013',
        'location': 'Giza, Egypt',
        'description': 'I Worked as a teaching assistant giving lab sessions and tutorials in ' +
            'some computer science concepts such as Fundamentals of operating systems, ' +
            'Distributed Operating Systems, Logic Design, Computer Networks, Computer Graphics ' +
            'and Database Administration'
    }],
    'display': function() {
        $('#workExperience').append(HTMLworkStart);
        this.jobs.forEach(function(work) {
            var workEntry = $('.work-entry').last();
            workEntry.append(HTMLworkEmployer.replace(dataTemplate, work.employer) +
                HTMLworkTitle.replace(dataTemplate, work.title));
            workEntry.append(HTMLworkDates.replace(dataTemplate, work.dates));
            workEntry.append(HTMLworkLocation.replace(dataTemplate, work.location));
            workEntry.append(HTMLworkDescription.replace(dataTemplate, work.description));
        });
    }
};

var education = {
    'schools': [{
        'name': 'Faculty of Engineering, Cairo University',
        'degree': 'BA',
        'dates': 'September 2005 - July 2010',
        'location': 'Giza, Egypt',
        'majors': ['Computer Engineering'],
        'url': 'http://eng.cu.edu.eg/en/'
    }],
    'onlineCourses': [{
        'title': 'Front-End Web Developer Nanodegree',
        'school': 'Udacity',
        'dates': 'February 2016',
        'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }],
    'display': function() {
        if(this.schools) {
            this.schools.forEach(function(school) {
                $('#education').append(HTMLschoolStart);
                var entrySelector = $('.education-entry').last();
                entrySelector.append(HTMLschoolName.replace(dataTemplate, school.name) +
                    HTMLschoolDegree.replace(dataTemplate, school.degree));
                entrySelector.append(HTMLschoolDates.replace(dataTemplate, school.dates));
                entrySelector.append(HTMLschoolLocation.replace(dataTemplate, school.location));
                school.majors.forEach(function(major) {
                    entrySelector.append(HTMLschoolMajor.replace(dataTemplate, major));
                });
            });
        }

        if(this.onlineCourses) {
            $('#education').append(HTMLonlineClasses);
            this.onlineCourses.forEach(function(course){
                $('#education').append(HTMLschoolStart);
                var entrySelector = $('.education-entry').last();
                entrySelector.append(HTMLonlineTitle.replace(dataTemplate, course.title) +
                    HTMLonlineSchool.replace(dataTemplate, course.school));
                entrySelector.append(HTMLonlineDates.replace(dataTemplate, course.dates));
                entrySelector.append(HTMLonlineURL.replace(dataTemplate, course.url));
            });
        }
    }
};

var projects = {
    'data': [{
        'title': 'Microsoft GigJam',
        'dates': 'Novemer 2014 to September 2015',
        'description': 'Microsoft GigJam is a cross platform app that improves the sharing experience.\n' +
            'The app has gadgets that you can add, edit and share with others in an online session or ' +
            'in an offline mode. Editing the gadgets can be collaborative. That means changes appear ' +
            'in real time at all the session users screen.\nEven better, GigJam allows cutomized sharing of' +
            'gadgets for different users. That means every session can contain different gadgets and they can all ' +
            'be open simultaneously.\nThis tremendously improves business productivity.',
        'images': ['images/gigjam.png']
    }],
    'display': function() {
        this.data.forEach(function(project) {
            $('#projects').append(HTMLprojectStart);
            var entrySelector = $('.project-entry').last();
            entrySelector.append(HTMLprojectTitle.replace(dataTemplate, project.title));
            entrySelector.append(HTMLprojectDates.replace(dataTemplate, project.dates));
            entrySelector.append(HTMLprojectDescription.replace(dataTemplate, project.description));
            project.images.forEach(function(image) {
                entrySelector.append(HTMLprojectImage.replace(dataTemplate, image));
            });
        });
    }
}

// Display all resume sections
bio.display();
work.display();
education.display();
projects.display();

// Display map
$('#mapDiv').append(googleMap);
// Display Internationalize button
$('#header').append(internationalizeButton);

function inName() {
    var cur = $('#name').text().trim();
    var tokens = cur.split(' ');
    tokens[0] = tokens[0][0] + tokens[0].slice(1);
    tokens[1] = tokens[1].toUpperCase();
    cur = tokens.join(' ');
    $('#name').text(cur);
}