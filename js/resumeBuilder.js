var appendObjectProperties = function(object, location, formatter, propertyPlaceholder, valuePlaceholder) {
  for (var property in object) {
    var value = object[property];
    var data = formatter.replace(propertyPlaceholder, property)
                        .replace(valuePlaceholder, value);
    $(location).append(data);
  }
};

var appendListOfObjects = function(list, location, formatter, valuePlaceholder) {
  for (var key in list) {
    $(location).append(formatter.replace(valuePlaceholder, list[key]));
  }
};

var replaceData = function(data, formatter, dataPlaceholder) {
  dataPlaceholder = dataPlaceholder || '%data%';
  return formatter.replace(dataPlaceholder, data);
};

var bio = {
  'name': 'Allan Reyes',
  'role': 'Web Developer',
  'contacts': {
    'mobile': "<a href='tel:5555555555'>555.555.5555</a>",
    'email': "<a href='mailto:allan.reyes@alum.mit.edu'>allan.reyes@alum.mit.edu</a>",
    // 'linkedin': "<a href='http://goo.gl/1ZpPYZ'>allan-reyes</a>",
    'github': "<a href='http://goo.gl/ed7eMV'>allanbreyes</a>",
    'twitter': "<a href='http://goo.gl/or6dWO'>@allanbreyes</a>",
    'location': "<a href='#'>Chicago, IL</a>"
  },
  'welcomeMessage': 'Experience leading the brightest minds in engineering and the bravest souls in the military.',
  'skills': ['Software Engineering', 'Web Development', 'Mechanical Engineering',
              'Product Design', 'Machine Learning', 'HTML5/CSS3', 'Ruby on Rails',
              'Python', 'Django', 'JavaScript', 'Java', 'GNU Octave', 'Linux',
              'GitHub', 'SolidWorks', 'MATLAB', 'Machining', 'Robotics', 'Leadership',
              'Project Management', 'Automation'],
  'biopic': 'https://dl.dropboxusercontent.com/u/10730795/resources/mugs/200x200.jpg',
  'display': function() {
    var name = replaceData(bio.name, HTMLheaderName);
    var role = replaceData(bio.role, HTMLheaderRole).replace('<hr/>','');

    $('#header').prepend(role)
                .prepend(name);

    appendObjectProperties(bio.contacts, '#topContacts', HTMLcontactGeneric, '%contact%', '%data%');
    $('#topContacts').children().clone().appendTo('#footerContacts');

    $('#header').append(replaceData(bio.biopic, HTMLbioPic))
                .append(replaceData(bio.welcomeMessage, HTMLWelcomeMsg))
                .append(HTMLskillsStart);

    appendListOfObjects(bio.skills, '#skills', HTMLskills, '%data%');
  }
};

var education = {
  'schools': [
    {'name': 'Massachusetts Institute of Technology',
     'location': 'Cambridge, MA',
     'degree': 'Bachelor of Science',
     'majors': ['Mechanical Engineering'],
     'dates': 2007,
     'url': 'http://web.mit.edu'
    }
  ],
  'onlineCourses': [
    {'title': 'Front-End Nanodegree',
     'school': 'Udacity',
     'date': 2015,
     'url': 'http://www.udacity.com'
    }
  ],
  'display': function() {
    for (var i in this.schools) {
      $('#education').append(replaceData(i, HTMLschoolStart));
      var id = '#school-entry-' + i;
      var school = this.schools[i];
      $(id).append((replaceData(school.name, HTMLschoolName) + replaceData(school.degree, HTMLschoolDegree))
           .replace('#', school.url))
           .append(replaceData(school.dates, HTMLschoolDates))
           .append(replaceData(school.location, HTMLschoolLocation))
           .append(replaceData(school.majors, HTMLschoolMajor));
    }

    $('#education').append(HTMLonlineClasses);
    for (var j in this.onlineCourses) {
      $('#education').append(replaceData(i, HTMLonlineStart));
      var id = '#online-entry-' + j;
      var online = this.onlineCourses[j];
      $(id).append(replaceData(online.title, HTMLonlineTitle) + replaceData(online.school, HTMLonlineSchool))
           .append(replaceData(online.date, HTMLonlineDates))
           .append(replaceData(online.url, HTMLonlineURL).replace('#', online.url));
    }
  }
};

var work = {
  'jobs': [
    {'employer': 'United States Army',
     'title': 'Infantry Officer',
     'location': 'Fort Bragg, NC / Iraq / Afghanistan',
     'dates': '2007-2012',
     'description': 'NotYetImplemented'
    },
    {'employer': 'Compass Automation',
     'title': 'Lead Mechanical Engineer',
     'location': 'Elgin, IL',
     'dates': '2012-2014',
     'description': 'NotYetImplemented'
    }
  ],
  'display': function() {
    for (var i in this.jobs) {
      $('#workExperience').append(replaceData(i, HTMLworkStart));
      var id = '#work-entry-' + i;
      var job = this.jobs[i];
      $(id).append((replaceData(job.employer, HTMLworkEmployer) + replaceData(job.title, HTMLworkTitle))
           .replace('href="#"', ''))
           .append(replaceData(job.dates, HTMLworkDates))
           .append(replaceData(job.location, HTMLworkLocation))
           .append(replaceData(job.description, HTMLworkDescription));
    }
  }
};

var projects = {
  'projects': [
    {'title': 'Interactive Resume',
     'dates': '2014-2015',
     'description': 'Nothing here... except for some kittens from placekitten.com',
     'images': [
       'http://placekitten.com/g/300/300',
       'http://placekitten.com/g/250/300',
       'http://placekitten.com/g/350/300'
     ]
    }
  ],
  'display': function() {
    for (var i in this.projects) {
      $('#projects').append(replaceData(i, HTMLprojectStart));
      var id = '#project-entry-' + i;
      var project = this.projects[i];
      $(id).append(replaceData(project.title, HTMLprojectTitle))
           .append(replaceData(project.dates, HTMLprojectDates))
           .append(replaceData(project.description, HTMLprojectDescription));
      for (var j in project.images) {
        $(id).append(replaceData(project.images[j], HTMLprojectImage));
      }
    }
  }
};

bio.display();
education.display();
work.display();
projects.display();

$('#mapDiv').append(googleMap);


// $('#main').append(internationalizeButton);
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}