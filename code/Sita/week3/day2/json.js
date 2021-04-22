function myTab() {
    let mystudents = require('./data233.json');
    console.log(mystudents);
    var mydiv = document.getElementById("mydiv");
    var mytable = "<table border='1'>"
    var mythead = "<thead>"
    var mytbody = "<tbody>"

    for (var i = 0; i < mystudents.length; i++) {// iterate array
        mytbody += "<tr>"
        for (key in mystudents[i]) {// iterate object
            console.log(key, mystudents[i][key]);
            if (i == 0) {
                mythead += "<th>" + key + "</th>"
            }
            mytbody += "<td>" + mystudents[i][key] + "</td>"
        }
        mytbody += "<tr>"
    }
    mytbody += "</thead>"
    mytbody += "</tbody>"
    mytable += mythead + mytbody + "</table>"
    mydiv.innerHTML = mytable;
}   