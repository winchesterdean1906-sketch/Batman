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