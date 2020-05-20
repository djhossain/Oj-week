

var audio = document.getElementById('swapSound');

function playy()
{
  audio.play();
}
function stopp()
{
  audio.stop();
}

setTimeout(playy, 1000);
// setInterval(stopp, 5000);

// function myMove(from,to,ele) {

//   	var pos = from;
//   	var id = setInterval(frame, 5);
//   	function frame() {
//     if (pos == to) 
//     {
//       clearInterval(id);
//     } 
//     else 
//     {
//     	if(from<to)
//     	{
//       		pos++;
//     	}
//       	else 
//       	{
//       	 	pos--;
//       	} 
//       	ele.style.top = pos + "px"; 
//     }
//     //console.log(pos);
//   }
// }

// var i;
// var change;
// var time;
// var element = document.getElementById('test2');

// function pauseComp(ms) 
//  {
//      var curr = new Date().getTime();
//      ms += curr;
//      while (curr   < ms) {
//          curr = new Date().getTime();
//      }
//  } 
// //  function wait(ms) {
// //     var start = Date.now(),
// //         now = start;
// //     while (now - start < ms) {
// //       now = Date.now();
// //     }
// // }

// // for(var i=0;i<350;i+=70)
// // {
  
// //   // wait(350);
// // }






// // function swapLoop(from, to)
// // {
// //  var now = from;
// //  swap();
// //  var swapId = setInterval(swap,500);

// //  function swap()
// //  {
// //    if(now == to)
// //      clearInterval(swapId);
// //    else
// //    {
// //      var prev=now-1;

// //      nowbox=document.getElementById(now);
// //      prevbox=document.getElementById(prev);

// //      p[now].rank=prev;
// //      p[prev].rank=now;

// //      var s1=p[now].start;
// //      var s2=p[prev].start;

// //      myMove(s1,s2,nowbox);
// //      update(now-1,now,prevbox,rank);

// //      myMove(s2,s1,prevbox);
// //      update(now,now-1,nowbox,rank);

// //      //sleep(500);


// //      var tempid=99999;
// //      changeid(now,temp);
// //      changeid(now-1,now);
// //      changeid(temp,now-1);

// //      var tempStart=p[now].start;
// //      p[now].start=p[now-1].start;
// //      p[now-1].start=tempStart;

// //      var temp=p[now];
// //      p[now]=p[now-1];
// //      p[now-1]=temp;
// //      now--;
// //    }
// //  }
// // }

// // function check(per,dd)
// // {
// //  var flag = 0;
// //  var to = per;
// //  while(to>1)
// //  {
// //    if(p[to-1].array[dd]<p[per].array[dd])
// //      to--;
// //    else
// //      break;
// //  }
// //  if(to!=per)
// //    return to;
// //  else
// //    return 0;
// // }

// // function personLoop(day)
// // {
// //  var pers = 1;
// //  update(p[pers].array[day-1],p[pers].array[day],document.getElementById(pers),total);
// //  var perId = setInterval(pLoop,2000);

// //  function pLoop()
// //  {
// //    if(pers == people)
// //      clearInterval(perId);

// //    else
// //    {
// //      pers++;
// //      console.log(pers);
// //      update(p[pers].array[day-1],p[pers].array[day],document.getElementById(pers),total);
// //      var to = check(pers,day);
// //      if(to)
// //      {
// //        swapLoop(pers,to);
// //      }
// //    }
// //  }
// // }

// // function dayLoop()
// // {
// //  var day = 1;
// //  //console.log(day);
// //  personLoop(day);
// //  var dayId = setInterval(dLoop,1000);

// //  function dLoop()
// //  {
// //    if(day == days)
// //      clearInterval(dayId);

// //    else
// //    {
// //      personLoop(day);
// //      day++;
// //    }

// //  }
// // }

// // dayLoop();


// // function sleep(milliseconds) {
// //   const date = Date.now();
// //   let currentDate = null;
// //   do {
// //     currentDate = Date.now();
// //   } while (currentDate - date < milliseconds);
// // }

// // var id="test"+1;
// // rankBox1=document.getElementById(id);
// // rankBox2=document.getElementById('test2');
// // rankBox1.children[name].innerHTML="bfhghadfg";

// // // rankBox1.style.top = "0px";
// // // rankBox2.style.top = "70px";
// // myMove(0,70,rankBox1);
// // myMove(70,0,rankBox2);

// function wait(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Done waiting");
//       resolve(ms)
//     }, ms )
//   })
// }  

// (async function Main() {
  
  
// })();


// // change = 1;
// // i = 0;


// // function loop() {

// //     var pos = 0;
// //     myMove(pos,pos+70,element);
// //     var gd = setInterval(floop, 500);
// //     function floop() {
// //     if (pos == 280) 
// //     {
// //       clearInterval(gd);
// //     } 
// //     else 
// //     {
// //       pos+=70;
// //       myMove(pos,pos+70,element); 
// //     }
// //     //console.log(pos);
// //   }
// // }

// // loop();


// // function add(a,b)
// // {
// //   return a+b;
// // }

// // var x = add(5,2);

// // console.log(x);

















// // while(i <= 350)
// // {
// //   if(change)
// //   {
// //     change = 0;
// //     time = setTimeout(()=>
// //     {
// //       i += 70;
// //       change = 1;
// //       clearTimeout(time);
// //     }, 50);
// //     myMove(i,i+70,element);
// //   }	
// // }

// // var i=0;
// //  async function floop(i)
// // {
// // 	if(i>350)
// // 		return;
// // 	else
// // 	{
// // 		i+=70;
// // 		floop(i);
// // 		await myMove(i,i+70,element);
// // 	}
// // }

// // floop(i);