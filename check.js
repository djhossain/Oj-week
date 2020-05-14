
function myMove(from,to,ele) {

  	var pos = from;
  	var id = setInterval(frame, 5);
  	function frame() {
    if (pos == to) 
    {
      clearInterval(id);
    } 
    else 
    {
    	if(from<to)
    	{
      		pos++;
    	}
      	else 
      	{
      	 	pos--;
      	} 
      	ele.style.top = pos + "px"; 
    }
    //console.log(pos);
  }
}

var i;
var change;
var time;
var element = document.getElementById('test2');

function pauseComp(ms) 
 {
     var curr = new Date().getTime();
     ms += curr;
     while (curr   < ms) {
         curr = new Date().getTime();
     }
 } 
//  function wait(ms) {
//     var start = Date.now(),
//         now = start;
//     while (now - start < ms) {
//       now = Date.now();
//     }
// }

// for(var i=0;i<350;i+=70)
// {
  
//   // wait(350);
// }

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Done waiting");
      resolve(ms)
    }, ms )
  })
}  

(async function Main() {
  
  
})();


// change = 1;
// i = 0;


// function loop() {

//     var pos = 0;
//     myMove(pos,pos+70,element);
//     var gd = setInterval(floop, 500);
//     function floop() {
//     if (pos == 280) 
//     {
//       clearInterval(gd);
//     } 
//     else 
//     {
//       pos+=70;
//       myMove(pos,pos+70,element); 
//     }
//     //console.log(pos);
//   }
// }

// loop();


// function add(a,b)
// {
//   return a+b;
// }

// var x = add(5,2);

// console.log(x);

















// while(i <= 350)
// {
//   if(change)
//   {
//     change = 0;
//     time = setTimeout(()=>
//     {
//       i += 70;
//       change = 1;
//       clearTimeout(time);
//     }, 50);
//     myMove(i,i+70,element);
//   }	
// }

// var i=0;
//  async function floop(i)
// {
// 	if(i>350)
// 		return;
// 	else
// 	{
// 		i+=70;
// 		floop(i);
// 		await myMove(i,i+70,element);
// 	}
// }

// floop(i);