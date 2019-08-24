
function AddAsisList(){
    var NewList = document.createElement('li');
    var ListValue = document.getElementById("AsisInput").value;
    if(ListValue != ""){
        NewList.innerText = ListValue;
        NewList.className = "list-group-item list-group-item-warning";

        NewList.onclick = function () {
            var MoveList = document.createElement('li');
            MoveList.innerText = ListValue;
            MoveList.className = "list-group-item list-group-item-success";
            document.getElementById("TobeList").appendChild(MoveList);
            document.getElementById("AsisList").removeChild(NewList);
        };

        document.getElementById("AsisInput").value = '';
        document.getElementById("AsisList").appendChild(NewList);
    }
}

function EnterKey() {
    if (window.event.keyCode == 13) {
        AddAsisList();
    }
}
