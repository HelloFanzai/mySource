var mystudents = myjson.students;
var mydiv = document.getElementById("mydiv");
var mytable = "<table border='1'><thead><th>ID</th><th>First Name</th>"

// var theA=99

//mytable += "<thead>"
//mytable += "<th>ID</th>"
//mytable += "<th>First Name</th>"
mytable += "<th>Last Name</th>"
mytable += "<th>Email</th>"
mytable += "</thead>"



for (var i = 0; i < mystudents.length; i++) {// iterate array
    mytable += "<tr>"
    for (key in mystudents[i]) {// iterate object
        console.log(key , mystudents[i][key]);
        mytable += "<td>" + mystudents[i][key] + "</td>"
    }
    mytable += "<tr>"
}
mydiv.innerHTML = mytable;