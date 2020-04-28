var firebase = app_firebase;

function changePrice(clicked_id){

    var inputPrice = document.getElementById("input_" + clicked_id).value;
    var inputPrice2 = document.getElementById("input2_" + clicked_id).value;

    if (inputPrice){
        dbReference.child("ServicePrices").child(clicked_id).update({'price' : inputPrice});
    }
    if (inputPrice2){
        dbReference.child("ServicePrices").child(clicked_id).update({'BasePrice' : inputPrice2});
    }
}

var dbReference = firebase.database().ref().child('ProjectData');
dbReference.on('value', snap, error);

function snap(data) {

    // console.log(data.child('Mechanics').val());
    var mechanics = data.child('ServicePrices').val();
    var keys = Object.keys(mechanics);
    // console.log(keys);

    try{
        for (var i=0; i< keys.length; i++){
            document.getElementById("priceList").deleteRow(1);
        }
    }catch (e) {
        console.log('Error');
        console.log(e);
    }


    for (var i = 0; i< keys.length; i++){
        var k = keys[i];
        var price = mechanics[k].price;
        var basePrice = mechanics[k].BasePrice;

            tableNode = document.getElementById('priceList'),
            trNode = document.createElement("tr"),trNode.setAttribute('class','tableList'),
            tdNode0 = document.createElement("td"),
            tdNode1 = document.createElement("td"),
            tdNode2 = document.createElement("td"),
            tdNode3 = document.createElement("td"),
            tdNode4 = document.createElement("td"),
            tdNode5 = document.createElement("td"),
            btnNode1 = document.createElement("button"),

            textNodeId = document.createTextNode(k),
            textNodePrice = document.createTextNode(price),
            textNodeBasePrice = document.createTextNode(basePrice),
            inputNodePrice = document.createElement("input"),
            inputNodeBasePrice = document.createElement("input"),

        btnNode1.innerText = 'Change Price', btnNode1.setAttribute('class','button button2'),btnNode1.setAttribute('onClick','changePrice(this.id)'),btnNode1.setAttribute('id',k);
        inputNodePrice.setAttribute('placeholder','Enter price'),inputNodePrice.setAttribute('class','input')
            ,inputNodePrice.setAttribute('id', 'input_'+k);
        inputNodeBasePrice.setAttribute('placeholder','Enter price'),inputNodeBasePrice.setAttribute('class','input')
            ,inputNodeBasePrice.setAttribute('id', 'input2_'+k);

        tdNode0.appendChild(textNodeId), tdNode1.appendChild(textNodePrice), tdNode2.appendChild(inputNodePrice), tdNode3.appendChild(textNodeBasePrice), tdNode4.appendChild(inputNodeBasePrice), tdNode5.appendChild(btnNode1);
        trNode.appendChild(tdNode0), trNode.appendChild(tdNode1), trNode.appendChild(tdNode2), trNode.appendChild(tdNode3), trNode.appendChild(tdNode4), trNode.appendChild(tdNode5);
        tableNode.appendChild(trNode);

    }
}

function error(err) {
    console.log('Error');
    console.log(err);
}