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
    j=re.question("๐ฉโ๐ปare you sure about your answer I don't thik so๐ฉโ๐ป๐๐:-")
    if (j=="no"){
        lifeline=re.question("๐ฉโ๐ป๐ฉโdo to you want any lifeline๐ฉโ๐ป๐ฉ:โ-")
        if (lifeline=="yes"){
                use=re.question("๐ค๐คwe have 5050 lifeline you want that๐ค๐ค:- ")
                if (use=='yes'){

                }
                if (count<1){
                    count+=1
                    for(var k=0; k<life[i].length; ++k){
                        console.log(`${k+1}`,life[i][k])
                    };
                    }
                    num=re.questionInt("๐๐๐ค๐คenter the answer๐ค๐ค๐๐;-")
                    if (num==answer1[i]){
                        console.log("๐your answer is correct๐")
                        console.log()
                        sum+=10000
                        console.log(`${sum} ๐ค๐ค๐ค๐๐๐you won that much amount๐๐๐๐ค๐ค๐ค`)
                        console.log()
                        console.log(`your next question and options are on your screen`)
                    }else{
                        console.log(`${sum} ๐๐ฅบgame over๐ฅบ๐you have to return with this amount ${sum}`)
                        break}
                }else{
                    console.log(" opps! ๐๐you cant use lifeline again๐๐")
                    num=re.questionInt("enter your answer:-")
                    if (num==answer[i]){
                        console.log("right answer๐")
                        console.log()
                        sum+=100000
                        console.log(`${sum+sum}๐ค๐ค๐ค๐๐๐congrats you won๐๐๐๐ค๐ค๐ค`)
                        console.log()
                        console.log(`your next question and options are on your screen`)
                    }else{
                        console.log(`๐ฅบyou lost๐ฅบyou have to return with this amount ${sum+sum}`)
                        break
                    }
                }
            }
    else{
        if (num==answer[i]){
            console.log("right answer๐โ")
            console.log()
            sum+=1000000
            console.log(`${sum+sum+sum}๐ค๐ค๐ค๐ฅณ๐ค๐ค๐๐congrats๐๐๐ค๐ค๐ฅณ๐ค๐ค๐ค`)
            console.log()
            console.log(`you won the KBC questions are finished`)
        }else{
            console.log(`๐ฅบ๐๐game over๐ฅบ๐๐ you have to return with this amount ${sum+sum+sum}`)
            break
        }
    }}
Footer
