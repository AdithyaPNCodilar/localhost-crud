const keys = Object.keys(localStorage);
for (let i = 0; i < keys.length; i++) {

var userString = localStorage.getItem(keys[i]);

var user = JSON.parse(userString); //Convert the string back to an object
var new_row = document.createElement("tr")
var sn = document.createElement("td")
var uname = document.createElement("td")
var email = document.createElement("td")
var phone = document.createElement("td")
var password = document.createElement("td")
var action = document.createElement("td")

new_row.appendChild(sn)
new_row.appendChild(uname)
new_row.appendChild(email)
new_row.appendChild(phone)
new_row.appendChild(password)
new_row.appendChild(action)


var new_tableRow = document.getElementById("table")
new_tableRow.appendChild(new_row)
sn.innerHTML =i+1
uname.innerHTML= user.name //name user data
email.innerHTML =user.email
phone.innerHTML =user.phone
password.innerHTML =user.password
action.innerHTML = "<a class='btn btn-outline-success' href='update.html?id="+keys[i]+"'>Update</a><button class='btn btn-outline-danger' onclick='deleteUser()'>Delete</button>"

}
