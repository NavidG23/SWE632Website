function getSubjectsForTerm(termId){
    var subjects = [];
    for(i in subjectTerm){
        if(subjectTerm[i].termId == termId){
            var subId = subjectTerm[i].subjectId
            for(j in subject){
                if(subject[j].id == subId){
                    subjects.push(subject[j]);
                }
            }
        }
    }
    return subjects;
}

function getCoursesForSubject(subjectId){
    var courses = [];
    for(i in course){
        if(course[i].subjectId == subjectId){
            courses.push(course[i]);
        }
    }
    return courses;
}

function getSectionsByCourseAndTerm(termId){
    var subjects = [];
    for(i in subjectTerm){
        if(subjectTerm[i].termId == termId){
            var subId = subjectTerm[i].subjectId
            for(j in subject){
                if(subject[j].id == subId){
                    subjects.push(subject[j]);
                }
            }
        }
    }
    return subjects;
}

/**** JSON MOCK DATA *****/

var terms = [
        {
            "id": 1,
            "name": "Spring 2018"
        },
        {
            "id": 2,
            "name": "Fall 2018"
        },
    ]

/**Json for register coursees. 
 * Could be farmed out to json file, was having issues accessing on local */
var subject = [
        {
            "id": 2,
            "name": "Computer Science",
            "abbreviation": "CS"
        },
        {
             "id": 4,
             "name": "Information Systems",
             "abbreviation": "INFS"
         },
        {
             "id": 3,
             "name": "Information Security Assurance",
             "abbreviation": "ISA"
         },
        {
            "id": 1,
            "name": "Software Engineering",
            "abbreviation": "SWE"
        },
        
        
         
    ]

var subjectTerm = [
        {
            "id": 1,
            "termId": 1,
            "subjectId": 1
        },
        {
            "id": 2,
            "termId": 2,
            "subjectId": 2
        },

    ]

var course = [
        {
            "id": 1,
            "name": "205- Software Usability Analysis and Design",
            "code": 205,
            "subjectId": "1"
        },
        {
            "id": 2,
            "name": "301- Internship Preparation",
            "code": 301,
            "subjectId": "1"

        },
        {
            "id": 3,
            "name": "401- Internship Reflection",
            "code": 401,
            "subjectId": "1"
        },
        {
            "id": 4,
            "name": "437- Software Testing and Maintenance",
            "code": 437,
            "subjectId": "1"
        },
        {
            "id": 5,
            "name": "510- Object-Oriented Programming in Java",
            "code": 510,
            "subjectId": "1"
        },
        {
            "id": 6,
            "name": "619- Object-Oriented Software Specification and Construction",
            "code": 619,
            "subjectId": "1"
        },
        {
            "id": 7,
            "name": "621- Software Modeling and Architectural Design",
            "code": 621,
            "subjectId": "1"
        },
        {
            "id": 8,
            "name": "622- Distributed Software Engineering",
            "code": 622,
            "subjectId": "1"
        },
        {
            "id": 9,
            "name": "625- Software Project Management",
            "code": 625,
            "subjectId": "1"

        },
        {
            "id": 10,
            "name": "632- User Interface and Design",
            "code": 632,
            "subjectId": "1"
        },
        {
            "id": 11,
            "name": "637- Software Testing",
            "code": 637,
            "subjectId": "1"
        },
        {
            "id": 12,
            "name": "642- Software Engineering for WWW",
            "code": 642,
            "subjectId": "1"
        },
        {
            "id": 13,
            "name": "645- Component-Based Software Development",
            "code": 645,
            "subjectId": "1"
        },
        {
            "id": 14,
            "name": "681- Secure Software Design and Programming",
            "code": 681,
            "subjectId": "1"
        },
        {
            "id": 15,
            "name": "737- Advanced Software Testing",
            "code": 737,
            "subjectId": "1"
        },
        {
            "id": 16,
            "name": "100- Principles of Computing",
            "code": 100,
            "subjectId": "2"
        },
        {
            "id": 17,
            "name": "105- Computer Ethics and Society",
            "code": 105,
            "subjectId": "2"

        },
        {
            "id": 18,
            "name": "110- Essentials of Computer Science",
            "code": 110,
            "subjectId": "2"
        },
        {
            "id": 19,
            "name": "112- Intro Computer Programming",
            "code": 112,
            "subjectId": "2"
        },
        {
            "id": 20,
            "name": "211- Object-Oriented Programming",
            "code": 211,
            "subjectId": "2"
        },
        {
            "id": 21,
            "name": "262- Intro to Low-Level Programming",
            "code": 262,
            "subjectId": "2"
        },
        {
            "id": 22,
            "name": "306- Synthetic Ethics and Law for Computer Professionals",
            "code": 306,
            "subjectId": "2"
        },
        {
            "id": 23,
            "name": "310- Data Structures",
            "code": 310,
            "subjectId": "2"
        },
        {
            "id": 24,
            "name": "321- Software Engineering",
            "code": 321,
            "subjectId": "2"

        },
        {
            "id": 25,
            "name": "325- Introduction to Game Design",
            "code": 325,
            "subjectId": "2"
        },
        {
            "id": 26,
            "name": "330- Formal Methods and Models",
            "code": 330,
            "subjectId": "2"
        },
        {
            "id": 27,
            "name": "351- Visual Computing",
            "code": 351,
            "subjectId": "2"
        },
        {
            "id": 28,
            "name": "367- Computer Systems and Programming",
            "code": 367,
            "subjectId": "2"
        },
        {
            "id": 29,
            "name": "426- Game Programming II",
            "code": 426,
            "subjectId": "2"
        },
        {
            "id": 30,
            "name": "450- Database Concepts",
            "code": 450,
            "subjectId": "2"
        },
        {
            "id": 31,
            "name": "515- Computer Organization and Operating Systems",
            "code": 515,
            "subjectId": "4"
        },
        {
            "id": 32,
            "name": "519- Program Design and Data Structures",
            "code": 519,
            "subjectId": "4"

        },
        {
            "id": 33,
            "name": "612- Principles and Practice of Communication Networks",
            "code": 612,
            "subjectId": "4"
        },
        {
            "id": 34,
            "name": "622- Information Systems Analysis and Design",
            "code": 6222,
            "subjectId": "4"
        },
        {
            "id": 35,
            "name": "774- Enterprise Architecture",
            "code": 774,
            "subjectId": "4"
        },
        {
            "id": 36,
            "name": "562- Information Security Theory and Practice",
            "code": 562,
            "subjectId": "3"
        },
        {
            "id": 37,
            "name": "564- Security Laboratory",
            "code": 564,
            "subjectId": "3"
        },
        {
            "id": 38,
            "name": "650- Security Policy",
            "code": 650,
            "subjectId": "3"
        },
        {
            "id": 39,
            "name": "656- Network Security",
            "code": 656, 
            "subjectId": "3"

        },
        {
            "id": 40,
            "name": "674- Intrusion Detection",
            "code": 674,
            "subjectId": "3"
        },
        {
            "id": 41,
            "name": "681- Secure Software Design/Programming",
            "code": 681,
            "subjectId": "3"
        },
        {
            "id": 42,
            "name": "763- Secure Protocol Analysis",
            "code": 763,
            "subjectId": "3"
        },    
    ]

var section = [
        {
            "id": 1,
            "sec": 001,
            "courseId": 1,
            "termId": 1,
            "timeslot": "4:30 - 7:10pm"
        },
        {
            "id": 2,
            "sec": 001,
            "courseId": 2,
            "termId": 1,
            "timeslot": "4:30 - 7:10pm"
        },
        {
            "id": 3,
            "sec": 001,
            "courseId": 2,
            "termId": 2,
            "timeslot": "4:30 - 7:10pm"
        }
    ]
