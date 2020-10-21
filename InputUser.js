function ambilData() {
    var jenis = new Array(); 
var jenis = document.getElementsByName("gender"); 

if (jenis[0].checked === true)
        var j = jenis[0].value; 
    else if (jenis[1].checked === true)   
        var j = jenis[1].value; 
    else if(jenis[2].checked === true){
var j = jenis[2].value;
} else 
        var j = "Anda belum memilih Gender"; 
        document.getElementById("displayGender").innerHTML = j;   

    var e = document.getElementById('welcome');
    if (e.style.display == 'block' || e.style.display==''){
    e.style.display = 'none';
    } else {
    e.style.display = 'block';
}
    if(document.getElementById("nama").value == "" || document.getElementById("inputemail").value == ""){  
        document.getElementById("demo").innerHTML = "isian tidak boleh ada yang kosong";
        
    } else if(document.getElementById("nama").value || document.getElementById("inputemail").value) {
         var nama = document.getElementById("nama").value; 
         document.getElementById("demo").innerHTML = nama; 
    var nama = document.getElementById("inputemail").value; 
         document.getElementById("displayemail").innerHTML = nama; 
    var listnegara = document.getElementById("Negara").value;
    document.getElementById("displaynegara").innerHTML = listnegara;
    var listlahir = document.getElementById("lahir").value;
    document.getElementById("displaylahir").innerHTML = listlahir;
    } 
    }