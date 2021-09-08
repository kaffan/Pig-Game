let buttons = document.getElementsByClassName("btt");
let dice = document.getElementsByClassName("dice")[0];
let current = document.getElementsByClassName("curr");
let play_scores = document.getElementsByClassName("play_score");
let container = document.getElementsByClassName("container")[0];
let pl1 = play_scores[0];
let pl2 = play_scores[1];
let curr_1 = current[0];
let curr_2 = current[1];
let bt_1 = buttons[0];
let bt_2 = buttons[1];
let bt_3 = buttons[2];
let clsBt = buttons[3];
let DC = document.getElementsByClassName('DC');
let random_score;

console.log(document.getElementById("diW"));
function display_dice(num)
{
    dice.setAttribute('style','display: block;');
    for(let i=0;i<9;i++)
    {
        DC[i].setAttribute('style','display: none');
    }
    switch(num)
    {
        case 1:
             DC[4].setAttribute('style','display:block;');
             break;
        case 2:
             DC[0].setAttribute('style','display:block;');
             DC[8].setAttribute('style','display:block;');
             break;
        case 3:
             DC[0].setAttribute('style','display:block;');
             DC[4].setAttribute('style','display:block;');
             DC[8].setAttribute('style','display:block;');
             break;
        case 4:
             DC[0].setAttribute('style','display:block;');
             DC[2].setAttribute('style','display:block;');
             DC[6].setAttribute('style','display:block;');
             DC[8].setAttribute('style','display:block;');
             break;
        case 5:
             DC[0].setAttribute('style','display:block;');
             DC[2].setAttribute('style','display:block;');
             DC[4].setAttribute('style','display:block;');
             DC[6].setAttribute('style','display:block;');
             DC[8].setAttribute('style','display:block;');
             break;
        case 6:
             DC[0].setAttribute('style','display:block;');
             DC[3].setAttribute('style','display:block;');
             DC[6].setAttribute('style','display:block;');
             DC[2].setAttribute('style','display:block;');
             DC[5].setAttribute('style','display:block;');
             DC[8].setAttribute('style','display:block;');
             break
    }
}

function display_winner(num)
{
    document.getElementsByClassName("disWinner")[0].setAttribute('style','display:block;');
    document.getElementById("diW").textContent = "The winner is Player "+num;
    container.classList.add("con_bg_temp");
}
function setReset()
{
    pl1.textContent = 0;
    pl2.textContent = 0;
    dice.setAttribute("style","dispaly: none;");
    curr_1.textContent = 0;
    curr_2.textContent = 0;
}

clsBt.addEventListener("click",function()
{
  document.getElementsByClassName("disWinner")[0].setAttribute('style','display:none;');
  container.classList.remove("con_bg_temp");
  setReset();
});
bt_1.addEventListener("click",setReset);

bt_2.addEventListener("click",function()
{
    random_score = parseInt(6*Math.random())+1;
    display_dice(random_score);
    if(random_score!=1)
    {
        if(container.classList.contains('con_bg'))
        {
            curr_1.textContent = parseInt(curr_1.textContent) + random_score;
        }
        else if(container.classList.contains('con_bg_1'))
        {
            curr_2.textContent = parseInt(curr_2.textContent) + random_score;
        }
    }
    else
    {
        if(container.classList.contains('con_bg'))
        {
            curr_1.textContent = 0;
            container.classList.remove('con_bg');
            container.classList.add('con_bg_1');
        }
        else if(container.classList.contains('con_bg_1'))
        {
            curr_2.textContent = 0;
            container.classList.remove('con_bg_1');
            container.classList.add('con_bg');
        }
    }
});
bt_3.addEventListener("click",function()
{
    if(container.classList.contains('con_bg'))
    {
        pl1.textContent = parseInt(pl1.textContent) + parseInt(curr_1.textContent);
        curr_1.textContent = 0;
        if(pl1.textContent>=100)
        {
            display_winner(1);
        }
        else
        {
            container.classList.remove('con_bg');
            container.classList.add('con_bg_1');
        }
    }
    else if(container.classList.contains('con_bg_1'))
    {
        pl2.textContent = parseInt(pl2.textContent) + parseInt(curr_2.textContent);
        curr_2.textContent = 0;
        if(pl2.textContent>=100)
        {
            display_winner(2);
        }
        else
        {
            container.classList.remove('con_bg_1');
            container.classList.add('con_bg');
        }
    }
});
