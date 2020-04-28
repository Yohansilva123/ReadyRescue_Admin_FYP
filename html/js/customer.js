var firebase = app_firebase

var dbReference = firebase.database().ref().child('Users');
dbReference.on('value', snap, error);

function snap(data) {

    // console.log(data.child('Mechanics').val());
    var customers = data.child('Customers').val();
    var customerKeys = Object.keys(customers)
    // console.log(keys);

    try{
        for (var i=1; i< keys.length+1; i++){
            document.getElementById("customerList").deleteRow(1);
        }
    }catch (e) {
        console.log('Error');
        console.log(e);
    }

    for (var i = 0; i< customerKeys.length; i++){
        var k = customerKeys[i];
        var name = customers[k].Name;
        var phone = customers[k].Phone;

        tableNode = document.getElementById('customerList'),
            trNode = document.createElement("tr"),trNode.setAttribute('class','tableList'),
            tdNode0 = document.createElement("td"),
            tdNode1 = document.createElement("td"),
            tdNode2 = document.createElement("td"),

            textNodeId = document.createTextNode(k),
            textNodeName = document.createTextNode(name),
            textNodePhone = document.createTextNode(phone),

            tdNode0.appendChild(textNodeId), tdNode1.appendChild(textNodeName), tdNode2.appendChild(textNodePhone);
        trNode.appendChild(tdNode0), trNode.appendChild(tdNode1), trNode.appendChild(tdNode2);
        tableNode.appendChild(trNode);

    }
}

function error(err) {
    console.log('Error');
    console.log(err);
}