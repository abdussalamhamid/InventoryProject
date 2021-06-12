var selectedInventory = {};
var date = null;

$(function(){
    getInventory();
});

// document.getElementById("myLink").click();


//Insert a new inventory
function createItem(){
    var testData = {
                    name: $("#itemName").val(), 
                    price: $("#price").val(), 
                    quantity: $("#qty").val(), 
                    register_dt: Date.now(),
                    description: $("#desc").val(),
                    }

    if(testData == ""){
        alert("Fields Cannot Be Empty");
    }

    $.ajax({
        url: "http://localhost:8080/api/item/add",
        type: "POST",
        cors: true,
        contentType: 'application/json',
        secure: true,
        headers: {
            'Access-Control-Allow-Origin' : '*',
        },
        data: JSON.stringify(testData),
        success: function(data){
            getInventory();
            
            document.getElementById('itemName').value = "";
            document.getElementById('price').value = "";
            document.getElementById('qty').value = "";
            document.getElementById('desc').value = "";
            alert("Item Added!");
        },
        error: function(req, error){
            alert(error);
        }
    })
}

//getInventory
function getInventory(){
    //alert ("Load GetInventory");
    $.ajax({
        url: "http://localhost:8080/api/item/all",
        type: "GET",
        success: function(data){
            var text = "";
            $(data).each(function(index, item){
                text += "<tr><td>"+item.id+
                "</td><td>"+item.name+
                "</td><td>"+item.price+
                "</td><td>"+item.quantity+
                "</td><td>"+generateDateString(new Date(item.register_dt))+
                "</td><td><button onclick='showDetailModal("+ item.id +");' class='buttons button1'>See Details</button>"+
                "<button onclick='deleteItem("+ item.id +");' class='buttons button2'>Delete</button></td></tr>";
            })
            $('#Inventory').html(text);
        },
        error: function(req, error){
            alert(error);
        }
    });
}

function closeDetailModal(){
    $("#orderModal").hide();
}

function showDetailModal(id){
    viewDetails(id);
    $("#orderModal").show();
}

//View Inventory Details
function viewDetails(id){
    $.ajax({
        url: "http://localhost:8080/api/item/"+id,
        type: "GET",
        success: function(data){
            var text = "";
            text += "<div style=' border-radius: 10px; background-color: lightblue; width: auto; border: 2px solid grey; padding: 3%; margin: 20px;'><p style='color:black;'><h1><b>" + data.name + "</b></h1>" + "<br>" +
            "<h2><b>RM" + data.price + "</b></h2>" + "<br>" + 
            "<h4>Quantity: " + data.quantity + "</h4>" + "<br>" +  
            "<div style='background-color: white; width: 1000px; border: 2px solid grey; padding: auto; margin: 20px;'><p style='color:black;'>" + data.description + "</p></div>" + "<br>" +
            "<p class='w3-text-grey'>"+generateDateString(new Date(data.register_dt)) + "</div>";

            $('#itemDetails').html(text);
        },
        error: function(req, error){
            var text = "";
            text += "<h1><b class='w3-text-grey'>Error! I Dunno Wtf Happen</b></h1>";
            $('#itemDetails').html(text);
        }
    });
}

//CreateFeedback
function feedback(){


    var testData = {
                    comment: $("#feed").val(), 

                    }

    if(testData == ""){
        alert("Fields Cannot Be Empty");
    } else{
        alert (testData);
    }

    $.ajax({
        url: "http://localhost:8080/api/feedback/add",
        type: "POST",
        cors: true,
        contentType: 'application/json',
        secure: true,
        headers: {
            'Access-Control-Allow-Origin' : '*',
        },
        data: JSON.stringify(testData),
        success: function(data){
            alert("Thank You for your Feedback!");
        },
        error: function(req, error){
            alert(error);
        }
    })
}


function closeFeedbackModal(){
    $("#feedbackModal").hide();
}

function showFeedbackModal(){
    viewAllFeedback();
    $("#feedbackModal").show();
}

//View Feedback
function viewAllFeedback(){
    $.ajax({
        url: "http://localhost:8080/api/",
        type: "GET",
        success: function(data){
            var text = "";
            $(data).each(function(index, item){
                text += "<p class='w3-text-grey'>" + item.comment + "</p><hr>";
            })
            $('#feedbackDiv').html(text);
        },
        error: function(req, error){
            alert(error);
        }
    });
}

function deleteItem(id){
    $.ajax({
        url: "http://localhost:8080/api/item/delete/"+id,
        type: "DELETE",
        success: function(data){
            getInventory();
            alert("successfully delete");
        },
        error: function(req, error){
            alert("Delete fail");
        }
    });
}

function generateDateString(date){
    dateString =
        ("0" + date.getDate()).slice(-2) + "/" +
        ("0" + (date.getMonth()+1)).slice(-2) + "/" +
        date.getFullYear();

    return dateString;
}