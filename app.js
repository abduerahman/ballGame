let ball = document.querySelector('#ball');
let header = document.querySelector('header');



let left = 5;
document.addEventListener('keydown', (event) => {
    if(event.code === "ArrowUp"){
        ball.style.bottom = "30%";
        setTimeout(function(){
            ball.style.bottom = "-1%";
        },300)
    }
    else if(event.code === 'ArrowDown'){
        ball.style.bottom = "-1%";
    }
    else if(event.code === 'ArrowLeft'){
        if(left < 1){
            left = 0;
        }
        else{
            left -= 3;
        }

        ball.style.left = `${left}%`;
    }
    else if(event.code === 'ArrowRight'){

        if(left > 95){
            left = 96;
        }
        else{
            left += 3;
        }
        ball.style.left = `${left}%`;
    }
}, false);


setInterval(function(e){
    let obstacles = document.querySelectorAll('#obstacle');
    obstacles.forEach( (obstacle) => {
      let position = obstacle.getBoundingClientRect();
      let ballPosition = ball.getBoundingClientRect();

      if ( ballPosition.bottom >= position.top && (ballPosition.x  >= position.left && ballPosition.x <= position.right) ){
        alert('GAME OVER');
        setTimeout(function(){
            window.location.reload();
        },100);
      }

    })
},1)

setInterval(function(){
    let span = document.createElement('span');
    span.setAttribute('id','obstacle');
    header.insertAdjacentElement('beforeend',span)
    setTimeout(function(){
        span.remove();
    },3900);
},2000)