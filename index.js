import 'bootstrap';

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "dataType",
    url: "url",
    data: "data",
    success: function (response) {
        
    }
});

for(var angka = 1; angka <= 100; angka++){
    if((angka%2)==1){
      document.write('gajil' + '<br>');
    }
    else if ((angka%2)===0) {
      document.write('genap' + '<br>');
    }
  }
  
  
  for(var tambah2 = 1; tambah2 <= 100; tambah2+=2){
    if((tambah2%3)===0){
      document.write(tambah2 + ' KELIPATAN 3' +'<br>');
    }
    else {
      document.write(' ' + '<br>');
    }
  }
  
  
  for(var tambah5 = 1; tambah5 <= 100; tambah5+=5){
    if((tambah5%6)===0){
      document.write(tambah5 + ' KELIPATAN 6' +'<br>');
    }
    else {
      document.write(' ' + '<br>');
    }
  }
  
  
  for(var tambah9 = 1; tambah9 <= 100; tambah9+=9){
    if((tambah9%10)===0){
      document.write(tambah9 + ' KELIPATAN 10' +'<br>');
    }
    else {
      document.write('' + '<br>');
      console.log()
    }
  }