function score(name3,callback1)
{
    console.log(`${name3} is facing the ball`)
    setTimeout(()=>{
        console.log(`${name3} hit the ball `)
        console.log(`It is a six`)
        callback1()
    },4000)
}

function scorecard(){
    console.log(`It is  a double century for the player`)
}

score("Kohli",scorecard)

