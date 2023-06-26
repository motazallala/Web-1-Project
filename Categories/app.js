
var type="";

var price=0;

var total=0;
var name1=document.getElementsByName("opchen").innerHTML;



function cat(x){
    if(x=="CPU"){
        document.getElementById("cat_con").innerHTML="<optgroup><option value='Select your card type'>Select your card type</option></optgroup>";
        document.getElementById("cat_con").innerHTML+="<option value='cpu1' id='cpu1' name='opchen'>Core I3</option>";
        document.getElementById("cat_con").innerHTML+="<option value='cpu2' id='cpu2' name='opchen'>Core I5</option>";
        document.getElementById("cat_con").innerHTML+="<option value='cpu3' id='cpu3' name='opchen'>Core I7</option>"; 
    }
    else if(x=="GPU"){
        document.getElementById("cat_con").innerHTML="<optgroup><option value='Select your card type'>Select your card type</option></optgroup>";
        document.getElementById("cat_con").innerHTML+="<option value='gpu1' name='opchen'>Nvidia RTX 3050</option>";
        document.getElementById("cat_con").innerHTML+="<option value='gpu2' name='opchen'>Nvidia RTX 3060</option>";
        document.getElementById("cat_con").innerHTML+="<option value='gpu3' name='opchen'>Nvidia RTX 3080</option>";
    }
    else if(x=="RAM"){
        document.getElementById("cat_con").innerHTML="<optgroup><option value='Select your card type'>Select your card type</option></optgroup>";
        document.getElementById("cat_con").innerHTML+="<option value='ram1' name='opchen'>8GB</option>";
        document.getElementById("cat_con").innerHTML+="<option value='ram2' name='opchen'>16GB</option>";
        document.getElementById("cat_con").innerHTML+="<option value='ram3' name='opchen'>32GB</option>";
    }
    else if (x=="Motherboard"){
        document.getElementById("cat_con").innerHTML="<optgroup><option value='Select your card type'>Select your card type</option></optgroup>";
        document.getElementById("cat_con").innerHTML+="<option value='motherboard1' name='opchen'>Asus B370</option>";
        document.getElementById("cat_con").innerHTML+="<option value='motherboard2' name='opchen'>MSI C400</option>";
        document.getElementById("cat_con").innerHTML+="<option value='motherboard3' name='opchen'>ORAS Q950</option>";
    }
    else if(x=="Case"){
        document.getElementById("cat_con").innerHTML="<optgroup><option value='Select your card type'>Select your card type</option></optgroup>";
        document.getElementById("cat_con").innerHTML+="<option value='case1' name='opchen'>Cooler Master M12</option>";
        document.getElementById("cat_con").innerHTML+="<option value='case2' name='opchen'>NZXT H500</option>";
        document.getElementById("cat_con").innerHTML+="<option value='case3' name='opchen'>MSI W6546</option>"; 
    }
    else{
        document.getElementById("cat_con").innerHTML="<optgroup><option value='Select your card type'>Select your card type</option></optgroup>";
        document.getElementById("cat_con").innerHTML+="<option value='monitor1' name='opchen'>Samsung Q50</option>";
        document.getElementById("cat_con").innerHTML+="<option value='monitor2' name='opchen'>BinQ A50</option>";
        document.getElementById("cat_con").innerHTML+="<option value='monitor3' name='opchen'>LG B500</option>";  
    }
}

function check_type(c){
    
    
    if(c=="cpu1"){
     type="Cpu";
     price=100;
     name1="Core I3";
    }
    else if (c=="cpu2"){
    type="Cpu";
     price=150;
     name1="Core I5";
    }
    else if (c=="cpu3"){
    type="Cpu";
     price=250;
     name1="Core I7";
    }
    else if (c=="gpu1"){
    type="Gpu";
     price=250;
     name1="Nvidia RTX 3050";
    }
    else if (c=="gpu2"){
    type="Gpu";
     price=350;
     name1="Nvidia RTX 3060";
    }
    else if (c=="gpu3"){
    type="Gpu";
     price=450;
     name1="Nvidia RTX 3080";
    }
    else if (c=="ram1"){
    type="Ram";
     price=150;
     name1="8GB";
    }
    else if (c=="ram2"){
    type="Ram";
     price=100;
     name1="16GB";
    }
    else if (c=="ram3"){
    type="Ram";
     price=200;
     name1="32GB";
    }
    else if (c=="motherboard1"){
    type="Motherboard";
     price=100;
     name1="Asus B370";
    }
    else if (c=="motherboard2"){
    type="Motherboard";
     price=150;
     name1="MSI C400";
    }
    else if (c=="motherboard3"){
    type="Motherboard";
     price=250;
     name1="ORAS Q950";
    }
    else if(c=="case1"){
        type="Case";
        price=250;
        name1="Cooler Master M12";
    }
    else if(c=="case2"){
        type="Case";
        price=250;
        name1="NZXT H500";
    }
    else if(c=="case3"){
        type="Case";
        price=250;
        name1="MSI W6546";
    }
    else if (c=="monitor1"){
    type="Monitor";
     price=250;
     name1="Samsung Q50";
    }
    else if (c=="monitor2"){
    type="Monitor";
     price=450;
     name1="BinQ A50";
    }
    else if (c=="monitor3"){
    type="Monitor";
     price=550;
     name1="LG B500";
    }

}

function addRow() {
          
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var quantity1=document.getElementById("quantity").value;
    
    
 
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= type;
    row.insertCell(2).innerHTML= name1;
    row.insertCell(3).innerHTML= quantity1;
    row.insertCell(4).innerHTML= price*parseInt(quantity1);
    total+=price*parseInt(quantity1);
    document.getElementById("total_View").value=total;
    
}


function deleteRow(obj) {
            
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    
    table.deleteRow(index);
    
}
 
 
function load() {
    
    console.log("Page load finished");
 
}


