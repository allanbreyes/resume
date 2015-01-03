var appendObjectProperties = function(object, location, formatter, propertyPlaceholder, valuePlaceholder) {
  for (var property in object) {
    var value = object[property];
    var data = formatter.replace(propertyPlaceholder, property)
                        .replace(valuePlaceholder, value);
    $(location).append(data);
  }
};

var appendListOfObjects = function(list, location, formatter, propertyPlaceholder, valuePlaceholder) {
  for (var object in list) {
  }
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
  'welcomeMessage': 'NotYetImplemented',
  'skills': ['Software Engineering', 'Web Development', 'Mechanical Engineering',
              'Product Design', 'Machine Learning', 'HTML5/CSS3', 'Ruby on Rails',
              'Python', 'Django', 'JavaScript', 'Java', 'GNU Octave', 'Linux',
              'GitHub', 'SolidWorks', 'MATLAB', 'Machining', 'Robotics', 'Leadership',
              'Project Management', 'Automation'],
  'biopic': 'https://dl.dropboxusercontent.com/u/10730795/resources/mugs/200x200.jpg',
  'display': function() {
    var name = HTMLheaderName.replace("%data%", bio.name);
    var role = HTMLheaderRole.replace("%data%", bio.role).replace('<hr/>','');

    $("#header").prepend(role)
                .prepend(name);

    appendObjectProperties(bio.contacts, '#topContacts', HTMLcontactGeneric, '%contact%', '%data%');
    $('#topContacts').children().clone().appendTo('#footerContacts');
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
    // NotYetImplemented
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

  }
};

var projects = {
  'projects': [
    {'title': 'Interactive Resume',
     'dates': '2014-2015',
     'description': 'NotYetImplemented',
     'images': [
       'http://placekitten.com/300/300',
       'http://placekitten.com/300/200',
       'http://placekitten.com/300/100'
     ]
    }
  ],
  'display': function() {

  }
};

bio.display();
education.display();
work.display();
projects.display();