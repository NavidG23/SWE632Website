$(document).ready(function(){

    for(i in subject){
        $(".subjects").append("<li class='subjectListing searchItems' value='"+ subject[i].id + "' </li><a href='#'>"+ subject[i].name +" ["+ subject[i].abbreviation + "]</a>");
    } 

    $('.subjectListing').click(function(){
        var courses = getCoursesForSubject($(this).val());
        $('#subjectSection').hide();
        $("#coursesSection").show();        
        $(".courses").empty();
        for(i in courses){
            $(".courses").append("<li class='courseListing searchItems' value='"+ courses[i].id + "' </li><a href='#'>"+ courses[i].name +"</a>");
        }
        activeCourseListeners();          
    });

    function activeCourseListeners(){
        $('.courseListing').click(function(){
            var sections = getSectionsByCourseAndTerm(parseInt($('#term').val()), $(this).val());
            $('#subjectSection').hide();
            $("#coursesSection").show();   
            $("#coursesSelectionSection").show();
            $(".sections").empty();
            for(i in sections){
                $(".sections").append("<li class='sectionsListing' value='"+ sections[i].id + "' </li><a href='#'>"+ sections[i].timeslot +"</a>");
            }          
        });
    }

    $('#backToSubjects').click(function(){
        $('.sections').empty();
        $(".courses").empty();
        $("#coursesSection").hide();
        $('#subjectSection').show();
        $('#myInput').val('').trigger('input');        
    })

    $('#myInput').on('input', function(){
        search($(this));
    });
});

function search(obj){
    
    var filter = obj.val().toUpperCase();
    var items = $('li.searchItems');
    $.each(items, function(){
        var text = $(this).text().toUpperCase();
        if(text.indexOf(filter) > -1) {
            $(this).show();
        }else{
            $(this).hide();
        }
    });
}

// function myFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementsByClassName("searchList");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";

//         }
//     }
// }