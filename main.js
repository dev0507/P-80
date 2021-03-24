name_of_the_student_array = [] ;
function submit(){
    var display_student_array = [] ;
    for(var j=1; j <=4 ; j++) {
        var name_of_the_student = document.getElementById("student"+j).value ;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }
 console.log(name_of_the_student_array);
 var length = name_of_the_student_array.length;
 console.log();
 for (var a=0;  a < length; a++){
     display_student_array.push("<h4>name-"+ name_of_the_student_array[a]+"</h4>") ;

 }
 document.getElementById("Display_Name_with_comma").innerHTML=display_student_array ;
 var with_comma = display_student_array.join ( " " ) ;
 document.getElementById("Display_Name_with_comma").innerHTML=with_comma ;
}