function solution() {
    // you can access DOM Tree by using DOM Object Model:
    let theTable = document.getElementsByTagName("table")
    // console.log(table.length)
    let myAnswer = 0;
    for (let i = 0; i < theTable.length; i++) {
        let theTemp = 0;
        let tBody = theTable[i].childNodes[1]
        // console.log(tbody.childNodes)
        for (let i = 0; i < tBody.childNodes.length; i++) {
            if (i % 2 === 0) {
                let ls = (tBody.childNodes[i].childNodes.length - 1) / 2
                theTemp += ls
            }
        }
        myAnswer = Math.max(theTemp, myAnswer)
    }
    return myAnswer
}