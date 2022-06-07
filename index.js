
var counter =1;
var turn;

var arr = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];

function increaseTimer (clicked_id){
    if(document.getElementById(clicked_id).style.display == ""){
    var time=document.getElementById(clicked_id).innerHTML;
    console.log(clicked_id);
    console.log(time);
    var  mins = parseInt(time.split(":")[0]); 
    var  secs = parseInt(time.split(":")[1]);
    console.log(mins);
    console.log(secs);
    var totalTime = (mins*60)+secs;
    console.log(totalTime);
    totalTime += 1;
  //  console.log(totalTime);
    mins = Math.floor(totalTime/60);
    secs = totalTime%60;
   // console.log(mins);
   // console.log(secs);
    document.getElementById(clicked_id).innerHTML = (mins.toString().padStart(2,"0")).concat(":").concat(secs.toString().padStart(2,"0"));
    console.log(document.getElementById(clicked_id).innerHTML);
    setTimeout(increaseTimer(clicked_id),1000);
    }
}

function symbolChoose(clicked_id){
    for(var i=0;i<3;i++){

        document.getElementsByClassName("row")[i].style.pointerEvents="";
    }
    if(clicked_id=="1")
    {
        turn = 1;
    }

    if(clicked_id=="0")
    {
        turn = 0;
    }

    document.getElementById("0").style.display="none";
    document.getElementById("1").style.display = "none";
    document.getElementById("t-1").style.display = "";

    setTimeout(function () {
        document.getElementById("t-1").style.display = "none";
        document.getElementById("t-2").style.display = "";
      }, 1000);
      
    setTimeout(function(){
        document.getElementById("t-2").style.display = "none";
        document.getElementById("t-3").style.display = "";
    },2000);
    
    setTimeout(function(){
        document.getElementById("t-3").style.display = "none";
        document.getElementById("start").style.display = "";
    },3000);
    setTimeout(function(){
        document.getElementById("start").style.display = "none";
       // document.getElementById("timer-1").style.display = "";
    },4000);
    
    
}


function displaySymbol(clicked_id){
    
    var row = clicked_id[0];
    var col = clicked_id[1];
    if(turn==1)
    {
        if(counter%2==0)
        {
            document.getElementById(clicked_id+"-circle").style.display="";
            arr[row][col] = 0;
        }
        else
        {
            document.getElementById(clicked_id+"-cross").style.display="";
            arr[row][col] = 1;
        
        }
    }
     else
     {
        if(counter%2==0)
        {
            document.getElementById(clicked_id+"-cross").style.display="";
            arr[row][col] = 1;
        }
        else
        {
            document.getElementById(clicked_id+"-circle").style.display="";
            arr[row][col] = 0;
        }
    }
    document.getElementById(clicked_id).style.pointerEvents = "none";
    counter = counter+1;

    console.log(arr);
   decideWinner(arr);
    //increaseTimer("timer-1");
    


}

function decideWinner(arr)
{
    var cnt=-1;
    for(var i=0;i<3;i++)
    {
        if((arr[i][0] != undefined && arr[i][1] != undefined && arr[i][2] != undefined) && (arr[i][0]== 0 && arr[i][1]==0 && arr[i][2]==0))
        {
            cnt=0;
        }
        if((arr[i][0] != undefined && arr[i][1] != undefined && arr[i][2] != undefined) && (arr[i][0]== 1 && arr[i][1]==1 && arr[i][2]==1))
        {
            cnt=1;
        }


        if((arr[0][i] != undefined && arr[1][i] != undefined && arr[2][i] != undefined) && (arr[0][i]== 0 && arr[1][i]==0 && arr[2][i]==0))
        {
            cnt=0;
        }
        if((arr[0][i] != undefined && arr[1][i] != undefined && arr[2][i] != undefined) && (arr[0][i]== 1 && arr[1][i]==1 && arr[2][i]==1))
        {
            cnt=1;
        }

    }

     if((arr[0][0] != undefined && arr[1][1] != undefined && arr[2][2] != undefined) && (arr[0][0]== 0 && arr[1][1]==0 && arr[2][2]==0))
        {
            cnt=0;
        }


        if((arr[0][2] != undefined && arr[1][1] != undefined && arr[2][0] != undefined) && (arr[0][2]== 1 && arr[1][1]== 1 && arr[2][0]==1))
        {
            cnt=1;
        }

        if((arr[0][2] != undefined && arr[1][1] != undefined && arr[2][0] != undefined) && (arr[0][2]== 0 && arr[1][1]==0 && arr[2][0]==0))
        {
            cnt=0;
        }


        if((arr[0][0] != undefined && arr[1][1] != undefined && arr[2][2] != undefined) && (arr[0][0]== 1 && arr[1][1]== 1 && arr[2][2]==1))
        {
            cnt=1;
        }

        if(cnt==1)
        {
            if(turn == 1)
            {
                document.getElementById("winner-disp").innerHTML="Player 1 Wins !!"
            }
            else
            {
                document.getElementById("winner-disp").innerHTML="Player 2 Wins !!"
            }

            document.getElementById("winner-disp").style.display = "";
            for(var i=0;i<3;i++){

                document.getElementsByClassName("row")[i].style.pointerEvents="none";
            }
        }
        if(cnt == 0)
        {
            if(turn == 0)
            {
                document.getElementById("winner-disp").innerHTML="Player 1 Wins !!"
            }
            else
            {
                document.getElementById("winner-disp").innerHTML="Player 2 Wins !!"
            }
            
            document.getElementById("winner-disp").style.display = "";
            for(var i=0;i<3;i++){

                document.getElementsByClassName("row")[i].style.pointerEvents="none";
            }
        }
        if(cnt==-1 && counter==10)
        {
            document.getElementById("winner-disp").innerHTML="Its a Draw !!"
            document.getElementById("winner-disp").style.display = "";
            for(var i=0;i<3;i++){

                document.getElementsByClassName("row")[i].style.pointerEvents="none";
            }
        }
}
