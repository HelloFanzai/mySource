function theLv1(theClassName) {
    var them1 = document.getElementById(theClassName)
    var theDiv = them1.style.display;
    if (theDiv == "none")
        them1.style.display = "block";
    else
        them1.style.display = "none";
}
function theLv2() {
    console.log('theLv2');
}