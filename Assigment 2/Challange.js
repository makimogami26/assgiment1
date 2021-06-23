
/*Nomer 1
for(let i=1; i<= 100; i++){ 
    if (i%2 == 0) {
        console.log (i+"genap")
    }else{
        console.log{i+"ganjil"}
    }
    }
*/
//akhirnomor 1

/*nomer 2
for(let i=1; i<= 100; i++){ 
    if (i%3 == 0) {
        console.log (i+"")
    }else{
    }
}*/
//akhir nomor2

/* nomer 3*/
/*for(let i=1; i<= 100; i++){ 
    if (i%2 == 0) {
        console.log(i+1)
    }
    }*/
//akhir nomor3




  /*Nomer 4 var i=5;
    while (i<10)
    {
       console.log(i);
       i++;
    }*/ 
    //akhir nomor 4

   
    /*function bubbleSort(array) { // nomer 5
    
      var done = false;
      while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
          if (array[i - 1] > array[i]) {
            done = false;
            var celeng5 = array[i - 1];
            array[i - 1] = array[i];
            array[i] = celeng5;
          }
        }
      }
    
      return array;
    }
  
    
    var numbers = [2, 6, 8, 3, 9];
    bubbleSort(numbers);
    console.log(numbers);
    //akhir nomer 5



  /* function bubbleSort(array) { // nomer 6
    
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] < array[i]) {
          done = false;
          var celeng6 = array[i - 1];
          array[i - 1] = array[i];
          array[i] = celeng6;
        }
      }
    }
  
    return array;
  }

  
  var numbers = [2, 6, 8, 3, 9];
  bubbleSort(numbers);
  console.log(numbers);*/
  // akhir nomor 6


function cekidot(input) {//Nomer 7
  let hasilgenap = [];
  let hasilganjil= [];
  let kelipatan3 = [];
  let total = [];
  

  for(let i=0; i < input.length; i++){
    if (input [i]%3 == 0)  {
      kelipatan3.push(input[i]);
      
      }else if(input[i]%2 == 1){
      hasilganjil.push(input[i]);  
      
      }else if(input [i]% 2 == 0){
        hasilgenap.push(input[i]);
    }
  }


  total.push(hasilgenap);
  total.push(hasilganjil);
  total.push(kelipatan3);
  return total;
    }



  total_1 = cekidot([1,2,3,4,5,6,7,8,9,10]);
  total_2 = cekidot([87, 50, 100, 2, 3, 74, 23]);
  console.log(total_1);
  console.log(total_2);
  //Akhir nomor 7



  
  

 /*var terbalik = 'salt academy'; // no 8
 var newName = '';
 for(i in terbalik){
   newName = terbalik[i] + newName; //newName = newName + terbalik[i] <==Hasilnya ga akan kebalik ini // udah diobrak arbik dptnya gini

 }
 console.log(newName);*/
 //akhir nomor 8


 /*const str = "Salt academy";//nomer 9A
 const arr = [2 , 3 , 5 ,7];
 const Nomer10 = (str, indices) => {
    let res = '';
    res = indices.reduce((acc, val) => {
       acc[val] = '*';
       return acc;
    }, str.split('')).join('');
    return res;
    console.log(Nomer11(str, arr));
 
 
};
const str2 = "javascript memang mudah";// nomer 9B
 const arr2 = [2,4,11,13,18];
 const Nomer11 = (str2, indices) => {
    let res = '';
    res = indices.reduce((acc, val) => {
       acc[val] = '*';
       return acc;
    }, str.split('')).join('');
    return res;
    
 };
 
 console.log(Nomer11(str2, arr));*/

 //akhir nomor9
 
 
  /*var minutes;//nomer 10
  var seconds;
  minutes = Math.floor(100/60);
  seconds = (100%60);
  minutes2 = Math.floor(120/60);
  seconds2 = (120%60);
  minutes3 = Math.floor(0/60);
  seconds3= (0%60);
  minutes4 = Math.floor(615/60);
  seconds4 = (615%60);
  
  console.log(minutes,seconds);
  console.log(minutes2,seconds2);
  console.log(minutes3,seconds3);
  console.log(minutes4,seconds4);
  */


