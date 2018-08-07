function getXmlHttp(){
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest!=='undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function sayHello() {
    var xmlhttp = getXmlHttp();
    xmlhttp.open('GET', '/helloajax', false);
    xmlhttp.send(null);
    if(xmlhttp.status === 200) {
        alert(xmlhttp.responseText);

    }
}

function plus() {
    var xmlhttp = getXmlHttp();
    var d1value = document.getElementById("d1").value;
    var d2value = document.getElementById("d2").value;
    xmlhttp.open('GET', '/plus2?d1='+ d1value + '&d2=' + d2value, false);
    xmlhttp.send(null);
    if(xmlhttp.status === 200) {
        document.getElementById("result").innerHTML = xmlhttp.responseText;
    }else{
        alert("Error " + xmlhttp.responseText);
    }
}

