// psuedo code


// i want the text areas value to be assigned to a variable 

// use that variable and have it saved to local storage once the save button is clicked



// moment js current day 




// grabbing the DOM elements using jquery . grabbed the save btn class 

var saveButton = $(".saveBtn").on("click", saveFunction); // using jquery for add event listener to listen for a click then run save function .

var textArea = $("#task-hour");





// save function that captures the value of textarea 
function saveFunction(e) {

    e.preventDefault();

    var taskHourEl = $("#task-hour").val();
    console.log(taskHourEl);

    // var innerText = $(this).text();
    // console.log(innerText)

    
    localStorage.setItem("textarea", JSON.stringify(taskHourEl));
    

    


}




// saving data to local storage 

function saveText() {

    

}



// add a moment js to tell what todays date is add it along with the current time in html .

//add a function that loads on page load grabbing todays date and adding it to the text content .


function currentTimes(){

    var momentDay = moment().format("ddd, hA");
    var dayEl = $("p#currentDay").html(momentDay);











    if(moment().isAfter(dayEl)){
        textArea.addClass("list-group-item-danger");
    }



    // console.log(dayEl.text);

    // var currentMoment = moment().format("ddd, hA");

    // var currentDay = $("#currentDay").innerText[currentMoment];
    
    


}

currentTimes();



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