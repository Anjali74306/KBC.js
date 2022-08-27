var re=require("readline-sync")
function que_list(){
    question_arr = [
        "How many continents are there?",            
        "What is the capital of India?",            
        "NG mei kaun se course padhaya jaata hai?"
    ]
    return question_arr
    }    
var que = que_list()

////option arr
function opt_arr(){
    option_arr = [
        ["Four", "Nine", "Seven", "Eight"],
        ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
        ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
    ]
    return option_arr
}
ope = opt_arr()

/// answer
function answer_arr(){    
    ans_arr=[3, 4, 1]
    return ans_arr
} 
answer=answer_arr()


////lifeline function
function lifeline(){
    option_arr1=[["Nine","Seven"],
    ["Delhi","Chennai"],
    ["Software Engineering","Counseling"]]
    return option_arr1
}    
life=lifeline()

/////lifeline option list
function answer_arr1(){
    ans_arr =[2,1,1]
    return ans_arr
}
answer1=answer_arr1()
var count=0;
var sum=0;
for(var i=0; i<que.length; i++){
    console.log(`Que.${i+1} ${que[i]}`)
    for(var j=0; j<=ope.length; j++){
        console.log(`${j+1}`, ope[i][j])}
   
    num=re.question("enter your answer:-")
    j=re.question("👩‍💻are you sure about your answer I don't thik so👩‍💻🙄🙄:-")
    if (j=="no"){
        lifeline=re.question("👩‍💻👩‍do to you want any lifeline👩‍💻👩:‍-")
        if (lifeline=="yes"){
                use=re.question("🤔🤔we have 5050 lifeline you want that🤔🤔:- ")
                if (use=='yes'){

                }
                if (count<1){
                    count+=1
                    for(var k=0; k<life[i].length; ++k){
                        console.log(`${k+1}`,life[i][k])
                    };
                    }
                    num=re.questionInt("🙄🙄🤔🤔enter the answer🤔🤔🙄🙄;-")
                    if (num==answer1[i]){
                        console.log("😁your answer is correct😁")
                        console.log()
                        sum+=10000
                        console.log(`${sum} 🤑🤑🤑👏👏👏you won that much amount👏👏👏🤑🤑🤑`)
                        console.log()
                        console.log(`your next question and options are on your screen`)
                    }else{
                        console.log(`${sum} 😔🥺game over🥺😔you have to return with this amount ${sum}`)
                        break}
                }else{
                    console.log(" opps! 😔😔you cant use lifeline again😔😔")
                    num=re.questionInt("enter your answer:-")
                    if (num==answer[i]){
                        console.log("right answer😁")
                        console.log()
                        sum+=100000
                        console.log(`${sum+sum}🤑🤑🤑👏👏👏congrats you won👏👏👏🤑🤑🤑`)
                        console.log()
                        console.log(`your next question and options are on your screen`)
                    }else{
                        console.log(`🥺you lost🥺you have to return with this amount ${sum+sum}`)
                        break
                    }
                }
            }
    else{
        if (num==answer[i]){
            console.log("right answer😁‍")
            console.log()
            sum+=1000000
            console.log(`${sum+sum+sum}🤑🤑🤑🥳🤗🤗👏👏congrats👏👏🤗🤗🥳🤑🤑🤑`)
            console.log()
            console.log(`you won the KBC questions are finished`)
        }else{
            console.log(`🥺😔😔game over🥺😔😔 you have to return with this amount ${sum+sum+sum}`)
            break
        }
    }}
Footer
