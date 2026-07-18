// //  alert("DAENERYS is Ineviteble")
// console.log("Hello");
//  Data= {
// "name" : "John",
// "Gender" : "Male"

// }
var user= [
    {
        "name" : "John Doe",
        "gender" : "Male",
        "image" : "john.png"
    },
    {
        "name" : "Jane Doe",
        "gender" : "Female",
        "image" : "jane.png"
    }
]
var id=0;

function toggleuser(){
    id=(id+1)%2;
    var username=document.getElementById("user-name");
    username.innerHTML=user[id].name;
    var usergender=document.getElementById("user-gender");
    usergender.innerHTML=user[id].gender;
    var userimage=document.getElementById("user-image");
    userimage.src=user[id].image;
}
function randomuser(){
    fetch("https://randomuser.me/api/")
        .then(function(response){
            return response.json()
        })
        .then(function(data)
    {
        var userData =  data.results[0];

        //image
        var userimage=userData.picture.large;
        document.getElementById("user-image").src=userimage;

        //name
        var username=userData.name.first + " " + userData.name.last;
        document.getElementById("user-name").innerHTML = username;

        //gender
        var usergender=userGender=userData.gender;
        document.getElementById("user-gender").innerHTML=usergender;
        })
        
}