// psuedo code


// i want the text areas value to be assigned to a variable 

// use that variable and have it saved to local storage once the save button is clicked







// grabbing the DOM elements using jquery . grabbed the save btn class 

var saveButton = $(".saveBtn").on("click", saveFunction); // using jquery for add event listener to listen for a click then run save function .







// save function that captures the value of textarea 
function saveFunction() {

    var taskHourEl = $("#task-hour").val();
    console.log(taskHourEl);

    var innerText = $(this).text();
    console.log(innerText)
}






// add a moment js to tell what todays date is add it along with the current time in html .

//add a function that loads on page load grabbing todays date and adding it to the text content .








// taskHourEl.on("click", () => {
//     console.log($(this))
// })





// if(taskHourEl != ""){
//     alert(taskHourEl);
// }
//
 
// if($("#YourTextAreaID").val().trim().length < 1)
// {
//     alert("Please Enter Text...");
//     return; 
// }