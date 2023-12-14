function display(val){
    document.getElementById('output').value += val
}

function calculate(){
    var x= document.getElementById('output').value
    var y = eval(x)
    document.getElementById('output').value =y
}

function clearDisplay(){
    document.getElementById('output').value = ""
}
function del(){
    document.getElementById("output").value = ""
}