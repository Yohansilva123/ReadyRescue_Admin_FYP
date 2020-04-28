var firebase = app_firebase;

function addAuth(clicked_id){

    dbReference.child("Mechanics").child(clicked_id).update({'Authorization' : "true"});
}

function removeAuth(clicked_id){

    dbReference.child("Mechanics").child(clicked_id).update({'Authorization' : "false"});
}

var dbReference = firebase.database().ref().child('Users');
dbReference.on('value', snap, error);

function snap(data) {

    // console.log(data.child('Mechanics').val());
    var mechanics = data.child('Mechanics').val();
    var keys = Object.keys(mechanics);
    // console.log(keys);

    try{
        for (var i=1; i< keys.length+1; i++){
            document.getElementById("mechanicList").deleteRow(1);
        }
    }catch (e) {
        console.log('Error');
        console.log(e);
    }


    for (var i = 0; i< keys.length; i++){
        var k = keys[i];
        var name = mechanics[k].Name;
        var phone = mechanics[k].Phone;
        var auth = mechanics[k].Authorization;

        tableNode = document.getElementById('mechanicList'),
            trNode = document.createElement("tr"),trNode.setAttribute('class','tableList'),
        tdNode0 = document.createElement("td"),
            tdNode1 = document.createElement("td"),
            tdNode2 = document.createElement("td"),
            tdNode3 = document.createElement("td"),
            tdNode4 = document.createElement("td"),
            tdNode5 = document.createElement("td"),
            btnNode1 = document.createElement("button"),
            btnNode2 = document.createElement("button");

        textNodeId = document.createTextNode(k),
            textNodeName = document.createTextNode(name),
            textNodePhone = document.createTextNode(phone),
            textNodeAuth = document.createTextNode(auth);

        btnNode1.innerText = 'Authorize', btnNode1.setAttribute('class','button button2'),btnNode1.setAttribute('onClick','addAuth(this.id)'),btnNode1.setAttribute('id',k);
        btnNode2.innerText = 'Remove auth', btnNode2.setAttribute('class','button button1'),btnNode2.setAttribute('onClick','removeAuth(this.id)'),btnNode2.setAttribute('id',k);

        tdNode0.appendChild(textNodeId), tdNode1.appendChild(textNodeName), tdNode2.appendChild(textNodePhone), tdNode3.appendChild(textNodeAuth);
        tdNode4.appendChild(btnNode1), tdNode5.appendChild(btnNode2);
        trNode.appendChild(tdNode0), trNode.appendChild(tdNode1), trNode.appendChild(tdNode2), trNode.appendChild(tdNode3),trNode.appendChild(tdNode4), trNode.appendChild(tdNode5);
        tableNode.appendChild(trNode);

    }
}

function error(err) {
    console.log('Error');
    console.log(err);
}