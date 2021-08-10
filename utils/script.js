var taskHourEl = $("#task-hour")
var saveButton = $(".fa-save").on("click", saveFunction);

var textAreaEl = $("textarea").val();




taskHourEl.on("click", () => {
    console.log($(this))
})



function saveFunction() {
    var innerText = $(this).text();
    console.log(innerText)
}



// if(taskHourEl != ""){
//     alert(taskHourEl);
// }
//
 
// if($("#YourTextAreaID").val().trim().length < 1)
// {
//     alert("Please Enter Text...");
//     return; 
// }