function onload(){
  var d=new Date();
  var day=d.getDate();
  var month=d.getMonth() + 1;
  var year=d.getFullYear();
  today = year + "-" + month + "-" + day;
  tasks = document.getElementsByName("task");
  for(i=0;i<tasks.length;i++){
    start = tasks[i].getElementsByClassName("start")[0].innerText;
    end = tasks[i].getElementsByClassName("end")[0].innerText;
    sum = DateDiff(end,start);
    sub = DateDiff(today,start);
    img = tasks[i].getElementsByClassName("colored")[0];
    //name = tasks[i].getElementsByClassName("key")[0].innerText;
    //container = document.getElementById("bar"+name);
    percent = sub/sum*100;
    img.style.width=percent+'%';
    //var colored = document.createElement('div');
    //colored.className = 'colored';
    //colored.style.width = percent+'%';
    //container.appendChild(colored);
  }
}

/*d1--end,d2---start*/
function DateDiff(d1,d2){
  var day = 24 * 60 * 60 *1000;
  try{    
    var dateArr = d1.split("-");
    var checkDate = new Date();
    checkDate.setFullYear(dateArr[0], dateArr[1]-1, dateArr[2]);
    var checkTime = checkDate.getTime();
    var dateArr2 = d2.split("-");
    var checkDate2 = new Date();
    checkDate2.setFullYear(dateArr2[0], dateArr2[1]-1, dateArr2[2]);
    var checkTime2 = checkDate2.getTime();
    var cha = (checkTime - checkTime2)/day;  
    return cha;
    }catch(e){
      return false;
  }
}

function showbox(){
  item = document.getElementById('newtask').getElementsByTagName('div');
  item[0].className="showbox";
  document.getElementById('add').className="hide";
}

function failed(){
  document.getElementById('newtask').getElementsByTagName('div')[0].className="hide";
  document.getElementById('newtask').getElementsByTagName('button')[0].className="add";
}

function succeed(){
  taskname = document.getElementsByTagName('textarea').value;
  startdate=new Date()
  enddate=document.getElementsByName('time')[0].value;
  var node = document.createElement('div');
}

