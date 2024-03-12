let title = document.querySelector('.title');
let turn ='x';
let sqaer=[];


function win(num1,num2,num3)
{

    title.innerHTML=`${sqaer[num1]} winner`;
    document.getElementById('item'+num1).style.background='black';
    document.getElementById('item'+num2).style.background='black';
    document.getElementById('item'+num3).style.background='black';
    setInterval(function(){title.innerHTML+='.'},1000);
    setTimeout(function(){location.reload()},4000);

}


function winner()
{
    for(i=1 ; i<10 ; i++)
    {
        sqaer[i]= document.getElementById('item'+i).innerHTML;
    }
    if(sqaer[1]==sqaer[2] &&sqaer[2]==sqaer[3] && sqaer[3]!='')
    {
        win(1,2,3)
    }
    else if(sqaer[4]==sqaer[5] &&sqaer[5]==sqaer[6] && sqaer[5]!=''){
        win(4,5,6)
    }
    else if(sqaer[7]==sqaer[8] &&sqaer[8]==sqaer[9] && sqaer[7]!='')
    {
        win(7,8,9)
    }
    else if(sqaer[1]==sqaer[4] &&sqaer[4]==sqaer[7] && sqaer[4]!='')
    {
        win(1,4,7)
    }
    else if(sqaer[2]==sqaer[5] &&sqaer[5]==sqaer[8] && sqaer[5]!='')
    {
        win(2,5,8)
    }
    else if(sqaer[3]==sqaer[6] &&sqaer[6]==sqaer[9] && sqaer[6]!='')
    {
        win(3,6,9)
    }
    else if(sqaer[1]==sqaer[5] &&sqaer[5]==sqaer[9] && sqaer[5]!='')
    {
        win(1,5,9)
    }
    else if(sqaer[3]==sqaer[5] &&sqaer[5]==sqaer[7] && sqaer[3]!='')
    {
        win(3,5,7)
    }
    
    else if( sqaer[1] && sqaer[2] && sqaer[3]&& sqaer[4] &&sqaer[5] && sqaer[6] &&sqaer[7] && sqaer[8] &&sqaer[9]!='')
    {
        title.innerHTML='Reload'
        setInterval(function(){title.innerHTML+='.'},1000);
        setTimeout(function(){location.reload()},4000);
    }


}

function game(id){
    let element = document.getElementById(id);

    if(turn==='x' && element.innerHTML=='')
    {
        element.innerHTML='X'
        turn = 'O'
        title.innerHTML = 'O'

    }
    else if(turn==='O' && element.innerHTML=='')
    {
        element.innerHTML='O'
        turn ='x'
        title.innerHTML = 'X'

    }
    winner();
}