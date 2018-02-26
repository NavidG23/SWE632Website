$(document).ready(function(){

    for(i in subject){
        $(".subjects").append("<li class='subjectListing' value='"+ subject[i].id + "' </li><a href='#'>"+ subject[i].name +" ["+ subject[i].abbreviation + "]</a>");
    } 

    $('.subjectListing').click(function(){
        var courses = getCoursesForSubject($(this).val());
        $('#subjectSection').hide();
        $("#coursesSection").show();        
        $(".courses").empty();
        for(i in courses){
            $(".courses").append("<li class='courseListing' value='"+ courses[i].id + "' </li><a href='#'>"+ courses[i].name +"</a>");
        }          
    });
    
    $('.sectionsListing').click(function(){
        var courses = getSectionsByCourseAndTerm($(this).val());
        $('#subjectSection').hide();
        $("#coursesSection").show();   
        $("#coursesSelectionSection").show();
        $(".courses").empty();
        for(i in courses){
            $(".courses").append("<li class='sectionsListing' value='"+ section[i].id + "' </li><a href='#'>"+ section[i].timeslot +"</a>");
        }          
    });

    $('#backToSubjects').click(function(){
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
    var items = $('li');
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