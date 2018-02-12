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
            "id": 1,
            "name": "Software Engineering",
            "abbreviation": "SWE"
        },
        {
            "id": 2,
            "name": "Computer Science",
            "abbreviation": "CS"
        },
        // {
        //     "id": 3,
        //     "name": "Information Security Assurance",
        //     "abbreviation": "ISA"
        // },
        // {
        //     "id": 4,
        //     "name": "Information Systems",
        //     "abbreviation": "INFS"
        // }
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
            "name": "User Interface and Design",
            "code": 632,
            "subjectId": "1"
        },
        {
            "id": 2,
            "name": "Distributed Software Systems",
            "code": 621,
            "subjectId": "2"

        }
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
