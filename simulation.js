 

const rank=0;
const name=1;
const total=2;

var days= parseInt(prompt("Enter the nember of days"));
var people= parseInt(prompt("Enter the nember of person"));
var p=[];
p[0]=new person();

 for(var n=1;n<=people;n++)
 {
 	p[n]= new person();
 	p[n].rank=n;
 	p[n].name=prompt("Enter the name");
 	p[n].array[0]=0;
 	// alert(p.name);
 	for(var i=1;i<=days;i++)
 	{
 		p[n].array[i]=parseInt(prompt("Solve in day "+i))+p[n].array[i-1];
 	}
 }

var h=70;
var posi=5;
var id=1;

 for(var index=1;index<=people;index++,posi+=h)
 {
 	p[index].start=posi;
 	createnew(index,posi,id);
 	id++;
 	
 }

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Done waiting");
      resolve(ms)
    }, ms )
  })
}  

(async function Main() {
  await wait(500);
  for(var day=1;day<=days;day++)
	{
		document.getElementById('dayCount').innerHTML=day;
		for(pers=1;pers<=people;pers++)
		{

			update(p[pers].array[day-1],p[pers].array[day],document.getElementById(pers),total);
			await wait(100);
			var now=pers;
			while (now>1) 
			{
				if(p[now].array[day]>p[now-1].array[day])
				{
					var prev=now-1;

					nowbox=document.getElementById(now);
					prevbox=document.getElementById(prev);

					p[now].rank=prev;
					p[prev].rank=now;

					var s1=p[now].start;
					var s2=p[prev].start;

					myMove(s1,s2,nowbox);
					myMove(s2,s1,prevbox);
					await wait(700);

					update(now-1,now,prevbox,rank);
					update(now,now-1,nowbox,rank);
					await wait(100);

					//sleep(500);


					var tempid=99999;
					changeid(now,temp);
					changeid(now-1,now);
					changeid(temp,now-1);

					var tempStart=p[now].start;
					p[now].start=p[now-1].start;
					p[now-1].start=tempStart;

					var temp=p[now];
					p[now]=p[now-1];
					p[now-1]=temp;
					now--;
				}
				else
					break;
			}
		}
		await wait(500);
	}
  
})();


 
function changeid(from,to)
{
	document.getElementById(from).id=to;
}



function person()
 {
 	this.name=null;
 	this.rank=0;
 	this.total=0;
 	this.ctotal=0;
 	this.start=0;
 	this.height=0;
 	this.array=[];
 	this.exist=0;
 }

var bgMain='#252a34';
var bgUp='#f1c40f';
var bgDown='#16a085';

function myMove(from,to,ele) {

  	var pos = from;
  	var id = setInterval(frame, 10);
  	function frame() {
    if (pos == to) 
    {
    	ele.style.background = bgMain ;
      clearInterval(id);
    } 
    else 
    {

    	
    	if(from<to)
    	{
    		ele.style.background = bgDown;
      		pos++;
    	}
      	else 
      	{
      		ele.style.background = bgUp;
      	 	pos--;
      	} 
      	ele.style.top = pos + "px"; 
    }
    console.log(from);
  }
}

function update(from,to,ele,s) {

  	var pos = from;
  	var id = setInterval(frame, 50);
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
      	ele.children[s].innerHTML = pos; 
    }
  }
}







function createnew(n,pos,newid)
{
	var main=document.getElementById("container");

	var div=document.createElement("div");
 	div.classList.add('rank_box');
 	div.id=newid;
 	main.appendChild(div);
 	div.style.top = pos+"px";

 	var rankSpan= document.createElement("span");
 	rankSpan.innerHTML=p[n].rank;
 	rankSpan.classList.add('rank');
 	div.appendChild(rankSpan);

 	var nameSpan= document.createElement("span");
 	nameSpan.innerHTML=p[n].name;
 	nameSpan.classList.add('name');
 	div.appendChild(nameSpan);

 	var totalSpan= document.createElement("span");
 	totalSpan.innerHTML=p[n].total;
 	totalSpan.classList.add('total');
 	div.appendChild(totalSpan);
}
