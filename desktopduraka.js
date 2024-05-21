let Jack
let Queen
let King
let TakingNow=false
let chosenGiven=[]
let toggle=1
let rox;
let trash=0
let robotnormals=[]
let idToClass="s";
let altidToClass="";
let  takenCards=[]
let takenCards2=[]
let isGameover=false;
let gimmeCard;
//to do:
//cant play more than one withotu errors
//allow player to tskr cards 
// new cards cant be played- biggest issue
let Ace
let permaTBG;
let playerdeck=[]
let robotdeck=[]

let suits=['♡','♢','♧','♤']
let langvalue='en'
let slotsfilled=0
if(langvalue=='en'){
Jack='J'
Queen='Q'
King='K'
Ace='A'
}
let values=[6,7,8,9,10,Jack,Queen,King,Ace]
class Deck{
    constructor(cards=DeckMaker()){
        this.cards=cards
    }
    // get Decklength(){
    //     return this.cards.length
    // }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
          const newIndex = Math.floor(Math.random() * (i + 1))
          const oldValue = this.cards[newIndex]
          this.cards[newIndex] = this.cards[i]
          this.cards[i] = oldValue
        }
      }
}
class Card{
    constructor(suit, value){
        this.suit=suit
        this.value=value
    }
}

function DeckMaker(){
    return suits.flatMap(suit => {
        return values.map(value => {
          return new Card(suit, value)
        })
      })
}
const deck= new Deck
for(let i=0;i<10;i++){
deck.shuffle()
deck.shuffle()
deck.shuffle()
deck.shuffle()
}
let first
let onlynumbersRobot=[]
let onlynumbersPlayer=[]
let Ourturn
//CONT- roobt ves wron2nd card sometimes
console.log(deck.cards)
//console.log(deck.cards.suit[1])

function robotDeckRestock(MyrobotDeck){

    
    let tempDeck=[];
    console.log(MyrobotDeck)
    for(let i=0;i<robotdeck.length;i++){
        if(document.getElementById('rnum'+i)==null){
            if(document.getElementById('rnum'+(i+1))!=null  ){
    
            
      //  || document.getElementById('cardnum'+(i+2))!=null|| document.getElementById('cardnum'+(i+3))!=null || document.getElementById('cardnum'+(i+4))!=null|| document.getElementById('cardnum'+(i+5))!=null 
            document.getElementById('rnum'+(i+1)).id='rnum'+i
            } else if(document.getElementById('rnum'+(i+2))!=null  ){
                document.getElementById('rnum'+(i+2)).id='rnum'+i
            }  else if(document.getElementById('rnum'+(i+3))!=null  ){
                document.getElementById('rnum'+(i+3)).id='rnum'+i
            }  else if(document.getElementById('rnum'+(i+4))!=null  ){
                document.getElementById('rnum'+(i+4)).id='rnum'+i
            }  else if(document.getElementById('rnum'+(i+5))!=null  ){
                document.getElementById('rnum'+(i+5)).id='rnum'+i
            }
        }
    }
/*
    for(let i=0;i<robotdeck.length;i++){
        if(document.getElementById('rnum'+i)==null){
            if(document.getElementById('rnum'+(i+1))!=null  ){
    
            
      //  || document.getElementById('cardnum'+(i+2))!=null|| document.getElementById('cardnum'+(i+3))!=null || document.getElementById('cardnum'+(i+4))!=null|| document.getElementById('cardnum'+(i+5))!=null 
            document.getElementById('rnum'+(i+1)).id='rnum'+i
            } else if(document.getElementById('rnum'+(i+2))!=null  ){
                document.getElementById('rnum'+(i+2)).id='rnum'+i
            }  else if(document.getElementById('rnum'+(i+3))!=null  ){
                document.getElementById('rnum'+(i+3)).id='rnum'+i
            }  else if(document.getElementById('rnum'+(i+4))!=null  ){
                document.getElementById('rnum'+(i+4)).id='rnum'+i
            }  else if(document.getElementById('rnum'+(i+5))!=null  ){
                document.getElementById('rnum'+(i+5)).id='rnum'+i
            }
        }
    }
    
    */
    


    /*
   let whileCounter=0;
   let realCard=0;
        for(realCard=0;realCard<robotdeck.length-1;realCard+=0){
            if(document.getElementById('rnum'+whileCounter)!=null){
        
                tempDeck.push(MyrobotDeck[realCard])
                realCard++
                whileCounter++
            }else {
                    if(document.getElementById('rnum'+(whileCounter+1))!=null){
                        console.log("reset, shift down by 1, success")
                        document.getElementById('rnum'+(whileCounter+1)).id='rnum'+(whileCounter)
                        whileCounter+=11
                        realCard+=11
                    } else if(document.getElementById('rnum'+(whileCounter+2))!=null){
                                  
                                    document.getElementById('rnum'+(whileCounter+2)).id='rnum'+(whileCounter)
                                    whileCounter+=11
                        realCard+=10
        
                                } else if(document.getElementById('rnum'+(whileCounter+3))!=null){
                                  
                                    document.getElementById('rnum'+(whileCounter+3)).id='rnum'+(whileCounter)
                                    whileCounter+=11
                        realCard+=11
        
                                } else if(document.getElementById('rnum'+(whileCounter+4))!=null){
                                  
                                    document.getElementById('rnum'+(whileCounter+4)).id='rnum'+(whileCounter)
                                    whileCounter+=11
                        realCard+=11
        
                                } else if(document.getElementById('rnum'+(whileCounter+5))!=null){
                                  
                                    document.getElementById('rnum'+(whileCounter+5)).id='rnum'+(whileCounter)
                                    whileCounter+=11
                                    realCard+=11
        
                                } else{
                                    console.log('idk man')
                                }
            
                            
                        
                
                }
            
        }
        */



}
function fsRestock(myDeck){
    let b=0
    let phydecklen=0
    if(myDeck==playerdeck){
        console.log(myDeck)
   
    while(document.getElementById("cardnum"+b)!=null){
        phydecklen++
        b++
    }
    console.log(phydecklen)
    console.log(document.getElementById('playersdeck'))
    console.log(document.getElementById('playersdeck').children.length)
    if(playerdeck.length==phydecklen){
        for(let i=0;i<playerdeck.length;i++){
            if(document.getElementById('cardnum'+i).innerHTML.length>2){
                playerdeck[i].suit=document.getElementById('cardnum'+i).innerHTML[2]
                playerdeck[i].value=10
            } else{
                playerdeck[i].suit=document.getElementById('cardnum'+i).innerHTML[1]
                playerdeck[i].value=document.getElementById('cardnum'+i).innerHTML[0]
                console.log(playerdeck[i])
            }
        }
    }
console.log(playerdeck)
}else{
    console.log(myDeck)
    //let b=0
    //let phydecklen=0
    while(document.getElementById("rnum"+b)!=null){
        phydecklen++
        b++
    }
    console.log(phydecklen)
    console.log(robotdeck.length)
    if(robotdeck.length==phydecklen){
        for(let i=0;i<robotdeck.length;i++){
            if(document.getElementById('rnum'+i).innerHTML.length>2){
                robotdeck[i].suit=document.getElementById('rnum'+i).innerHTML[2]
                robotdeck[i].value=10
            } else{
                robotdeck[i].suit=document.getElementById('rnum'+i).innerHTML[1]
                robotdeck[i].value=document.getElementById('rnum'+i).innerHTML[0]
                console.log(robotdeck[i])
            }
        }
    } else if(phydecklen<robotdeck.length){
        console.log(robotdeck.length-phydecklen)
        for(let i=0;i<robotdeck.length-phydecklen;i++){
            robotdeck.pop()
        }
        for(let i=0;i<robotdeck.length;i++){
            if(document.getElementById('rnum'+i).innerHTML.length>2){
                robotdeck[i].suit=document.getElementById('rnum'+i).innerHTML[2]
                robotdeck[i].value=10
            } else{
                robotdeck[i].suit=document.getElementById('rnum'+i).innerHTML[1]
                robotdeck[i].value=document.getElementById('rnum'+i).innerHTML[0]
                console.log(robotdeck[i])
            }
        }
    }
console.log(playerdeck)
//restock(myDeck)

}

}
function restock(myDeck){
    let tempDeck=[];
    console.log(myDeck)
   let whileCounter=0;
   let realCard=0;

   //let ifGapTemp;
if(myDeck==playerdeck){
//new
for(let i=0;i<playerdeck.length;i++){
    if(document.getElementById('cardnum'+i)==null){
        if(document.getElementById('cardnum'+(i+1))!=null  ){

        
  //  || document.getElementById('cardnum'+(i+2))!=null|| document.getElementById('cardnum'+(i+3))!=null || document.getElementById('cardnum'+(i+4))!=null|| document.getElementById('cardnum'+(i+5))!=null 
        document.getElementById('cardnum'+(i+1)).id='cardnum'+i
        } else if(document.getElementById('cardnum'+(i+2))!=null  ){
            document.getElementById('cardnum'+(i+2)).id='cardnum'+i
        }  else if(document.getElementById('cardnum'+(i+3))!=null  ){
            document.getElementById('cardnum'+(i+3)).id='cardnum'+i
        }  else if(document.getElementById('cardnum'+(i+4))!=null  ){
            document.getElementById('cardnum'+(i+4)).id='cardnum'+i
        }  else if(document.getElementById('cardnum'+(i+5))!=null  ){
            document.getElementById('cardnum'+(i+5)).id='cardnum'+i
        }
    }
}




//new
/*
for(realCard=0;realCard<playerdeck.length-1;realCard+=0){
    if(document.getElementById('cardnum'+whileCounter)!=null){

        tempDeck.push(myDeck[realCard])
        realCard++
        whileCounter++
    }else {
            if(document.getElementById('cardnum'+(whileCounter+1))!=null){
                console.log("reset, shift down by 1, success")
                document.getElementById('cardnum'+(whileCounter+1)).id='cardnum'+(whileCounter)
                whileCounter+=11
                realCard+=11
            } else if(document.getElementById('cardnum'+(whileCounter+2))!=null){
                          
                            document.getElementById('cardnum'+(whileCounter+2)).id='cardnum'+(whileCounter)
                            whileCounter+=11
                realCard+=10

                        } else if(document.getElementById('cardnum'+(whileCounter+3))!=null){
                          
                            document.getElementById('cardnum'+(whileCounter+3)).id='cardnum'+(whileCounter)
                            whileCounter+=11
                realCard+=11

                        } else if(document.getElementById('cardnum'+(whileCounter+4))!=null){
                          
                            document.getElementById('cardnum'+(whileCounter+4)).id='cardnum'+(whileCounter)
                            whileCounter+=11
                realCard+=11

                        } else if(document.getElementById('cardnum'+(whileCounter+5))!=null){
                          
                            document.getElementById('cardnum'+(whileCounter+5)).id='cardnum'+(whileCounter)
                            whileCounter+=11
                            realCard+=11

                        } else{
                            console.log('idk man')
                        }
    
                    
                
        
        }
    
}
*/
} else{
    for(let i=0;i<robotdeck.length;i++){
        if(document.getElementById('rnum'+i)==null){
            if(document.getElementById('rnum'+(i+1))!=null  ){
    
            
      //  || document.getElementById('cardnum'+(i+2))!=null|| document.getElementById('cardnum'+(i+3))!=null || document.getElementById('cardnum'+(i+4))!=null|| document.getElementById('cardnum'+(i+5))!=null 
            document.getElementById('rnum'+(i+1)).id='rnum'+i
            } else if(document.getElementById('rnum'+(i+2))!=null  ){
                document.getElementById('rnum'+(i+2)).id='rnum'+i
            }  else if(document.getElementById('rnum'+(i+3))!=null  ){
                document.getElementById('rnum'+(i+3)).id='rnum'+i
            }  else if(document.getElementById('rnum'+(i+4))!=null  ){
                document.getElementById('rnum'+(i+4)).id='rnum'+i
            }  else if(document.getElementById('rnum'+(i+5))!=null  ){
                document.getElementById('rnum'+(i+5)).id='rnum'+i
            }
        }
    }
}

console.log(tempDeck)
console.log(playerdeck)
console.log(myDeck)
for(let i=(robotdeck.length);i<6;i++){
    if(deck.cards.length>0){

    //make whole thing only if cards left
    robotdeck.push(deck.cards[0])
    deck.cards.splice(0,1)
    
   let z= document.createElement('div')
    console.log(robotdeck[i].value)
    z.innerHTML=robotdeck[i].value+robotdeck[i].suit
   document.querySelector('#robotdeck').appendChild(z)
   z.id="rnum"+i
   z.className="cardy"
   z.style.height=document.getElementById("rnum"+(i-1)).style.height
    robotnormals.push(robotdeck[i])
    }
    }
for(let i=playerdeck.length;i<6;i++){
    if(deck.cards.length>0){
        playerdeck.push(deck.cards[0])
        deck.cards.splice(0,1)
    
   
    let z= document.createElement('div')
    console.log(i)
    console.log(playerdeck)
    
    z.innerHTML=playerdeck[i].value+playerdeck[i].suit
    z.id="cardnum"+i
 //  z.setAttribute("onclick","MoveCard("+this.id+")"); slashed 12/25 10:05pm
 //cp from same tiem
 z.onclick=function MoveCard(){ 
    console.log(Ourturn)
    if(!TakingNow) {
        if(testerForMoveCard()==true){
    console.log('hey')
    console.log(z.id)
    console.log(z)
        gimmeCard=z.innerHTML[0]
if(Ourturn==true){
    console.log(toggle)
    console.log(slotsfilled)
   if(toggle%2==1){
z.style.border="8px yellow solid"
document.getElementById('card'+slotsfilled).style.border="1px dashed blue"
toggle++
} else{
z.style.border="2px black solid"
document.getElementById('card'+slotsfilled).style.border="initial"
toggle++
}
    }
} else{

if(Ourturn==true){
    console.log(toggle)
   if(toggle%2==1){

z.style.border="8px yellow solid"
HumanBeat(document.getElementById(z.id))
for(let i=0;i<slotsfilled;i++){
   // document.getElementById('rplayed'+i).style.border="4px blue dashed" may 4
}
toggle++
} else{
document.getElementById(z.id).style.border="2px black solid"
for(let i=0;i<slotsfilled;i++){
    document.getElementById('rplayed'+i).style.border="2px black solid"
}
toggle++
}
}
}} else{
    if(toggle%2==1){
        z.style.border="8px yellow solid"
        document.getElementById('card'+slotsfilled).style.border="1px dashed blue"
        toggle++
        } else{
        z.style.border="2px black solid"
        document.getElementById('card'+slotsfilled).style.border="initial"
        toggle++
        }
    console.log(takenCards)
    let zz=0; 
    for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
        
        if(document.getElementsByClassName('cardy')[i].style.borderColor=="yellow"){
            let tempid= document.getElementsByClassName('cardy')[i].id 
            for(let i=0;i<takenCards.length;i++){
                console.log(takenCards[i][0])
                console.log(document.getElementsByClassName('cardy')[i].innerHTML  )
                console.log(document.getElementById(tempid).innerHTML  )
                console.log( document.getElementsByClassName('cardy')[i].innerHTML[0] )
                if(document.getElementById(tempid).innerHTML.length==3  ) {
                    
                    if(takenCards[i][0]=="1" ){
                        Take1(document.getElementById(tempid) )
                       zz++
                    }
                } else{
                    if(takenCards[i][0]==document.getElementById(tempid).innerHTML[0] ){
                        Take1(document.getElementById(tempid) )
                        zz++
                    }
                }
            }
            if(zz==0){
                  
                document.getElementById("infobox").innerHTML="Can't give this card idiot"
            }
            
}}
 

}
}
 //cp over
    z.className="cardy"
    document.querySelector('#playersdeck').appendChild(z)
    console.log(z)
    console.log(document.getElementById("playersdeck"))
}
}
//if(playerdeck.length!=(document.getElementsByClassName('cardy').length-robotdeck.length))
if(robotdeck.length>6){
    for(let i=0;i<robotdeck.length;i++){
        console.log(document.getElementById("rnum"+i).innerHTML)
        document.getElementById("rnum"+(i)).style.height="75px"
    }
}    else{
    for(let i=0;i<robotdeck.length;i++){
        console.log(document.getElementById("rnum"+i).innerHTML)
        document.getElementById("rnum"+(i)).style.height="initial"
    }
}

}
function Gamesetup(x){
    if(x==2){
        console.log(deck.cards[deck.cards.length-1])
        for(let i=-1;i>-7;i--){
            playerdeck.push(deck.cards[deck.cards.length-1])
            deck.cards.pop()
        }
        for(let i=-1;i>-7;i--){
            robotdeck.push(deck.cards[deck.cards.length-1])
            deck.cards.pop()
        }
     
        
        
        console.log(robotdeck)
        console.log(playerdeck)
        console.log(deck.cards[deck.cards.length-1].suit)
    }
        if(deck.cards[deck.cards.length-1].suit=="♤"){
          //  document.getElementById('bottom').style.backgroundColor='yellow'
        document.getElementById('bottom').style.backgroundImage= "url('spade.jpg')"
        document.getElementById('bottom').style.backgroundSize='contain'
        document.getElementById('bottom').style.backgroundPosition='left -25px top 40px'
        document.getElementById('bottom').style.backgroundRepeat='no-repeat'
    }
        if(deck.cards[deck.cards.length-1].suit=="♡"){
           // document.getElementById('bottom').style.backgroundColor='blue'
            document.getElementById('bottom').style.backgroundImage= "url('heart.png')"
            document.getElementById('bottom').style.backgroundSize='contain'
            document.getElementById('bottom').style.backgroundPosition='left -25px top 40px'
            document.getElementById('bottom').style.backgroundRepeat='no-repeat'
        }
        if(deck.cards[deck.cards.length-1].suit=="♢"){
            //document.getElementById('bottom').style.backgroundColor='red'
            document.getElementById('bottom').style.backgroundImage= "url('diamond.png')"
            document.getElementById('bottom').style.backgroundSize='contain'
            document.getElementById('bottom').style.backgroundPosition='left -25px top 40px'
            document.getElementById('bottom').style.backgroundRepeat='no-repeat'
        }
        if(deck.cards[deck.cards.length-1].suit=="♧"){
           // document.getElementById('bottom').style.backgroundColor='red'
            document.getElementById('bottom').style.backgroundImage= "url('club.jpg')"
            document.getElementById('bottom').style.backgroundSize='contain'
            document.getElementById('bottom').style.backgroundPosition='left -25px top 40px'
            document.getElementById('bottom').style.backgroundRepeat='no-repeat'
        }
        document.getElementById("bottomvalue").innerHTML=deck.cards[deck.cards.length-1].value+deck.cards[deck.cards.length-1].suit
  for(let i=0;i<playerdeck.length;i++){
    let z= document.createElement('div')
    console.log(playerdeck[i].value)
    z.innerHTML=playerdeck[i].value+playerdeck[i].suit
    document.querySelector('#playersdeck').appendChild(z)// player taking a card
    z.id="cardnum"+i
   // z.setAttribute("onclick","MoveCard"+"(cardnum"+i+")")
   // z.setAttribute("oclick","Movecard(this.id)")  
   z.onclick=function MoveCard(){ 
    console.log(Ourturn)
    if(!TakingNow) {
        console.log("nottaking now")
    if(testerForMoveCard()==true){
    console.log('hey')
    console.log(z.id)
         gimmeCard=z.innerHTML[0]
    console.log(z)
if(Ourturn==true){
    console.log(toggle)
    console.log(slotsfilled)
    if(toggle%2==1){
        z.style.border="8px yellow solid"
        document.getElementById('card'+slotsfilled).style.border="1px dashed blue"
        toggle++
        } else{
        z.style.border="2px black solid"
        document.getElementById('card'+slotsfilled).style.border="initial"
        toggle++
        }
    }
} else{

if(Ourturn==true){
    console.log(toggle)
    
   if(toggle%2==1){
z.style.border="8px yellow solid"
HumanBeat(document.getElementById(z.id))
for(let i=0;i<slotsfilled;i++){
 //   document.getElementById('rplayed'+i).style.border="4px blue dashed"may 4
}
toggle++
} else{
document.getElementById(z.id).style.border="2px black solid"
for(let i=0;i<slotsfilled;i++){
    document.getElementById('rplayed'+i).style.border="2px black solid"
}
toggle++
}

}
}} else{
    if(toggle%2==1){
        z.style.border="8px yellow solid"
        document.getElementById('card'+slotsfilled).style.border="1px dashed blue"
        toggle++
        } else{
        z.style.border="2px black solid"
        document.getElementById('card'+slotsfilled).style.border="initial"
        toggle++
        }
    console.log(takenCards)
    let zz=0; 
    for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
        
        if(document.getElementsByClassName('cardy')[i].style.borderColor=="yellow"){
            let tempid= document.getElementsByClassName('cardy')[i].id 
            for(let i=0;i<takenCards.length;i++){
                console.log(takenCards[i][0])
                console.log(document.getElementsByClassName('cardy')[i].innerHTML  )
                console.log(document.getElementById(tempid).innerHTML  )
                console.log( document.getElementsByClassName('cardy')[i].innerHTML[0] )
                if(document.getElementById(tempid).innerHTML.length==3  ) {
                    
                    if(takenCards[i][0]=="1" ){
                        Take1(document.getElementById(tempid) )
                       zz++
                    }
                } else{
                    if(takenCards[i][0]==document.getElementById(tempid).innerHTML[0] ){
                        Take1(document.getElementById(tempid) )
                        zz++
                    }
                }
            }
            if(zz==0){
                  
                document.getElementById("infobox").innerHTML="Can't give this card idiot"
            }
            
}}
 

}
}

//z.setAttribute("onclick","HumanBeat(this.id)")
    z.className="cardy"
    console.log(z)
    console.log(document.getElementById("playersdeck"))
  }
  for(let i=0;i<robotdeck.length;i++){
  let z= document.createElement('div')
  console.log(robotdeck[i].value)
  z.innerHTML=robotdeck[i].value+robotdeck[i].suit
  document.querySelector('#robotdeck').appendChild(z)
  z.style.backgroundImage= "url('backOcard.png')";
  z.style.backgroundPosition="center";
  z.style.backgroundRepeat="no-repeat";z.style.backgroundSize="cover";
  z.style.color="transparent"
  z.id="rnum"+i
  z.className="cardy"
  robotnormals.push(robotdeck[i])
  }
  document.getElementById('deck').innerHTML=deck.cards.length
  console.log(robotnormals)
StartGame(x,deck.cards[deck.cards.length-1].suit)
}//'♡','♢','♧','♤']
function testerForMoveCard(){
    /*
    if(document.getElementById('cardplayed0')!=null){
        return false;
    }else{
        return true;
    }
    // for(let i=0;i<slotsfilled;i++){
    //     console.log(document.getElementById('rplayed'+i))
    //     console.log(document.getElementById('cardplayed'+i))
    // }
 
    if(slotsfilled>0){
        console.log(slotsfilled)
    for(let i=0;i<slotsfilled;i++){
        if(document.getElementById('rplayed'+i)!=null){
            console.log("robot did play")
            return true;
            if(document.getElementById('cardplayed'+i)==null&&document.getElementById('cplayed'+i)==null){
                console.log(false)
                return false;
            } else{
                console.log(true)
                return true;
            }
        } else{
            if(document.getElementById('cardplayed'+i)!=null&&document.getElementById('cplayed'+i)==null){
                return true;
            } else{
                return false;
            }
        }
    }
} else{
    return true;
}
*/
if(document.getElementById("card"+0).children.length==0){
    return true;
}else{
   if(document.getElementById("card"+0).children[0].id=="cardplayed0"   ){
    return true
   }
   if(document.getElementById("card"+0).children[0].id=="rplayed0"   ){
    return false
   }
}
}
function AllinOneRestock(myDeck){
    if(myDeck==playerdeck){
        console.log(playerdeck)
        console.log(playerdeck.length)
       console.log( document.getElementById('playersdeck'))
console.log(document.getElementById('playersdeck').children[0])
for(let a=0; a<myDeck.length;a++){
    //this loop should remove all cards in mydeck that aren't supposed to be
    for(let i=0;i<document.getElementById('playersdeck').children.length;i++){
       
        if(document.getElementById('playersdeck').children[i].innerHTML==(myDeck[a].value+myDeck[a].suit)){

                break;
        } else{
            if(i==(document.getElementById('playersdeck').children.length-1)){
                myDeck.splice(a,1)
                a-=1;
            }
        }

    }
}
console.log(playerdeck.length)
console.log(playerdeck)
for(let i=0;i<document.getElementById('playersdeck').children.length;i++){
    console.log( playerdeck.find((element) => element.value+element.suit ==document.getElementById('playersdeck').children[i].innerHTML)  )
    if( playerdeck.find((element) => element.value+element.suit ==document.getElementById('playersdeck').children[i].innerHTML)==undefined ){
       console.log(document.getElementById('playersdeck').children[i].innerHTML)
        if(document.getElementById('playersdeck').children[i].innerHTML.length>2){
            //const tempcard=[playerdeck[0].value,playerdeck[0].suit]
            /*
            console.log(playerdeck[0])
            console.log(tempcard)
            playerdeck.push(playerdeck[0])
            playerdeck[playerdeck.length-1].suit=document.getElementById('playersdeck').children[i].innerHTML[2]
            playerdeck[playerdeck.length-1].value=10
            console.log(playerdeck[0])
            console.log(tempcard)
            playerdeck[0].value=tempcard[0]
            playerdeck[0].suit=tempcard[1]
            console.log(playerdeck[0])
            console.log(playerdeck[playerdeck.length-1])
            
            console.log(playerdeck[0])
            playerdeck.push(playerdeck[0])
            playerdeck[playerdeck.length-1].suit=document.getElementById('playersdeck').children[i].innerHTML[2]
            playerdeck[playerdeck.length-1].value=10
            console.log(playerdeck[playerdeck.length-1])
            console.log(playerdeck[0])
            console.log(tempcard)
            playerdeck[0].value=tempcard[0]
            playerdeck[0].suit=tempcard[1]
            playerdeck[playerdeck.length-1].suit=document.getElementById('playersdeck').children[i].innerHTML[2]
            playerdeck[playerdeck.length-1].value=10
            console.log(playerdeck[playerdeck.length-1])
            */
           playerdeck.push(new Card( document.getElementById('playersdeck').children[i].innerHTML[2] ,10))
        } else{
          //  const tempcard=[playerdeck[0].value,playerdeck[0].suit]
//tempcard changes too
/*
            console.log(playerdeck[0])
            playerdeck.push(playerdeck[0])
            playerdeck[playerdeck.length-1].suit=document.getElementById('playersdeck').children[i].innerHTML[1]
            playerdeck[playerdeck.length-1].value=document.getElementById('playersdeck').children[i].innerHTML[0]
            console.log(playerdeck[playerdeck.length-1])
            console.log(playerdeck[0])
            console.log(tempcard)
           
            playerdeck[0].value=tempcard[0]
            playerdeck[0].suit=tempcard[1]
            playerdeck[playerdeck.length-1].suit=document.getElementById('playersdeck').children[i].innerHTML[1]
            playerdeck[playerdeck.length-1].value=document.getElementById('playersdeck').children[i].innerHTML[0]
           */
            playerdeck.push(new Card( document.getElementById('playersdeck').children[i].innerHTML[1] ,document.getElementById('playersdeck').children[i].innerHTML[0]))
            console.log(playerdeck[playerdeck.length-1])

        }
    }
}
console.log(playerdeck)
console.log(playerdeck.length)
for(let i=0;i<document.getElementById('playersdeck').children.length;i++){
    document.getElementById('playersdeck').children[i].id='cardnum'+i;
}
console.log(playerdeck)
console.log(playerdeck.length)
//ids are all good
console.log( document.getElementById('playersdeck').children.length )
for(let i= document.getElementById('playersdeck').children.length;i<6;i++){
//cp
if(deck.cards.length>0){
    playerdeck.push(deck.cards[0])
    deck.cards.splice(0,1)
document.getElementById("deck").innerHTML-=1;

let z= document.createElement('div')
console.log(i)
console.log(playerdeck)

z.innerHTML=playerdeck[i].value+playerdeck[i].suit
z.id="cardnum"+i
//  z.setAttribute("onclick","MoveCard("+this.id+")"); slashed 12/25 10:05pm
//cp from same tiem
z.onclick=function MoveCard(){ 
     gimmeCard=z.innerHTML[0]
    console.log(Ourturn)
    if(!TakingNow) {if(testerForMoveCard()==true){
    console.log('hey')
    console.log(z.id)
    console.log(z)
if(Ourturn==true){
    console.log(toggle)
    console.log(slotsfilled)
   if(toggle%2==1){
z.style.border="8px yellow solid"
document.getElementById('card'+slotsfilled).style.border="1px dashed blue"
toggle++
} else{
z.style.border="2px black solid"
document.getElementById('card'+slotsfilled).style.border="initial"
toggle++
}
    }
} else{

if(Ourturn==true){
    console.log(toggle)
   if(toggle%2==1){

z.style.border="8px yellow solid"
HumanBeat(document.getElementById(z.id))
for(let i=0;i<slotsfilled;i++){
   // document.getElementById('rplayed'+i).style.border="4px blue dashed" may 4
}
toggle++
} else{
document.getElementById(z.id).style.border="2px black solid"
for(let i=0;i<slotsfilled;i++){
    document.getElementById('rplayed'+i).style.border="2px black solid"
}
toggle++
}
}
}} else{
    if(toggle%2==1){
        z.style.border="8px yellow solid"
        document.getElementById('card'+slotsfilled).style.border="1px dashed blue"
        toggle++
        } else{
        z.style.border="2px black solid"
        document.getElementById('card'+slotsfilled).style.border="initial"
        toggle++
        }
    console.log(takenCards)
    let zz=0; 
    for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
        
        if(document.getElementsByClassName('cardy')[i].style.borderColor=="yellow"){
            let tempid= document.getElementsByClassName('cardy')[i].id 
            for(let i=0;i<takenCards.length;i++){
                console.log(takenCards[i][0])
                console.log(document.getElementsByClassName('cardy')[i].innerHTML  )
                console.log(document.getElementById(tempid).innerHTML  )
                console.log( document.getElementsByClassName('cardy')[i].innerHTML[0] )
                if(document.getElementById(tempid).innerHTML.length==3  ) {
                    
                    if(takenCards[i][0]=="1" ){
                        Take1(document.getElementById(tempid) )
                       zz++
                    }
                } else{
                    if(takenCards[i][0]==document.getElementById(tempid).innerHTML[0] ){
                        Take1(document.getElementById(tempid) )
                        zz++
                    }
                }
            }
            if(zz==0){
                  
                document.getElementById("infobox").innerHTML="Can't give this card idiot"
            }
            
}}
 

}
}
//cp over
z.className="cardy"
document.querySelector('#playersdeck').appendChild(z)
if(playerdeck.length<=6){
    for(let i=0;i<playerdeck.length;i++){
       // console.log(document.getElementById("rnum"+i).innerHTML)
      //  document.getElementById("cardnum"+(i)).style.height="90%"
    }
}else{
    document.getElementById("cardnum"+(i)).style.height -(.8* (document.getElementById('cardnum'+i).style.height-2*(Math.ceil(playerdeck.length/8)-5)))+'px'
}
console.log(z)
console.log(document.getElementById("playersdeck"))
} else{
   // document.getElementById("parentdeck").style.visibility="hidden"
}
//cpover
}
    }else{
        console.log(robotdeck)
        console.log(document.getElementById('robotdeck'))
        console.log(document.getElementById('robotdeck').children[0])
        for(let a=0; a<myDeck.length;a++){
            //this loop should remove all cards in mydeck that aren't supposed to be
            for(let i=0;i<document.getElementById('robotdeck').children.length;i++){
                if(document.getElementById('robotdeck').children[i].innerHTML==(myDeck[a].value+myDeck[a].suit)){
                        break;
                } else{
                    if(i==(document.getElementById('robotdeck').children.length-1)){
                        myDeck.splice(a,1)
                        a-=1;
                    }
                }
               
        
            }
            
        }
        
      //  if(i<document.getElementById('robotdeck').children.length>robotdeck.length  ){
         //   let f=document.getElementById('robotdeck').children.length-robotdeck.length;
          //  for(let i=0;i<f;i++){
          //      robotdeck.push(robotdeck[0])
            //}
       // }
        console.log(robotdeck)
        for(let i=0;i<document.getElementById('robotdeck').children.length;i++){
            if( robotdeck.find((element) => element.value+element.suit ==document.getElementById('robotdeck').children[i].innerHTML)==undefined ){
                console.log(robotdeck.find((element) => element.value+element.suit ==document.getElementById('robotdeck').children[i].innerHTML)  )
                if(document.getElementById('robotdeck').children[i].innerHTML.length>2){
                    robotdeck.push(new Card( document.getElementById('robotdeck').children[i].innerHTML[2] ,10))
                   // robotdeck[robotdeck.length-1].suit=document.getElementById('robotdeck').children[i].innerHTML[2]
            //robotdeck[robotdeck.length-1].value=10
           // console.log(playerdeck[playerdeck.length-1])
                   
                } else{
                    robotdeck.push(new Card( document.getElementById('robotdeck').children[i].innerHTML[1] ,document.getElementById('robotdeck').children[i].innerHTML[0]))
                   // robotdeck[robotdeck.length-1].suit=document.getElementById('robotdeck').children[i].innerHTML[1]
           // robotdeck[robotdeck.length-1].value=document.getElementById('robotdeck').children[i].innerHTML[0]
                }
            }
        }
        console.log(document.getElementById('robotdeck'))
        for(let i=0;i<document.getElementById('robotdeck').children.length;i++){
            console.log(i)
            console.log(document.getElementById('robotdeck').children[i])
            document.getElementById('robotdeck').children[i].id='rnum'+i;
        }
        //ids are all good
        console.log( document.getElementById('robotdeck') )
        console.log( document.getElementById('robotdeck').children.length )
        console.log(robotdeck.length)
        for(let i= document.getElementById('robotdeck').children.length;i<6;i++){
//cp
if(deck.cards.length>0){
    console.log(i)
   
console.log(robotdeck)
    //make whole thing only if cards left
    robotdeck.push(deck.cards[0]) //same
    deck.cards.splice(0,1)//same
    
    document.getElementById("deck").innerHTML-=1;
    console.log(robotdeck)
    console.log(robotdeck.length)
   let z= document.createElement('div')
    console.log(robotdeck[i].value)
    z.innerHTML=robotdeck[i].value+robotdeck[i].suit
   document.querySelector('#robotdeck').appendChild(z)
   
   z.style.backgroundImage= "url('backOcard.png')";
   z.style.backgroundPosition="center";
   z.style.backgroundRepeat="no-repeat";z.style.backgroundSize="cover";
   z.style.color="transparent"
   z.id="rnum"+(i)
   z.className="cardy"
    robotnormals.push(robotdeck[i])
    if(robotdeck.length>6){
        for(let i=0;i<robotdeck.length;i++){
            console.log(document.getElementById("rnum"+i).innerHTML)
            document.getElementById("rnum"+(i)).style.height="75px"
        }
    }    else{
        for(let i=0;i<robotdeck.length;i++){
            console.log(document.getElementById("rnum"+i).innerHTML)
            document.getElementById("rnum"+(i)).style.height="initial"
        }
    }
    }
//cp

        }
 
    }
}
function robotProvide(){

    console.log("PROVIDENCE")
    setTimeout(() => {
if(playerdeck.length>0){
    Ourturn=true
let ww=[]
let ops=[]
let kops=[]
console.log(slotsfilled)
for(let i=0;i<slotsfilled;i++){
document.getElementById('rplayed'+i).style.border="2px solid black"
ww.push(document.getElementById('rplayed'+i).innerHTML[0])
ww.push(document.getElementById('cplayed'+i).innerHTML[0])
}

//fsRestock(robotdeck)
console.log(ww)
console.log(robotdeck)
console.log(robotdeck.length)
for(let i=0;i<robotdeck.length;i++){
    console.log(robotdeck[i])
    console.log(robotdeck[i].value.toString())
    if(ww.includes(robotdeck[i].value.toString()[0])==true){
        ops.push(robotdeck[i])
    }
}
for(let i=0;i<ops.length;i++){
    //console.log(ops[i].suit)
    if(ops[i].suit==kozar){
        kops.push(ops[i])
        ops.splice(i,1)
        if( ops[i]!=undefined&& ops[i].suit==kozar  ){
            kops.push(ops[i])
            ops.splice(i,1)
            if( ops[i]!=undefined &&ops[i].suit==kozar  ){
                kops.push(ops[i])
                ops.splice(i,1)
                if( ops[i]!=undefined&&ops[i].suit==kozar  ){
                    kops.push(ops[i])
                    ops.splice(i,1)
                    if(ops[i]!=undefined&&ops[i].suit==kozar   ){
                        kops.push(ops[i])
                        ops.splice(i,1)
                    }
                }
            }
        }
    }
}
ops.sort()
console.log(ops)
console.log(kops)
if(ops.length>0){
    //
    let index
   
    for(let i=0;i<robotdeck.length;i++){
        if(robotdeck[i]==ops[0]){
              index=i
             
            
        }
      
    }

    for(let i=(index+1);i<(robotdeck.length+1);i++){
        console.log(document.getElementById('rnum'+i))
        if(document.getElementById('rnum'+i)!=null){
        document.getElementById('rnum'+i).id='rnum'+(i-1)}
    }
    
     console.log( document.getElementById('rnum'+index)  )
     console.log( document.getElementById('rnum'+(robotdeck.indexOf(ops[0]))) )
     for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
        if(document.getElementsByClassName('cardy')[i]== document.getElementById('rnum'+(robotdeck.indexOf(ops[0]))) ){

            console.log('converted')
             idToClass=i; 
             console.log(document.getElementsByClassName('cardy')[idToClass])
        }
     }
     //altidtoclass works, not idtoclass
     console.log(document.getElementsByClassName('cardy')[idToClass] )
     for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
            if( document.getElementsByClassName('cardy')[i].innerHTML==(ops[0].value+ops[0].suit) ){
                altidToClass=i;
            } else{
                console.log(document.getElementsByClassName('cardy')[i].innerHTML)
                console.log(ops[0].value+ops[0].suit)
            }
     }
    // document.getElementsByClassName('cardy')[altidToClass].style.width='50%'
  //   document.getElementsByClassName('cardy')[altidToClass].style.height='250px'
   console.log( document.getElementsByClassName('cardy')[altidToClass].style.position )
    // document.getElementsByClassName('cardy')[altidToClass].style.position='relative' ??
     //document.getElementsByClassName('cardy')[altidToClass].style.top='75px'
     document.getElementsByClassName('cardy')[altidToClass].id='rplayed'+(slotsfilled)
    // document.getElementById('rnum'+(index)).id='rplayed'+(slotsfilled)
     //document.getElementById('rnum'+(robotdeck.indexOf(ops[0]))).id='rplayed'+(slotsfilled)
     console.log(document.getElementById('rplayed'+(slotsfilled)))  
     document.getElementsByClassName('cardy')[altidToClass].style.color="none"
    document.getElementsByClassName('cardy')[altidToClass].style.backgroundImage="none" 
     console.log(document.getElementsByClassName('cardy')[idToClass] )
   
     document.getElementById('card'+(slotsfilled)).appendChild(document.getElementsByClassName('cardy')[altidToClass])
    // document.getElementById('card'+(slotsfilled)).children[0].style.height="63%"  
     //document.getElementById('card'+(slotsfilled)).children[0].style.marginTop="37%"  
     document.getElementById('card'+(slotsfilled)).children[0].style.width="70%"
     document.getElementById('card'+(slotsfilled)).children[0].style.height="90%"
     document.getElementById('card'+(slotsfilled)).children[0].style.border="2px black solid"
     document.getElementById('card'+(slotsfilled)).children[0].style.backgroundImage="none"
     document.getElementById('card'+(slotsfilled)).children[0].style.color="black"

     document.getElementById('card'+slotsfilled).style.position="initial"
    console.log(document.getElementById('rplayed'+(slotsfilled)))
    console.log(ops[0])
    //for(let i=0;i)
    console.log(robotdeck.indexOf(ops[0]))
    console.log( document.getElementById('rnum'+(robotdeck.indexOf(ops[0]))) )
    robotdeck.splice(robotdeck.indexOf(ops[0]),1)
    console.log(robotdeck)
    console.log(document.getElementById('rplayed'+(slotsfilled)))  
    //TakingNow=true;
    //document.getElementById('card'+(slotsfilled)).appendChild(document.getElementById('rplayed'+(slotsfilled)))
//robotDeckRestock(robotdeck)
//sRestock(robotdeck)
    slotsfilled++
  //HumanBeat(document.getElementById('rplayed'+(slotsfilled)))
   //PUT HERE
   //AllinOneRestock(robotdeck)
  
} else{
      
    document.getElementById("infobox").innerHTML="Round over, your turn"
    for(let i=0;i<slotsfilled;i++){
        document.getElementById('cplayed'+i).remove()
        document.getElementById('rplayed'+i).remove()
    }

trash+=(slotsfilled*2)
document.getElementById('Trash').innerHTML='TRASH: '+trash
//document.getElementById('deck').innerHTML-=slotsfilled*2 check
for(let i=0;i<6;i++){
    document.getElementById("card"+i).style.borderWidth="0px"
}
slotsfilled=0
console.log(playerdeck)
//fsRestock(playerdeck)
//fsRestock(robotdeck)
//robotDeckRestock(robotdeck)
//restock(robotdeck)
console.log(document.getElementById('robotdeck'))
Ourturn=true
console.log(slotsfilled)
console.log(playerdeck)
for(let j=0;j<slotsfilled;j++){
for(let i=0;i<playerdeck;i++){
    if((playerdeck[i].value+playerdeck[i].suit)==document.getElementById('cplayed'+j).innerHTML){
        console.log('fin')
        console.log(playerdeck[i])
        //playerdeck.splice(i,1)
    }
}
}

console.log(deck.cards)
console.log(robotdeck)
console.log(playerdeck)
let op=playerdeck.length
let or=robotdeck.length
//for(let i=op;i<6;i++){
  //  playerdeck.push(deck.cards[0])
  //  deck.cards.splice(0,1)
///}
//for(let i=or;i<6;i++){
  //  robotdeck.push(deck.cards[0])
  //  deck.cards.splice(0,1)
//    }
//cp
console.log(op)
for(let i=(op);i<playerdeck.length;i++){
    let z= document.createElement('div')
    console.log(playerdeck[i].value)
    z.innerHTML=playerdeck[i].value+playerdeck[i].suit
    document.querySelector('#playersdeck').appendChild(z)
    slotsfilled++
    z.id="cardnum"+i
   // z.setAttribute("oclick","Movecard(this.id)")
   //z.setAttribute("onclick","MoveCard("+this.id+")"); slash out 12/25 10:06 pm
//cp from same tiem
z.onclick=function MoveCard(){ 
    console.log(Ourturn)
    if(!TakingNow) {if(testerForMoveCard()==true){
    console.log('hey')
    console.log(z.id)
    console.log(z)
if(Ourturn==true){
    console.log(toggle)
    console.log(slotsfilled)
   if(toggle%2==1){
z.style.border="8px yellow solid"
document.getElementById('card'+slotsfilled).style.border="1px dashed blue"
toggle++
} else{
z.style.border="2px black solid"
document.getElementById('card'+slotsfilled).style.border="initial"
toggle++
}
    }
} else{

if(Ourturn==true){
    console.log(toggle)
   if(toggle%2==1){

z.style.border="8px yellow solid"
HumanBeat(document.getElementById(z.id))

for(let i=0;i<slotsfilled;i++){
 //   document.getElementById('rplayed'+i).style.border="4px blue dashed" may 4
}
toggle++
} else{
document.getElementById(z.id).style.border="2px black solid"
for(let i=0;i<slotsfilled;i++){
    document.getElementById('rplayed'+i).style.border="2px black solid"
}
toggle++
}
}
}} else{
    if(toggle%2==1){
        z.style.border="8px yellow solid"
        document.getElementById('card'+slotsfilled).style.border="1px dashed blue"
        toggle++
        } else{
        z.style.border="2px black solid"
        document.getElementById('card'+slotsfilled).style.border="initial"
        toggle++
        }
    console.log(takenCards)
    let zz=0; 
    for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
        
        if(document.getElementsByClassName('cardy')[i].style.borderColor=="yellow"){
            let tempid= document.getElementsByClassName('cardy')[i].id 
            for(let i=0;i<takenCards.length;i++){
                console.log(takenCards[i][0])
                console.log(document.getElementsByClassName('cardy')[i].innerHTML  )
                console.log(document.getElementById(tempid).innerHTML  )
                console.log( document.getElementsByClassName('cardy')[i].innerHTML[0] )
                if(document.getElementById(tempid).innerHTML.length==3  ) {
                    
                    if(takenCards[i][0]=="1" ){
                        Take1(document.getElementById(tempid) )
                       zz++
                    }
                } else{
                    if(takenCards[i][0]==document.getElementById(tempid).innerHTML[0] ){
                        Take1(document.getElementById(tempid) )
                        zz++
                    }
                }
            }
            if(zz==0){
                  
                document.getElementById("infobox").innerHTML="Can't give this card idiot"
            }
            
}}
 

}
}
 //cp over
    z.className="cardy"
    console.log(z)
    console.log(document.getElementById("playersdeck"))
  }
  for(let i=(or);i<robotdeck.length;i++){
    let z= document.createElement('div')
    console.log(robotdeck[i].value)
    z.innerHTML=robotdeck[i].value+robotdeck[i].suit
    document.querySelector('#robotdeck').appendChild(z)
    z.style.backgroundImage= "url('backOcard.png')";
    z.style.backgroundPosition="center";
    z.style.backgroundRepeat="no-repeat";z.style.backgroundSize="cover";
    z.style.color="transparent"
    slotsfilled++
    z.id="rnum"+i
    z.className="cardy"
    robotnormals.push(robotdeck[i])
    }
//cpends
if(robotdeck.length==0){

    document.getElementById("infobox").innerHTML="You lost!"

isGameover=true

}

console.log(playerdeck.length)
//Start()
console.log(document.getElementById('robotdeck'))
AllinOneRestock(robotdeck) 
AllinOneRestock(playerdeck)
if(robotdeck.length>6){
    for(let i=0;i<robotdeck.length;i++){
        console.log(document.getElementById("rnum"+i).innerHTML)
        document.getElementById("rnum"+(i)).style.height="75px"
    }
}    else{
    for(let i=0;i<robotdeck.length;i++){
        console.log(document.getElementById("rnum"+i).innerHTML)
        document.getElementById("rnum"+(i)).style.height="initial"
    }
}
console.log(playerdeck)
}
}else{
    console.log("game over")
      
    document.getElementById("infobox").innerHTML="You won!"
    isGameover=true
    setTimeout(function(){
       GameOver()
    }, 1000);
    return;
}
}, "1000");
}
function Movecard2(id){
    console.log(id)
    console.log(document.getElementById(id).innerHTML)
        if(testerForMoveCard()==true){
    console.log(id)
    console.log('hey')
        if(Ourturn==true){
            if(slotsfilled==0){
            console.log(toggle)
           if(toggle%2==1){
        document.getElementById(id).style.border="8px yellow solid"
        document.getElementById('card'+slotsfilled).style.border="1px dashed blue"
    toggle++
    } else{
        document.getElementById(id).style.border="2px black solid"
        document.getElementById('card'+slotsfilled).style.border="initial"
        toggle++
    }
            }else{
                
                let ww=[]
                let wwredlist=[]
                console.log(slotsfilled)
                for(let i=0;i<(slotsfilled);i++){
                    if(document.getElementById('cardplayed'+i).style.border=="1px dashed blue"  ){
                        document.getElementById('cardplayed'+i).style.border="initial"
                    }
                    console.log(document.getElementById('cplayed'+i))
                    console.log(document.getElementById('rplayed'+i))
                    let wwelement= (document.getElementById('cplayed'+i).innerHTML)
                    wwelement=(wwelement.slice(0,wwelement.length-1))
                    ww.push(wwelement)
                    let wwred=document.getElementById('rplayed'+i).innerHTML
                    wwred=(wwred.slice(0,wwred.length-1))
                    wwredlist.push(wwred)
                }
                console.log(wwredlist)
                console.log(ww)
                for(let i=0;i<(slotsfilled+1);i++){
                    for(let j=0;j<document.getElementsByClassName('cardy').length;j++){
                        if(document.getElementsByClassName('cardy')[j].style.borderColor=="yellow"){
                           let wwyellow=document.getElementsByClassName('cardy')[j].innerHTML
                           wwyellow=(wwyellow.slice(0,wwyellow.length-1))
                             console.log("damn"+wwyellow)
                            wwyellow=gimmeCard
                        
                            if(wwyellow==ww[i]||wwyellow==wwredlist[i]){
                              //  document.getElementsByClassName('cardy')[j].style.height='230px'
                                 document.getElementsByClassName('cardy')[j].style.border="black 2px solid"
                                document.querySelector('#card'+slotsfilled).style.width='130px'
                                console.log(playerdeck[i].suit)
                                for(let i=0;i<playerdeck.length;i++){
                                    if(document.querySelector('#card'+slotsfilled).innerHTML.length>2){
                                        if(playerdeck[i].suit==document.querySelector('#card'+slotsfilled).innerHTML[2]&&playerdeck[i].value==10){
                                            console.log(playerdeck[i])
                                          //  playerdeck.splice(i,1)
                                            
                                        }
                                    } else if(playerdeck[i].suit==document.querySelector('#card'+slotsfilled).innerHTML[1]&&(document.querySelector('#card'+slotsfilled).innerHTML[0]-0)==6||(document.querySelector('#card'+slotsfilled).innerHTML[0]-0)==7||(document.querySelector('#card'+slotsfilled).innerHTML[0]-0)==8||(document.querySelector('#card'+slotsfilled).innerHTML[0]-0)==9){
                                        console.log(playerdeck[i])
                                       // playerdeck.splice(i,1)
                                            
                                        
                                    } else if(playerdeck[i].suit==document.getElementById('card'+slotsfilled).innerHTML[1]&&playerdeck[i].value==(document.getElementById('card'+slotsfilled).innerHTML[0])){
                                        console.log(playerdeck[i])
                                      //  playerdeck.splice(i,1)  
                                                                      
                                    }
                                }
                                console.log(j+" "+i)
                                document.getElementsByClassName('cardy')[j].id='cardplayed'+slotsfilled
                         document.getElementById('cardplayed'+slotsfilled).style.height='250px'
                                document.querySelector('#card'+slotsfilled).appendChild(document.getElementsByClassName('cardy')[j])
                             document.getElementById('card'+slotsfilled).style.border="initial"
                             slotsfilled++
                            toggle++
                            Ourturn=false
                            RobotTurn(document.getElementsByClassName('cardy')[i].innerHTML)
                            } else{
                                console.log(ww[i])
                                console.log(wwredlist[i])
                                  
                                document.getElementById('infobox').innerHTML="Can't play this card"
                            }
                    
                        }}
                }
        
            }}
} else{
    HumanBeat(document.getElementById(id))
    if(Ourturn==true){
        console.log(toggle)
     //   console.log(slotsfilled)
       if(toggle%2==1){
    document.getElementById(z.id).style.border="8px yellow solid"
   

toggle++
} else{
    document.getElementById(z.id).style.border="2px black solid"
   
    toggle++
}
    }
}
}
function GiveExtra(){
    TakingNow=true
    let abbreviatedOptions=[]
    for(let i=0;i<takenCards.length;i++){
        if(takenCards[i].substring(0,1)=="1"){
            if(i<takenCards.length-1){
             abbreviatedOptions.push(takenCards[i].substring(0,2))
                }else{
                abbreviatedOptions.push(takenCards[i].substring(0,2))
                }
        }else{
        if(i<takenCards.length-1){
        abbreviatedOptions.push(takenCards[i].substring(0,1))
        }else{
            abbreviatedOptions.push(takenCards[i].substring(0,1))
        }
    }
    }
    let unique = uniq(abbreviatedOptions)
    let abbreviatedOptionsString=""
    console.log(unique)
    for(let i=0;i<unique.length;i++){
        if(i<unique.length-1){
            abbreviatedOptionsString+=unique[i]+", "
               }else{
               abbreviatedOptionsString+=unique[i]
               }
    }
   
    document.getElementById("infobox").style.lineHeight="1"
 document.getElementById("infobox").innerHTML="You can choose up to "+rox+" cards ("+abbreviatedOptionsString+") to give. Press 'Stop Playing' to stop giving cards"
        
 
}
function AddGiven(){
    let msg="";
    console.log( document.getElementById('robotdeck').children )
    console.log(chosenGiven)
    if(chosenGiven.length>0){
    for(let i=0;i<document.getElementById('robotdeck').children.length;i++){
        for(let j=0;j<chosenGiven.length;j++){
            console.log(chosenGiven[j])
            console.log(document.getElementById('robotdeck').children[i])
        if(document.getElementById('robotdeck').children[i].innerHTML.substring(0,1)==chosenGiven[j]){
            
            robotdeck.splice(i,1)
            msg+= document.getElementById('robotdeck').children[i].innerHTML+" "
            HumanTake(document.getElementById('robotdeck').children[i])
        }
    
    }
    }
    document.getElementById("infobox").innerHTML="The robot also gave you "+msg
}

}
function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}
function RobotGiveExtra(){
    //let cardLength=2;
    console.log(takenCards2[0])
    for(let i=0;i<robotdeck.length;i++){
        
        let x=robotdeck[i].value.toString().substring(0,1)
        if(robotdeck[i].suit!=kozar||deck.cards.length<2){
        for(let j=0;j<takenCards2.length;j++){
            console.log(x)
        if(x==takenCards2[j].substring(0,1)){
            if((!(x==Ace||x==King||x==Queen))||deck.cards.length<12){
                    console.log(takenCards2[j].substring(0,1))
                    chosenGiven.push(x)

                
            }
        }
    }
}else{
    //no give
}
    }
 
}
/*
 function HTMove(card, og, goal){
  var xpos = Math.round(og.x);
  var ypos=Math.round(og.y);
  var ix=null
  console.log("F")
  console.log(Math.round(goal.x)+" "+Math.round(goal.y))
  goal.x=Math.round(goal.x)
  goal.y=Math.round(goal.y)

    while (!( Math.abs(xpos-goal.x)<10&& Math.abs(ypos-goal.y)<10)) {
     
    
        console.log("x")
      if(xpos==goal.x){
        xpos=xpos
      }
      if(xpos<goal.x){
        xpos+=2
      }else{
        xpos-=2
      } if(ypos==goal.y){
        ypos=ypos
      }
      if(ypos<goal.y){
        ypos+=2
      }else{
        ypos-=2
      }
      card.style.x = xpos; 
      card.style.y = ypos; 
      setTimeout(() => {
        console.log("Delayed for .1 second.");
      }, "1000");
    }
  

}*/
function MoveCard(id){
   //console.log(id)
    //console.log(document.getElementById(id).innerHTML)
    console.log(playerdeck)
    testerForMoveCard()
    console.log(testerForMoveCard())
    if(!TakingNow){
    if(testerForMoveCard()==true){
        console.log(Ourturn)
    if(Ourturn==true){
        //start of c&p from movecard2 dec 25 10pm
        console.log("fu")
        if(document.getElementById(id).parentElement=="parentsdeck"){
        if(toggle%2==1){
     document.getElementById(id).style.border="8px yellow solid"
     document.getElementById('card'+slotsfilled).style.border="1px dashed blue"
 toggle++
 } else{
     document.getElementById(id).style.border="2px black solid"
     document.getElementById('card'+slotsfilled).style.border="initial"
     toggle++
 }
}
//end of cp
        if(slotsfilled==0){
            
            console.log(document.getElementsByClassName('cardy'))
           
for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
   // slashing out  if(document.getElementsByClassName('cardy')[i].style.borderColor=="yellow"){} so new cards caan be played.12/25 9:46 
   if(document.getElementsByClassName('cardy')[i].style.borderColor=="yellow"){
       // document.getElementsByClassName('cardy')[i].style.height='230px'
        document.getElementsByClassName('cardy')[i].style.border="black 2px solid"
      document.querySelector('#card'+slotsfilled).style.width='130px'
        document.getElementsByClassName('cardy')[i].id='cardplayed'+slotsfilled
        document.getElementById('cardplayed'+slotsfilled).style.height='250px'
        console.log(document.getElementById('cardplayed'+slotsfilled).innerHTML)
        console.log(document.getElementById('cardplayed'+slotsfilled).innerHTML[1])
        console.log(document.getElementById('cardplayed'+slotsfilled).innerHTML.length)
       // console.log(playerdeck[1].suit)
        if(document.getElementById('cardplayed'+slotsfilled).innerHTML.length>2){
            
               console.log(document.getElementById('cardplayed'+slotsfilled).innerHTML) 
            for(let i=0;i<playerdeck.length;i++){
                if(playerdeck[i].suit==document.getElementById('cardplayed'+slotsfilled).innerHTML[2]&&playerdeck[i].value==10){
                    console.log(playerdeck[i])
                    playerdeck.splice(i,1)
                    
                    console.log('splice and dice'+i)  
                    for(let j=(i+1);j<(6);j++){
                        console.log(document.getElementById('cardnum'+j))
                        if(document.getElementById('cardnum'+j)!=null){
                           
                        document.getElementById('cardnum'+j).id='cardnum'+(j-1)}
                    }
               console.log(playerdeck) 
                }
            }
        }else if((document.getElementById('cardplayed'+slotsfilled).innerHTML[0]-0)==6||(document.getElementById('cardplayed'+slotsfilled).innerHTML[0]-0)==7||(document.getElementById('cardplayed'+slotsfilled).innerHTML[0]-0)==8||(document.getElementById('cardplayed'+slotsfilled).innerHTML[0]-0)==9) {
            for(let i=0;i<playerdeck.length;i++){
                //if(playerdeck[i].suit==document.getElementById('cardplayed'+slotsfilled).innerHTML[1]&&playerdeck[i].value==(document.getElementById('cardplayed'+slotsfilled).innerHTML[0]-0))
        if((playerdeck[i].value+playerdeck[i].suit)==document.getElementById('cardplayed'+slotsfilled).innerHTML){
                        console.log(playerdeck[i])
                        playerdeck.splice(i,1) 
                       console.log(document.getElementById('cardnum'+0))
                    console.log('splice and dice'+i)  
                    for(let j=(i+1);j<(6);j++){
                        console.log(document.getElementById('cardnum'+j))
                        if(document.getElementById('cardnum'+j)!=null){
                           
                        document.getElementById('cardnum'+j).id='cardnum'+(j-1)}
                    }
                    console.log(playerdeck[i])
                  
               console.log(playerdeck)           }      
                }
                        } else{ 
                            for(let i=0;i<playerdeck.length;i++){
                            if(playerdeck[i].suit==document.getElementById('cardplayed'+slotsfilled).innerHTML[1]&&playerdeck[i].value==(document.getElementById('cardplayed'+slotsfilled).innerHTML[0])){
                                
                                console.log(playerdeck[i])
                                playerdeck.splice(i,1) 
                                for(let j=(i+1);i<(6);i++){
                                    console.log(document.getElementById('cardnum'+j))
                                    if(document.getElementById('cardnum'+j)!=null){
                                       
                                    document.getElementById('cardnum'+j).id='cardnum'+(j)}
                                }
                                            console.log('splice and dice'+i)  
                                       console.log(playerdeck)           }      
                                                          
                                                }}
        console.log(document.getElementsByClassName('cardy')[i] )
        document.querySelector('#card'+slotsfilled).appendChild(document.getElementsByClassName('cardy')[i])
        console.log(playerdeck)
        // for(let x=0;x<playerdeck.length;x++){
        //     console.log(playerdeck[x].value+playerdeck[x].suit)
        //     console.log(i)
        //     console.log(document.getElementsByClassName('cardy')[i])
        //     console.log(document.getElementsByClassName('cardy')[i].innerHTML)
        //     if(playerdeck[x].value+playerdeck[x].suit==(document.getElementsByClassName('cardy')[i].innerHTML)){
        //         console.log(playerdeck[x].value+playerdeck[x].suit)
        //         playerdeck.splice(x,1)
        //     }
        // }// deleted this code, now i get 6 cards???????? good ig eta: onl if i play 1 card
        document.getElementById('card'+slotsfilled).style.border="initial"
        slotsfilled++
        console.log(playerdeck)
        toggle++
        Ourturn=false
        RobotTurn(document.getElementsByClassName('cardy')[i].innerHTML)
        
    
}}
    } else{
        console.log( document.getElementById('cardplayed'+0) )
        if(document.getElementById('cardplayed'+0)!=null){
        let ww=[]
        let wwredlist=[]
        console.log(slotsfilled)
       
            for(let i=0;i<(slotsfilled);i++){
            console.log(document.getElementById('cardplayed'+i))
                if(document.getElementById('cardplayed'+i).style.border=="1px dashed blue"  ){
                    document.getElementById('cardplayed'+i).style.border="initial"
                }
            console.log(document.getElementById('rplayed'+i))
            let wwelement= (document.getElementById('cardplayed'+i).innerHTML)
            wwelement=(wwelement.slice(0,wwelement.length-1))
            ww.push(wwelement)
            let wwred=document.getElementById('rplayed'+i).innerHTML
            wwred=(wwred.slice(0,wwred.length-1))
            wwredlist.push(wwred)
            }
        
        console.log(wwredlist)
        console.log(ww)
        
       // console.log(document.getElementById('card'+slotsfilled).innerHTML[tempLastIndex])
        for(let i=0;i<(slotsfilled);i++){
            for(let j=0;j<document.getElementsByClassName('cardy').length;j++){
                console.log(document.getElementsByClassName('cardy')[j].innerHTML)
               
                   let wwyellow=document.getElementsByClassName('cardy')[j].innerHTML
                   wwyellow=(wwyellow.slice(0,wwyellow.length-1))
                    console.log("damn"+wwyellow)
                    wwyellow=gimmeCard
                   console.log(wwyellow)
                 console.log(ww[i])
                 console.log(wwredlist[i])
                    if(wwyellow==ww[i]||wwyellow==wwredlist[i]||ww[i].includes(wwyellow)||wwredlist[i].includes(wwyellow)){
                      //  document.getElementsByClassName('cardy')[j].style.height='230px'
                         document.getElementsByClassName('cardy')[j].style.border="black 2px solid"
                        document.querySelector('#card'+slotsfilled).style.width='130px'
                        console.log(playerdeck[i].suit)
                         
                        
                          
                        
                        console.log(j+" "+i)
                        console.log( document.getElementsByClassName('cardy')[j] )
                        for(let i=0;i<playerdeck.length;i++){
                            if( (playerdeck[i].value+playerdeck[i].suit)== document.getElementsByClassName('cardy')[j].innerHTML ){
                                console.log(playerdeck[i])
                                playerdeck.splice(i,1)
                            }
                        }
                      //  playerdeck.splice(playerdeck.indexOf())
                        document.getElementsByClassName('cardy')[j].id='cardplayed'+slotsfilled
                        document.getElementById('cardplayed'+slotsfilled).style.height='250px'
                        document.querySelector('#card'+slotsfilled).appendChild(document.getElementsByClassName('cardy')[j])
                        let tempLastIndex=document.getElementsByClassName('cardy')[j].innerHTML.length-1
                      //  document.querySelector('#card'+slotsfilled).children[0].style.height="100%"
                        //playerdeck.splice(playerdeck.findIndex((element) => (element.value.toString()[0] == document.getElementsByClassName('cardy')[j].innerHTML[0]) &&element.suit.toString()==document.getElementsByClassName('cardy')[j].innerHTML[tempLastIndex] ),1)
                     document.getElementById('card'+slotsfilled).style.border="initial"
                     slotsfilled++
                    toggle++
                            if(playerdeck.length==0){

                            document.getElementById("infobox").innerHTML="You won!"

                        isGameover=true

                        setTimeout(function(){

                            GameOver()

                         }, 1000);

                    }else{
                    Ourturn=false
                    console.log(playerdeck)
                    RobotTurn(document.getElementsByClassName('cardy')[i].innerHTML)
                            }
                    } else{
                        console.log(ww[i])
                        console.log(wwredlist[i])
                         //  document.getElementsByClassName('cardy')[j].style.height='230px'
                         document.getElementsByClassName('cardy')[j].style.border="black 2px solid"
                        document.querySelector('#card'+slotsfilled).style.width='130px'
                        console.log(playerdeck[i].suit)
                         
                        
                          
                        /*
                        console.log(j+" "+i)
                        console.log( document.getElementsByClassName('cardy')[j] )
                        for(let i=0;i<playerdeck.length;i++){
                            if( (playerdeck[i].value+playerdeck[i].suit)== document.getElementsByClassName('cardy')[j].innerHTML ){
                                console.log(playerdeck[i])
                                playerdeck.splice(i,1)
                            }
                        }
                      //  playerdeck.splice(playerdeck.indexOf())
                        document.getElementsByClassName('cardy')[j].id='cardplayed'+slotsfilled
                        document.querySelector('#card'+slotsfilled).appendChild(document.getElementsByClassName('cardy')[j])
                        let tempLastIndex=document.getElementsByClassName('cardy')[j].innerHTML.length-1

                        //playerdeck.splice(playerdeck.findIndex((element) => (element.value.toString()[0] == document.getElementsByClassName('cardy')[j].innerHTML[0]) &&element.suit.toString()==document.getElementsByClassName('cardy')[j].innerHTML[tempLastIndex] ),1)
                     document.getElementById('card'+slotsfilled).style.border="initial"
                     slotsfilled++
                    toggle++
                    Ourturn=false
                    console.log(playerdeck)
                //    RobotTurn(document.getElementsByClassName('cardy')[i].innerHTML)
                */
                        

                        document.getElementById('infobox').innerHTML="Can't play this card"
                    }
            
                }
        }
//PASTE HERE    
} else{
    for(let j=0;j<document.getElementsByClassName('cardy').length;j++){
        if(document.getElementsByClassName('cardy')[j].style.borderColor=="yellow"){
            HumanBeat(document.getElementsByClassName('cardy')[j])
        }}
  
}
    }
} else{
    HumanBeat()
    if(Ourturn==true){
        console.log(toggle)
       if(toggle%2==1){
    document.getElementById(z.id).style.border="8px yellow solid"
    document.getElementById('card'+slotsfilled).style.border="1px dashed blue"
toggle++
} else{
    document.getElementById(z.id).style.border="2px black solid"
    document.getElementById('card'+slotsfilled).style.border="initial"
    toggle++
}
    }

}
}}else{
    console.log(takenCards)
    let zz=0; 
    for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
        
        if(document.getElementsByClassName('cardy')[i].style.borderColor=="yellow"){
            let tempid= document.getElementsByClassName('cardy')[i].id 
            for(let i=0;i<takenCards.length;i++){
                console.log(takenCards[i][0])
                console.log(document.getElementsByClassName('cardy')[i].innerHTML  )
                console.log(document.getElementById(tempid).innerHTML  )
                console.log( document.getElementsByClassName('cardy')[i].innerHTML[0] )
                if(document.getElementById(tempid).innerHTML.length==3  ) {
                    
                    if(takenCards[i][0]=="1" ){
                        Take1(document.getElementById(tempid) )
                       zz++
                    }
                } else{
                    if(takenCards[i][0]==document.getElementById(tempid).innerHTML[0] ){
                        Take1(document.getElementById(tempid) )
                        zz++
                    }
                }
            }
            if(zz==0){
                  
                document.getElementById("infobox").innerHTML="Can't give this card idiot"
            }
            
}}
 

}
}
// Make start code
// make robot able to start
function HumanTakeCaller(){
    takenCards2=[]
    console.log(slotsfilled)
    let w=document.getElementById("playersdeck").children.length
    for(let i=(slotsfilled-1);i>-1;i--){
        console.log(document.getElementById('cardplayed'+(i+1)))
        console.log(document.getElementById('cardplayed'+(i-1)))
        console.log(document.getElementById('rplayed'+i))
        console.log('HERE'+i+''+document.getElementById('cplayed'+i))
        if(document.getElementById('cplayed'+i)!=null){
            takenCards2.push(document.getElementById('cplayed'+i).innerHTML )
        HumanTake( document.getElementById('cplayed'+i))///////////////////////////////////////////////
       console.log(playerdeck)
       console.log(playerdeck.length)
     //  console.log( document.getElementById('cardnum'+playerdeck.length-1).innerHTML )

        }
        console.log(playerdeck)
       console.log(playerdeck.length)
    //   console.log( document.getElementById('cardnum'+playerdeck.length-1).innerHTML )
    takenCards2.push(document.getElementById('rplayed'+i).innerHTML )
        HumanTake(document.getElementById('rplayed'+i))////////////////////////////////////////////////
      
    }
    for(let i=0;i<document.getElementById("playersdeck").children.length;i++){
       // document.getElementById("playersdeck").children[i].style.height="75px"
       if(playerdeck.length<=6){
        for(let i=0;i<playerdeck.length;i++){
           // console.log(document.getElementById("rnum"+i).innerHTML)
            document.getElementById("cardnum"+(i)).style.height="90%"
        }
    }else{
        document.getElementById("cardnum"+(i)).style.height -(.5* (document.getElementById('cardnum'+i).style.height-2*(Math.ceil(playerdeck.length/8)-5)))+'px'
    }

//        if(playerdeck.length>6){
//  document.getElementById("playersdeck").children[i].style.height='75px'
//        }else{
//         document.getElementById("playersdeck").children[i].style.height="initial"
//        }

 // document.getElementById("playersdeck").children[i].style.top="initial"
             }
    for(let i=w;i<document.getElementById("playersdeck").children.length;i++){
        let z=document.getElementById('playersdeck').children[i]
        z.onclick=function MoveCard(){ 
            console.log(Ourturn)
            if(!TakingNow) {if(testerForMoveCard()==true){
            console.log('hey')
            console.log(z.id)
            console.log(z)
        if(Ourturn==true){
            console.log(toggle)
            console.log(slotsfilled)
           if(toggle%2==1){
        z.style.border="8px yellow solid"
        document.getElementById('card'+slotsfilled).style.border="1px dashed blue"
        toggle++
        } else{
        z.style.border="2px black solid"
        document.getElementById('card'+slotsfilled).style.border="initial"
        toggle++
        }
            }
        } else{
        
        if(Ourturn==true){
            console.log(toggle)
           if(toggle%2==1){
        
        z.style.border="8px yellow solid"
        HumanBeat(document.getElementById(z.id))
        for(let i=0;i<slotsfilled;i++){
          //  document.getElementById('rplayed'+i).style.border="4px blue dashed" may 4
        }
        toggle++
        } else{
        document.getElementById(z.id).style.border="2px black solid"
        for(let i=0;i<slotsfilled;i++){
            document.getElementById('rplayed'+i).style.border="2px black solid"
        }
        toggle++
        }
        }
        }} else{
            if(toggle%2==1){
                z.style.border="8px yellow solid"
                document.getElementById('card'+slotsfilled).style.border="1px dashed blue"
                toggle++
                } else{
                z.style.border="2px black solid"
                document.getElementById('card'+slotsfilled).style.border="initial"
                toggle++
                }
            console.log(takenCards)
            let zz=0; 
            for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
                
                if(document.getElementsByClassName('cardy')[i].style.borderColor=="yellow"){
                    let tempid= document.getElementsByClassName('cardy')[i].id 
                    for(let i=0;i<takenCards.length;i++){
                        console.log(takenCards[i][0])
                        console.log(document.getElementsByClassName('cardy')[i].innerHTML  )
                        console.log(document.getElementById(tempid).innerHTML  )
                        console.log( document.getElementsByClassName('cardy')[i].innerHTML[0] )
                        if(document.getElementById(tempid).innerHTML.length==3  ) {
                            
                            if(takenCards[i][0]=="1" ){
                                Take1(document.getElementById(tempid) )
                               zz++
                            }
                        } else{
                            if(takenCards[i][0]==document.getElementById(tempid).innerHTML[0] ){
                                Take1(document.getElementById(tempid) )
                                zz++
                            }
                        }
                    }
                    if(zz==0){
                          
                        document.getElementById("infobox").innerHTML="Can't give this card idiot"
                    }
                    
        }}
         
        
        }
        }
}
Start()
}
function HumanTake(toobigcard){
    RobotGiveExtra();
console.log(slotsfilled)
console.log(playerdeck)
console.log(playerdeck)
slotsfilled=0
console.log(document.getElementById('cardplayed'+0))
console.log(toobigcard)
for(let i=0;i<1;i++){
    if(toobigcard.innerHTML.length>2){
        
        
     for(let i=0;i<robotdeck.length;i++){
         if(robotdeck[i].suit==toobigcard.innerHTML[2]&&robotdeck[i].value==10){
            console.log(playerdeck[i])
            // playerdeck.splice(i,1)
             for(let j=(i+1);i<(robotdeck.length+1);i++){
                console.log(document.getElementById('cardnum'+j))
                if(document.getElementById('rnum'+j)!=null){
                document.getElementById('rnum'+j).id='rnum'+(j-1)}
            }
             console.log('splice and dice')  
        
         }
     }
 }else if((toobigcard.innerHTML[0]-0)==6||(toobigcard-0)==7||(toobigcard.innerHTML[0]-0)==8||(toobigcard.innerHTML[0]-0)==9) {
     for(let i=0;i<robotdeck.length;i++){
 if(robotdeck[i].suit==toobigcard.innerHTML[1]&&robotdeck[i].value==(toobigcard.innerHTML[0]-0)){
    console.log(playerdeck[i])
                 //playerdeck.splice(i,1) 
                 for(let j=(i+1);i<(robotdeck.length+1);i++){
                    console.log(document.getElementById('rnum'+j))
                   
                    if(document.getElementById('rnum'+j)!=null){
                    document.getElementById('rnum'+j).id='rnum'+(j-1)}
                }
             console.log('splice and dice')  
                }      
                           
                 }} else{ 
                     for(let i=0;i<robotdeck.length;i++){
                     if(robotdeck[i].suit==toobigcard.innerHTML[1]&&robotdeck[i].value==(toobigcard.innerHTML[0])){
                        console.log(playerdeck[i])
                      //  playerdeck.splice(i,1) 
                                         for(let j=(i+1);i<(robotdeck.length+1);i++){
                                            console.log(document.getElementById('rnum'+j))
                                            if(document.getElementById('rnum'+j)!=null){
                                            document.getElementById('rnum'+j).id='rnum'+(j-1)}
                                        }
                                     console.log('splice and dice')  
                                console.log(playerdeck)           }      
                                                   
                                         }}
}
console.log("LOSER")
console.log(toobigcard)
console.log(toobigcard.style.left)
console.log(toobigcard.style.position)
//toobigcard.style.position="absolute"
/*
 const Crect = toobigcard.getBoundingClientRect();
 const Frect=document.getElementById("playersdeck").children[document.getElementById("playersdeck").children.length-1].getBoundingClientRect();
//let tempClass=toobigcard.class
//toobigcard.class=takenCard
 //HTMove(toobigcard,Crect, Frect)
 var xpos = Math.round(Crect.left);
  var ypos=Math.round(Crect.top);
 //Crect.left-=100;
  console.log(xpos+" "+ypos)
  console.log(Math.round(Frect.x)+" "+Math.round(Frect.y))
  let lefty=Math.round(Frect.left)
  let toppy=Math.round(Frect.top)
  console.log(toobigcard.style.left)
  toobigcard.style.left=xpos+"px"
  toobigcard.style.top=ypos+"px"
  console.log(toobigcard.style.left)
  console.log(xpos)
  console.log(lefty+"px")
  console.log(toppy)
  /*
  while (( (toobigcard.style.left!=lefty+"px")|| (toobigcard.style.top!=toppy+"px"))) {
    
  if(xpos==lefty){
    xpos=xpos
  }
  if(xpos<lefty){
    xpos++
  }else{
    xpos--
  } if(ypos==toppy){
    ypos=ypos
  }
  if(ypos<toppy){
    ypos++
  }else{
    ypos--
  }
 // console.log(toppy)
  //console.log(ypos)
  toobigcard.style.left = xpos+"px"; 
  toobigcard.style.top = ypos+"px"; 
  
    console.log("Delayed for .1 second.");
}

toobigcard.style.position="relative"
toobigcard.style.left="initial"
toobigcard.style.top="initial"
*/
toobigcard.style.top="initial"
toobigcard.style.backgroundImage="none"
toobigcard.style.color="black"
toobigcard.style.marginTop="0%"
if(playerdeck.length<6){
     for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
        console.log(document.getElementsByClassName('cardy')[i].id)
         
             if(document.getElementsByClassName('cardy')[i].id.includes("cardnum")){
                         document.getElementsByClassName("cardy")[i].style.height="100%"
                 
             document.getElementsByClassName("cardy")[i].style.width="100%"
             }
        toobigcard.style.width="100%"

             toobigcard.style.height="100%"
    }
}else{
    if(playerdeck.length<12){
         for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
               console.log(document.getElementsByClassName('cardy')[i].id)
         
       // console.log(document.getElementById("rnum"+i).innerHTML)
             if(document.getElementsByClassName('cardy')[i].id.includes("cardnum")){
                         document.getElementsByClassName("cardy")[i].style.height="75px"
                 
             document.getElementsByClassName("cardy")[i].style.width="100%"
             }
        toobigcard.style.width="100%"

             toobigcard.style.height="75px"
    }
    }else{
     for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
       // console.log(document.getElementById("rnum"+i).innerHTML)
             if(document.getElementsByClassName('cardy')[i].id.includes("cardnum")){
                         document.getElementsByClassName("cardy")[i].style.height="40px"
                 
             document.getElementsByClassName("cardy")[i].style.width="100%"
             }
        toobigcard.style.width="100%"

             toobigcard.style.height="40px"
    }
}}
document.getElementById('playersdeck').appendChild(toobigcard)

toobigcard.id='cardnum'+(document.getElementById("playersdeck").children.length-1)
console.log(robotdeck)
console.log(document.getElementById('robotdeck'))
console.log( document.getElementById("playersdeck").children.length)
//document.getElementById('cardnum'+(document.getElementById("playersdeck").children.length-1)).style.height=document.getElementById('cardnum'+(document.getElementById("playersdeck").children.length-2)).style.height
if(toobigcard.innerHTML.length>2){
const takenCard= new Card(toobigcard.innerHTML[2],parseInt(toobigcard.innerHTML[0]+''+toobigcard.innerHTML[1]))
playerdeck.push(takenCard)

}else{
// if(typeof(toobigcard.innerHTML[0]-0)=='number'){
    const takenCard= new Card(toobigcard.innerHTML[1],toobigcard.innerHTML[0])
    playerdeck.push(takenCard)
    
//  } else{
console.log(toobigcard.innerHTML[0]==Jack)
//   }
}
console.log(playerdeck)
AddGiven()
AllinOneRestock(robotdeck)
AllinOneRestock(playerdeck)
console.log(deck.cards.length)
console.log(playerdeck.length)

console.log(playerdeck.length)
console.log(Ourturn)
Ourturn=false
for(let i=0;i<playerdeck.length;i++){
console.log(document.getElementById('cardnum'+i).innerHTML)
console.log(document.getElementById("playersdeck").style.height)
if(playerdeck.length<=6){
    for(let i=0;i<playerdeck.length;i++){
       // console.log(document.getElementById("rnum"+i).innerHTML)
        document.getElementById("cardnum"+(i)).style.height="90%"
    }
}else{
    document.getElementById("cardnum"+(i)).style.height -(.5* (document.getElementById('cardnum'+i).style.height-2*(Math.ceil(playerdeck.length/8)-5)))+'px'
}
}
console.log(playerdeck)
//sRestock(playerdeck)
//restock(robotdeck)
console.log(playerdeck)
//fsRestock(playerdeck)
//fsRestock(robotdeck)
//robotDeckRestock(robotdeck)
if(robotdeck.length==0){
console.log("game over!")
document.getElementById("infobox").innerHTML="You lost!"
isGameover=true
setTimeout(function(){
    GameOver()
 }, 1000);
return;
}
}
function Take1(toobigcard){
    TakingNow=false
    toobigcard.style.marginTop="0%"
    toobigcard.style.border="2px black solid"
    document.getElementById('card'+slotsfilled).style.border="initial"
    
    console.log(slotsfilled)
    console.log(playerdeck)
   
    
    console.log(playerdeck)
 
    slotsfilled=0
    console.log(document.getElementById('cardplayed'+0))
    console.log(toobigcard)
    for(let i=0;i<1;i++){
        if(toobigcard.innerHTML.length>2){
            
            
         for(let i=0;i<playerdeck.length;i++){
             if(playerdeck[i].suit==toobigcard.innerHTML[2]&&playerdeck[i].value==10){
                console.log(playerdeck[i])
                
                 for(let j=(i+1);i<(playerdeck.length+1);i++){
                    console.log(document.getElementById('cardnum'+j))
                    if(document.getElementById('cardnum'+j)!=null){
                    document.getElementById('cardnum'+j).id='cardnum'+(j-1)}
                }
                 console.log('splice and dice')  
            
             }
         }
     }else if((toobigcard.innerHTML[0]-0)==6||(toobigcard-0)==7||(toobigcard.innerHTML[0]-0)==8||(toobigcard.innerHTML[0]-0)==9) {
         for(let i=0;i<playerdeck.length;i++){
     if(playerdeck[i].suit==toobigcard.innerHTML[1]&&playerdeck[i].value==(toobigcard.innerHTML[0]-0)){
        console.log(playerdeck[i])
                     
                     for(let j=(i+1);i<(playerdeck.length+1);i++){
                        console.log(document.getElementById('cardnum'+j))
                       
                        if(document.getElementById('cardnum'+j)!=null){
                        document.getElementById('cardnum'+j).id='cardnum'+(j-1)}
                    }
                 console.log('splice and dice')  
                    }      
                               
                     }} else{ 
                         for(let i=0;i<playerdeck.length;i++){
                         if(playerdeck[i].suit==toobigcard.innerHTML[1]&&playerdeck[i].value==(toobigcard.innerHTML[0])){
                            console.log(playerdeck[i])
                        
                                             for(let j=(i+1);i<(playerdeck.length+1);i++){
                                                console.log(document.getElementById('cardnum'+j))
                                                if(document.getElementById('cardnum'+j)!=null){
                                                document.getElementById('cardnum'+j).id='cardnum'+(j-1)}
                                            }
                                         console.log('splice and dice')  
                                    console.log(playerdeck)           }      
                                                       
                                             }}
    }
    toobigcard.id='rnum'+(document.getElementById("robotdeck").children.length)
   document.getElementById('robotdeck').appendChild(toobigcard)
   toobigcard.style.backgroundImage= "url('backOcard.png')";
  // toobigcard.style.width="70%"
   toobigcard.style.backgroundPosition="center";
   toobigcard.style.backgroundRepeat="no-repeat";toobigcard.style.backgroundSize="cover";
   toobigcard.style.color="transparent"

   console.log(robotdeck)
   console.log(document.getElementById('robotdeck'))
   console.log( document.getElementById("robotdeck").children.length)
   if(robotdeck.length<6){
    for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
       console.log(document.getElementsByClassName('cardy')[i].id)
        
            if(document.getElementsByClassName('cardy')[i].id.includes("rnum")){
                        document.getElementsByClassName("cardy")[i].style.height="100%"
                
            document.getElementsByClassName("cardy")[i].style.width="100%"
            }
      
   }
}else{
   if(robotdeck.length<12){
        for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
              console.log(document.getElementsByClassName('cardy')[i].id)
        
      // console.log(document.getElementById("rnum"+i).innerHTML)
            if(document.getElementsByClassName('cardy')[i].id.includes("rnum")){
                        document.getElementsByClassName("cardy")[i].style.height="60px"
                
            document.getElementsByClassName("cardy")[i].style.width="100%"
            }
      
   }
   }else{
    for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
      // console.log(document.getElementById("rnum"+i).innerHTML)
            if(document.getElementsByClassName('cardy')[i].id.includes("rnum")){
                        document.getElementsByClassName("cardy")[i].style.height="40px"
                
            document.getElementsByClassName("cardy")[i].style.width="100%"
            }
       toobigcard.style.width="100%"

            toobigcard.style.height="40px"
   }
}}
   document.getElementById('rnum'+(document.getElementById("robotdeck").children.length-1)).style.height=document.getElementById('rnum'+(document.getElementById("robotdeck").children.length-2)).style.height
   document.getElementById('rnum'+(document.getElementById("robotdeck").children.length-1)).style.position="initial"
   
    if(toobigcard.innerHTML.length>2){
    const takenCard= new Card(toobigcard.innerHTML[2],parseInt(toobigcard.innerHTML[0]+''+toobigcard.innerHTML[1]))
    robotdeck.push(takenCard)
   
}else{
   // if(typeof(toobigcard.innerHTML[0]-0)=='number'){
        const takenCard= new Card(toobigcard.innerHTML[1],toobigcard.innerHTML[0])
        robotdeck.push(takenCard)
        
  //  } else{
console.log(toobigcard.innerHTML[0]==Jack)
 //   }
}
console.log(playerdeck)
permaTBG=toobigcard

if(playerdeck.length==0){
    console.log("game over!")
      
    document.getElementById("infobox").innerHTML="You won!"
    isGameover=true
    setTimeout(function(){
        GameOver()
     }, 1000);
    return;
}
GiveExtra()
}
function Take2(toobigcard){
    TakingNow=false
    takenCards=[]
      
    document.getElementById("infobox").innerHTML="Your turn!"
permaTBG=""
AllinOneRestock(robotdeck)
AllinOneRestock(playerdeck)
console.log(deck.cards.length)
console.log(playerdeck.length)

console.log(playerdeck.length)
console.log(playerdeck)
if(robotdeck.length>6){
for(let i=0;i<robotdeck.length;i++){
   
    if(document.getElementById('rnum'+i)!=null ){
    document.getElementById('rnum'+i).style.height= '75px'
}
}
}    else{
    for(let i=0;i<robotdeck.length;i++){
        console.log(document.getElementById("rnum"+i).innerHTML)
        document.getElementById("rnum"+(i)).style.height="initial"
    }
}
console.log(playerdeck)

console.log(playerdeck)

if(playerdeck.length==0){
    console.log("game over!")
      
    document.getElementById("infobox").innerHTML="You won!"
    isGameover=true
    setTimeout(function(){
        GameOver()
     }, 1000);
    return;
}
}
console.log(playerdeck)
//here
function PlayingOrNot(value){
    if(!TakingNow){
  if(testerForMoveCard()){//to be cont

    console.log(testerForMoveCard())
   // fsRestock(playerdeck) 
    //fsRestock(robotdeck)
    //make it only work if everything is beat
    
value=false
Ourturn=false
console.log(slotsfilled)
console.log(playerdeck)
document.getElementById("infobox").innerHTML="Computer's Turn"
//fsRestock(playerdeck)
//robotDeckRestock(robotdeck)
//fsRestock(robotdeck)
console.log(playerdeck)
for(let j=0;j<slotsfilled;j++){
for(let i=0;i<playerdeck;i++){
    if((playerdeck[i].value+playerdeck[i].suit)==document.getElementById('cardplayed'+j).innerHTML){
        console.log('fin')
        console.log(playerdeck[i])
        playerdeck.splice(i,1)
    }
}
}


for(let i=0;i<7;i++){
    if(  document.getElementById('playingarea').children[i]!=undefined){
        document.getElementById('playingarea').children[i].style.border="none"
    }

    
}
for(let i=0;i<slotsfilled;i++){
    document.getElementById('cardplayed'+i).remove()
    document.getElementById('rplayed'+i).remove()

}
trash+=(slotsfilled*2)
document.getElementById('Trash').innerHTML='TRASH: '+trash
if((document.getElementById('deck').innerHTML-(slotsfilled*2))<0){

    document.getElementById('parentdeck').style.visible="hidden"
} else{
    //document.getElementById('deck').innerHTML-=(slotsfilled*2) check
}
AllinOneRestock(playerdeck)
AllinOneRestock(robotdeck)
slotsfilled=0
console.log(deck.cards)
console.log(robotdeck)
console.log(playerdeck)

let op=playerdeck.length
let or=robotdeck.length
/*
for(let i=op;i<6;i++){
    playerdeck.push(deck.cards[0])
    deck.cards.splice(0,1)
}
for(let i=or;i<6;i++){
    robotdeck.push(deck.cards[0])
    deck.cards.splice(0,1)
    }
    */
    // for(let j=(0);j<(playerdeck.length+1);j++){
    //     console.log(document.getElementById('cardnum'+j))
        
           
    //     document.getElementById('cardnum'+j).id='cardnum'+(j)
    // }
//cp
console.log(op)
for(let i=(op);i<playerdeck.length;i++){
    let z= document.createElement('div')
    console.log(playerdeck[i].value)
    z.innerHTML=playerdeck[i].value+playerdeck[i].suit
    document.querySelector('#playersdeck').appendChild(z)
    z.id="cardnum"+i
   // z.setAttribute("oclick","Movecard(this.id)")
  // z.setAttribute("onclick","MoveCard(this.id)"); slash out like others
//cp from same tiem
z.onclick=function MoveCard(){ 
    console.log(Ourturn)
    if(!TakingNow) {if(testerForMoveCard()==true){
    console.log('hey')
    console.log(z.id)
    console.log(z)
if(Ourturn==true){
    console.log(toggle)
    console.log(slotsfilled)
   if(toggle%2==1){
z.style.border="8px yellow solid"
document.getElementById('card'+slotsfilled).style.border="1px dashed blue"
toggle++
} else{
z.style.border="2px black solid"
document.getElementById('card'+slotsfilled).style.border="initial"
toggle++
}
    }
} else{

if(Ourturn==true){
    console.log(toggle)
   if(toggle%2==1){

z.style.border="8px yellow solid"
HumanBeat(document.getElementById(z.id))
for(let i=0;i<slotsfilled;i++){
    //document.getElementById('rplayed'+i).style.border="4px blue dashed" may 4
}
toggle++
} else{
document.getElementById(z.id).style.border="2px black solid"
for(let i=0;i<slotsfilled;i++){
    document.getElementById('rplayed'+i).style.border="2px black solid"
}
toggle++
}
}
}} else{
    if(toggle%2==1){
        z.style.border="8px yellow solid"
        document.getElementById('card'+slotsfilled).style.border="1px dashed blue"
        toggle++
        } else{
        z.style.border="2px black solid"
        document.getElementById('card'+slotsfilled).style.border="initial"
        toggle++
        }
    console.log(takenCards)
    let zz=0; 
    for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
        
        if(document.getElementsByClassName('cardy')[i].style.borderColor=="yellow"){
            let tempid= document.getElementsByClassName('cardy')[i].id 
            for(let i=0;i<takenCards.length;i++){
                console.log(takenCards[i][0])
                console.log(document.getElementsByClassName('cardy')[i].innerHTML  )
                console.log(document.getElementById(tempid).innerHTML  )
                console.log( document.getElementsByClassName('cardy')[i].innerHTML[0] )
                if(document.getElementById(tempid).innerHTML.length==3  ) {
                    
                    if(takenCards[i][0]=="1" ){
                        Take1(document.getElementById(tempid) )
                       zz++
                    }
                } else{
                    if(takenCards[i][0]==document.getElementById(tempid).innerHTML[0] ){
                        Take1(document.getElementById(tempid) )
                        zz++
                    }
                }
            }
            if(zz==0){
                  
                document.getElementById("infobox").innerHTML="Can't give this card idiot"
            }
            if(robotdeck.length>6){
                for(let i=0;i<robotdeck.length;i++){
                    console.log(document.getElementById("rnum"+i).innerHTML)
                    document.getElementById("rnum"+(i)).style.height="75px"
                }
            }      else{
                for(let i=0;i<robotdeck.length;i++){
                    console.log(document.getElementById("rnum"+i).innerHTML)
                    document.getElementById("rnum"+(i)).style.height="initial"
                }
            }
}}
 

}
}
 //cp over
    z.className="cardy"
    console.log(z)
    console.log(document.getElementById("playersdeck"))
  }
  for(let i=(or);i<robotdeck.length;i++){
    let z= document.createElement('div')
    console.log(robotdeck[i].value)
    z.innerHTML=robotdeck[i].value+robotdeck[i].suit
    document.querySelector('#robotdeck').appendChild(z)
    z.style.backgroundImage= "url('backOcard.png')";
    z.style.backgroundPosition="center";
    z.style.backgroundRepeat="no-repeat";z.style.backgroundSize="cover";
    z.style.color="transparent"
    z.id="rnum"+i
    z.className="cardy"
    robotnormals.push(robotdeck[i])
    }
//cpends

Ourturn=false
console.log(playerdeck.length)
Start()
console.log(playerdeck)
   }}
   else{
    console.log("no moregive?")
    Take2(permaTBG)
   }
}
let kozar=deck.cards[23].suit
console.log(deck.cards.length)
console.log(kozar)
console.log(playerdeck.length)
function robotnormalsRedone(){
    console.log(kozar)
    robotnormals=[]
    robotkozars=[]
    for(let i=0;i<robotdeck.length;i++){
        if(robotdeck[i].suit!=kozar){
            robotnormals.push(robotdeck[i])
        } else{
            robotkozars.push(robotdeck[i])
        }
    }
}
function onlynumbersRobotRedone(){
    onlynumbersRobot=[]
    for(let i=0;i<robotdeck.length;i++){
        console.log(robotdeck[i])
        if(!(robotdeck[i].value=="6"|| robotdeck[i].value=="7"|| robotdeck[i].value=="8"|| robotdeck[i].value=="9" || robotdeck[i].value=="10" )){
            if(robotdeck[i].value==Jack){
    onlynumbersRobot.push(11)
            }
            if(robotdeck[i].value==Queen){
                onlynumbersRobot.push(12)
                        }
                        if(robotdeck[i].value==King){
                            onlynumbersRobot.push(13)
                                    }
                                    if(robotdeck[i].value==Ace){
                                        onlynumbersRobot.push(14)
                                                }
        } else{
            onlynumbersRobot.push(robotdeck[i].value)
    
        }
    
       
       }



}
function StartGame(x,kozar){
  console.log(robotdeck)
  console.log(playerdeck)
   for(let i=0;i<robotdeck.length;i++){
    console.log(robotdeck[i])
    if(typeof(robotdeck[i].value)!="number"){
        if(robotdeck[i].value==Jack){
onlynumbersRobot.push(11)
        }
        if(robotdeck[i].value==Queen){
            onlynumbersRobot.push(12)
                    }
                    if(robotdeck[i].value==King){
                        onlynumbersRobot.push(13)
                                }
                                if(robotdeck[i].value==Ace){
                                    onlynumbersRobot.push(14)
                                            }
    } else{
        onlynumbersRobot.push(robotdeck[i].value)

    }

    if(typeof(playerdeck[i].value)!="number"){
        if(playerdeck[i].value==Jack){
onlynumbersPlayer.push(11)
        }
        if(playerdeck[i].value==Queen){
            onlynumbersPlayer.push(12)
                    }
        if(playerdeck[i].value==King){
                        onlynumbersPlayer.push(13)
                                }
       if(playerdeck[i].value==Ace){
                                    onlynumbersPlayer.push(14)
                                            }
    } else{
        onlynumbersPlayer.push(playerdeck[i].value)

    }
   }
  
//now time to find smallest kozar
//if robot takes, next card he beats he takes and beats in his area
let smallest=[]
for(let i=0;i<6;i++){
    if(robotdeck[i].suit==kozar){
smallest.push(robotdeck[i].value)

    }
    if(playerdeck[i].suit==kozar){
        smallest.push(playerdeck[i].value)
        
            }

            }
            smallest.sort()
            console.log(smallest)
            for(let i=0;i<6;i++){
                if(robotdeck[i].suit==kozar){
                    if(robotdeck[i].value==smallest[0]){
                       first='robot'
                         
                    document.getElementById('infobox').innerHTML="Computer has smallest kozar, computer starts"
                    Start()
                    }
                }
                if(playerdeck[i].suit==kozar){
                    if(playerdeck[i].value==smallest[0]){
                       first='player'
                         
                        document.getElementById('infobox').innerHTML="You have smallest kozar, you start"
                       console.log("frck"+ document.getElementById('infobox').getBoundingClientRect().height)
                      //document.getElementById("header").style.minHeight=document.getElementById('infobox').getBoundingClientRect().height+10+"px"
                       document.getElementById('endturn').value=false
                        }
                }
            }
            
if(first==first){

Ourturn=true
} else{
    
}

}
let robotkozars=[]
//to be cont- makeappending human cardslike itis forrobot
let ournormals=[]
let ourkozars=[]
let options=[]
let normal=true
//to be cont box- robot restock faulty also slots filled faulty
console.log(robotdeck)
let index
let robotnormalnumbers=[]
function Splay(card,index){
    console.log("SPALAY")
console.log(index)
    if(slotsfilled==0){
        //cp
        for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
            if( document.getElementsByClassName('cardy')[i].innerHTML==(card.value+card.suit) ){
                //if error with this part, possibly alter to make a new altidtoclass, altidtoclass2
                altidToClass=i;
            } else{
                console.log(document.getElementsByClassName('cardy')[i].innerHTML)
                //console.log(ops[0].value+ops[0].suit)
            }
     }
    // document.getElementsByClassName('cardy')[altidToClass].style.width='50%'
     //document.getElementsByClassName('cardy')[altidToClass].style.height='250px'
   
    // document.getElementsByClassName('cardy')[altidToClass].style.position='relative'
     //document.getElementsByClassName('cardy')[altidToClass].style.top='75px'
    document.getElementsByClassName('cardy')[altidToClass].id='rplayed'+(slotsfilled)
    
     console.log(document.getElementById('rplayed'+(slotsfilled)))  
     console.log(document.getElementsByClassName('cardy')[altidToClass] )
     console.log(document.getElementsByClassName('cardy')[idToClass] )
        //cp


                //document.getElementById('rnum'+index).id='rplayed'+slotsfilled
                console.log(document.getElementById('rplayed'+slotsfilled).innerHTML)
                console.log(document.getElementById('rplayed'+slotsfilled).innerHTML[1])
                console.log(document.getElementById('rplayed'+slotsfilled).innerHTML[0])
                if(document.getElementById('rplayed'+slotsfilled).innerHTML.length>2){
                    for(let i=0;i<robotdeck.length;i++){
                        if(robotdeck[i].suit==document.getElementById('rplayed'+slotsfilled).innerHTML[2]){
                            robotdeck.splice(i,1)
                            console.log('splice and dice')  
                        }
                    }
                }else{     
                   console.log(document.getElementById('playersdeck'))
                   console.log(document.getElementById('playersdeck').children)
                    for(let i=0;i<robotdeck.length;i++){
        if((robotdeck[i].value+robotdeck[i].suit)==document.getElementsByClassName('cardy')[altidToClass].innerHTML){
                                robotdeck.splice(i,1)  
                                console.log('splice and dice')                }      
                                      }    
                                } 
                             
                document.querySelector('#card'+slotsfilled).appendChild(document.getElementsByClassName('cardy')[altidToClass])
 document.querySelector('#card'+slotsfilled).children[0].style.backgroundImage="none"
 document.querySelector('#card'+slotsfilled).children[0].style.width="70%"
 document.querySelector('#card'+slotsfilled).children[0].style.color="black"
document.querySelector('#card'+slotsfilled).children[0].style.height="90%";
        
if(robotdeck.length==0){

    document.getElementById("infobox").innerHTML="You lost!"

    setTimeout(function(){

        GameOver()

     }, 1000);

isGameover=true

}
// document.querySelector('#card'+slotsfilled).children[0].style.marginTop="37%";
 // document.querySelector('#card'+slotsfilled).children[0].style.borderBottom="none";
              //  document.getElementById('card'+slotsfilled).style.position="initial"
             //   document.getElementById('card'+slotsfilled).style.border="initial"
                slotsfilled++
                
                AllinOneRestock(playerdeck)
                //AllinOneRestock(robotdeck) put back soon maybe 12/31
                Ourturn=true
               
                
            
        
            } else{
                let ww=[]
                let wwredlist=[]
                
                for(let i=0;i<(slotsfilled-1);i++){
                    console.log(document.getElementById('cardplayed'+i))
                    console.log(document.getElementById('rplayed'+i))
                    let wwelement= (document.getElementById('cardplayed'+i).innerHTML)
                    wwelement=(wwelement.slice(0,wwelement.length-1))
                    ww.push(wwelement)
                    let wwred=document.getElementById('rplayed'+i).innerHTML
                    wwred=(wwred.slice(0,wwred.length-1))
                    wwredlist.push(wwred)
                }
                console.log(ww)
                console.log(wwredlist)
            }
            
}
function RobotcardFinder(card,truth){
    console.log('robotcardfinder')
    console.log(truth)
    console.log(card)
    for(let i=0;i<robotdeck.length;i++){
        if(truth){
        
    if(robotdeck[i].value==card&&robotdeck[i].suit!=kozar){
        console.log('hey')
        Splay(robotdeck[i],i)
    }
    if(card==11&&robotdeck[i].value==Jack&&robotdeck[i].suit!=kozar){
        console.log('hey')
        Splay(robotdeck[i],i)
    }
    if(card==12&&robotdeck[i].value==Queen&&robotdeck[i].suit!=kozar){
        console.log('hey')
        Splay(robotdeck[i],i)
    }
    if(card==13&&robotdeck[i].value==King&&robotdeck[i].suit!=kozar){
        console.log('hey')
        Splay(robotdeck[i],i)
    }
    if(card==14&&robotdeck[i].value==Ace&&robotdeck[i].suit!=kozar){
        console.log('hey')
        Splay(robotdeck[i],i)
    }
} else if(truth==false){
    console.log(card)
    if(robotdeck[i].value==card){
        console.log('hey')
            Splay(robotdeck[i],i)
    }
    if(card==11&&robotdeck[i].value==Jack){
        Splay(robotdeck[i],i)
    }
    if(card==12&&robotdeck[i].value==Queen){
        Splay(robotdeck[i],i)
    }
    if(card==13&&robotdeck[i].value==King){
        Splay(robotdeck[i],i)
    }
    if(card==14&&robotdeck[i].value==Ace){
        Splay(robotdeck[i],i)
    }
}
}
}
function HumanBeat(clickedCard){
    //splice
    console.log(clickedCard)
    console.log('cyr')
let c1v=0;
let c2v=0;
    console.log(slotsfilled)
    let card1=clickedCard

    let card2=document.getElementById('rplayed'+(slotsfilled-1))
    
    console.log(document.getElementById('rplayed'+(slotsfilled)))
    console.log(card1)
    console.log(card2)
    console.log(card2.innerHTML)
    console.log(isFinite(card1.innerHTML[0]))//true
    if(isFinite(card1.innerHTML[0])!=true){
        console.log(card1.innerHTML[0])
        console.log(card1.innerHTML[0]==Jack)
        console.log(King)
        console.log(card1.innerHTML[0]==King)
        console.log(card1.innerHTML[0]==Ace)
        if(card1.innerHTML[0]==Jack){
            c1v=1

        }
        if(card1.innerHTML[0]==Queen){
            c1v=2

        }
        if(card1.innerHTML[0]==King){
            c1v=3

        }
        if(card1.innerHTML[0]==Ace){
            c1v=4

        }
    }
    if(isFinite(card2.innerHTML[0])!=true){
        if(card2.innerHTML[0]==Jack){
            c2v=1

        }
        if(card2.innerHTML[0]==Queen){
            c2v=2

        }
        if(card2.innerHTML[0]==King){
            c2v=3

        }
        if(card2.innerHTML[0]==Ace){
            c2v=4

        }
    }
    console.log(c1v+" "+c2v)
    if(card1.innerHTML.length>2){
        console.log("card1.html is longer than 2")
        if(card1.innerHTML[2]==card2.innerHTML[1]){
            console.log("card 1 and card 2 have the same symbols")
            if((card2.innerHTML[0]-0)<10){
                Ourturn=false
                 card1.style.width='70%'
                card1.style.height='175px'
               //  card1.style.position='relative'
                 card1.style.border="black 2px solid"
                 card2.style.border="black 2px solid"
                 //card1.style.top=   (0-(card2.getBoundingClientRect().height)/1.55)+"px"; NEW CHANGE
                 //card1.style.height="63%"
               // card1.style.marginTop="37%"; card1.style.borderBottom="none";
                 card1.style.width=(card2.getBoundingClientRect().width)
                // document.getElementsByClassName('cardy')[altidToClass].style.position="relative"
                card1.id='cplayed'+(slotsfilled-1)
            //    console.log(document.getElementById('card'+(slotsfilled-1)))
                card1.style.color="none"
                card1.style.backgroundImage="none" 
                card2.style.border="black 2px solid"
                card2.appendChild(card1)
                card2.style.border="black 2px solid"
            //    card2.style.height="63%"  
              // card2.style.marginTop="37%"  
                card2.style.backgroundImage="none"
               card2.style.color="black"
                card2.style.position="initial"
                console.log(card1)
                playerdeck.splice(playerdeck.indexOf(card1),1)
                if(robotdeck.length==0&&playerdeck.length==0){
                      
                    document.getElementById("infobox").innerHTML="Tie!"
                    isGameover=true
                    setTimeout(function(){
                        GameOver()
                     }, 1000);
                    return;
                } else{
                    if(robotdeck.length==0){
                          
                        document.getElementById("infobox").innerHTML="You lost!"
                        isGameover=true
                        setTimeout(function(){
                            GameOver()
                         }, 1000);
                        return;
                    }
                    if(playerdeck.length==0){
                          
                        document.getElementById("infobox").innerHTML="You won!"
                        isGameover=true
                        setTimeout(function(){
                            GameOver()
                         }, 1000);
                        return;
                    }
                }
                robotProvide()
            } else{
                  
                document.getElementById('infobox').innerHTML="Can't play this card"
            }
        } else{
            if(card1.innerHTML[2]==kozar){
                Ourturn=false
                card1.style.width='70%'
              //  card1.style.position='relative'
                card1.style.border="black 2px solid"
                card2.style.border="black 2px solid"
               // card1.style.top=   (0-(card2.getBoundingClientRect().height)/1.55)+"px"; NEW CHANGE
               // card1.style.height="63%"
                //card1.style.marginTop="37%"; card1.style.borderBottom="none";
                card1.style.width=(card2.getBoundingClientRect().width)
              card1.style.height='175px'
               // card1.style.position='relative'
                card1.style.border="black 2px solid"
                card2.style.border="black 2px solid"
               card1.id='cplayed'+(slotsfilled-1)
               console.log(document.getElementById('card'+(slotsfilled-1)))
               console.log(card1)
               playerdeck.splice(playerdeck.indexOf(card1),1)
               card1.style.color="none"
               card2.style.border="black 2px solid"
               card1.style.backgroundImage="none" 
               card2.appendChild(card1)
               card2.style.border="black 2px solid"
              // card2.style.height="63%"  
              //card2.style.marginTop="37%"  
               card2.style.backgroundImage="none"
              card2.style.color="black"
               card2.style.position="initial"
               robotProvide()
            }else{
                  
                document.getElementById('infobox').innerHTML="Can't play this card"
            }
        }
   
    } else{
        if(card1.innerHTML[1]==card2.innerHTML[2]||card1.innerHTML[1]==card2.innerHTML[1]){
            console.log("symbols the same, length is normal")
        if(c1v==0){
            console.log(King)
            if(card2.innerHTML[0]!='1'){
                console.log(King)
                if((card1.innerHTML[0]-0)>(card2.innerHTML[0]-0)){
                    console.log(King)
                    Ourturn=false
                    card1.style.width='70%'
                 //   card1.style.position='relative'
                    card1.style.border="black 2px solid"
                    card2.style.border="black 2px solid"
                 // card1.style.top=   (0-(card2.getBoundingClientRect().height)/1.55)+"px"; new change
                   // card1.style.height="63%"
                    //card1.style.marginTop="37%"; card1.style.borderBottom="none";
                    card1.style.width=(card2.getBoundingClientRect().width)
                  card1.style.height='175px'
                   card1.style.border="black 2px solid"
                   card2.style.border="black 2px solid"
                  //  card1.style.position='relative'
                   card1.id='cplayed'+(slotsfilled-1)
                   console.log(document.getElementById('card'+(slotsfilled-1)))
                   console.log(card1)
                   playerdeck.splice(playerdeck.indexOf(card1),1)
                   card1.style.color="none"
                   card1.style.backgroundImage="none" 
                   card2.style.border="black 2px solid"
                   card2.appendChild(card1)
                   card2.style.border="black 2px solid"
                //   card2.style.height="63%"  
                 // card2.style.marginTop="37%"  
                   card2.style.backgroundImage="none"
                  card2.style.color="black"
                   card2.style.position="initial"
                   robotProvide()
                } else{
                      
                    document.getElementById('infobox').innerHTML="Can't play this card"

                }
            }
        } else{
            if(c1v>c2v){
                console.log(King)
                Ourturn=false
                card1.style.width='70%'
             card1.style.height='175px'
               // card1.style.position='relative'
                             card1.style.border="black 2px solid"
               card2.style.border="black 2px solid"
    //    card1.style.top=   (0-(card2.getBoundingClientRect().height)/1.55)+"px"; new change
            //   card1.style.height="63%"
              // card1.style.marginTop="37%"; card1.style.borderBottom="none";
               card1.style.width=(card2.getBoundingClientRect().width)
                card1.style.border="black 2px solid"
                card2.style.border="black 2px solid"
               card1.id='cplayed'+(slotsfilled-1)
               card1.style.color="none"
               card1.style.backgroundImage="none" 
               card2.style.border="black 2px solid"
               card2.appendChild(card1)
               card2.style.border="black 2px solid"
           //    card2.style.height="63%"  
             // card2.style.marginTop="37%"  
               card2.style.backgroundImage="none"
              card2.style.color="black"
               card2.style.position="initial"
               playerdeck.splice(playerdeck.indexOf(card1),1)
               robotProvide()
            } else if(isFinite(card2.innerHTML[0])==true){
                Ourturn=false
              //  card1.style.position='relative'
                card1.style.border="black 2px solid"
                card2.style.border="black 2px solid"
        //  card1.style.top=   (0-(card2.getBoundingClientRect().height)/1.55)+"px"; new change
        //        card1.style.height="63%"
          //      card1.style.marginTop="37%"; card1.style.borderBottom="none";
                card1.style.width=(card2.getBoundingClientRect().width)
                card1.style.width='70%'
              card1.style.height='175px'
                //card1.style.position='relative'
                card1.style.border="black 2px solid"
                card2.style.border="black 2px solid"
               card1.id='cplayed'+(slotsfilled-1)
               card1.style.color="none"
               card2.style.border="black 2px solid"
                card1.style.backgroundImage="none" 
                card2.appendChild(card1)
                card2.style.border="black 2px solid"
              //  card2.style.height="63%"  
               //card2.style.marginTop="37%"  
                card2.style.backgroundImage="none"
               card2.style.color="black"
                card2.style.position="initial"
               playerdeck.splice(playerdeck.indexOf(card1),1)
               robotProvide()
            } else{
                console.log(c1v+" "+c2v)
                  
                document.getElementById('infobox').innerHTML="Can't play this card"
            }
        }
    }else{
        if(card1.innerHTML[1]==kozar){
            Ourturn=false
            card1.style.width='70%'
           // card1.style.position='relative'
            card1.style.border="black 2px solid"
            card2.style.border="black 2px solid"
//   card1.style.top=   (0-(card2.getBoundingClientRect().height)/1.55)+"px"; new chang
        //    card1.style.height="63%"
          //  card1.style.marginTop="37%"; card1.style.borderBottom="none";
            card1.style.width=(card2.getBoundingClientRect().width)
           card1.style.height='175px'
            //card1.style.position='relative'
            card1.style.border="black 2px solid"
            card2.style.border="black 2px solid"
           card1.id='cplayed'+(slotsfilled-1)
           card1.style.color="none"
                card1.style.backgroundImage="none" 
                card2.appendChild(card1)
                card2.style.border="black 2px solid"
             //   card2.style.height="63%"  
              // card2.style.marginTop="37%"  
                card2.style.backgroundImage="none"
               card2.style.color="black"
                card2.style.position="initial"
           playerdeck.splice(playerdeck.indexOf(card1),1)
           console.log(card1)
           robotProvide()
        }else{
              
            document.getElementById('infobox').innerHTML="Can't play this card"
        }
    }
    
} 
   



}
function Start(){
    if(Ourturn==false){
        console.log(options)
        options=[]
        console.log(robotdeck)
        //new start
        robotkozars=[]
           // robotnormalsRedone()
           options.concat(robotdeck)
           for(let i=0;i<options.length;i++){
            //console.log(ops[i].suit)
            if(options[i].suit==kozar){
                robotkozars.push(options[i])
                options.splice(i,1)
                i--;
                /*
                if( options[i]!=undefined&& options[i].suit==kozar  ){
                    robotkozars.push(options[i])
                    options.splice(i,1)
                    if( options[i]!=undefined &&options[i].suit==kozar  ){
                        robotkozars.push(options[i])
                        options.splice(i,1)
                        if( options[i]!=undefined&&options[i].suit==kozar  ){
                            robotkozars.push(options[i])
                            options.splice(i,1)
                            if(options[i]!=undefined&&options[i].suit==kozar   ){
                                robotkozars.push(options[i])
                                options.splice(i,1)
                            }
                        }
                    }
                }
                */
            }
        }
        //new end
        console.log(robotdeck)
        onlynumbersRobot=[]
        onlynumbersRobotfiltered=[]
        for(let i=0;i<robotdeck.length;i++){
            if(typeof(robotdeck[i].value)!="number"){
                if(robotdeck[i].value==Jack){
        onlynumbersRobot.push(11)
                }
                if(robotdeck[i].value==Queen){
                    onlynumbersRobot.push(12)
                            }
                            if(robotdeck[i].value==King){
                                onlynumbersRobot.push(13)
                                        }
                                        if(robotdeck[i].value==Ace){
                                            onlynumbersRobot.push(14)
                                                    }
            } else{
                onlynumbersRobot.push(robotdeck[i].value)}}
        onlynumbersRobot= onlynumbersRobot.sort(function(a, b) {
            return a - b;
          })
          console.log(onlynumbersRobot)
          console.log(robotdeck)
          onlynumbersRobotRedone()
          console.log(onlynumbersRobot)
          console.log(robotdeck)
          robotnormalnumbers=[]
          for(let i=0;i<robotdeck.length;i++){
            if(robotdeck[i].suit!=kozar){
                console.log(kozar)
                console.log(robotdeck[i].suit)
            if(!(  robotdeck[i].value=="6"||robotdeck[i].value=="7"||robotdeck[i].value=="8"||robotdeck[i].value=="9"||robotdeck[i].value=="10"   )){
                console.log("not num")
                console.log(Jack+" "+King+" "+Ace+" "+Queen)
                console.log(robotdeck[i].value)
                if(robotdeck[i].value==Jack){
                 robotnormalnumbers.push(11)
                }
                if(robotdeck[i].value==Queen){
                    robotnormalnumbers.push(12)
                            }
                            if(robotdeck[i].value==King){
                                robotnormalnumbers.push(13)
                                        }
                                        if(robotdeck[i].value==Ace){
                                            robotnormalnumbers.push(14)
                                                    }
            } else{
                console.log('num')
                console.log(robotdeck[i].value)
                robotnormalnumbers.push(robotdeck[i].value)
        
            }}}
            robotnormalnumbers= robotnormalnumbers.sort(function(a, b) {
            return a - b;
          })
        if(deck.cards.length>0){
            console.log(robotnormalnumbers)
            if(robotnormalnumbers.length>2){
                if(robotnormalnumbers[0]!=robotnormalnumbers[1]){
                    if(robotnormalnumbers[1]==robotnormalnumbers[2]){
console.log('ROBOTS AHHH')
                        RobotcardFinder(robotnormalnumbers[1],true)
                    } else{
                        console.log('ROBOTS AHHH')/////
                        RobotcardFinder(robotnormalnumbers[0],true)} } else{
                            console.log('ROBOTS AHHH')
                            RobotcardFinder(robotnormalnumbers[0],true) }
            } else if(robotnormalnumbers.length>0){
                console.log('ROBOTS AHHH')
                RobotcardFinder(robotnormalnumbers[0],true)
            }
        } else{
          //  if(playerdeck.length<=robotdeck.length){
                let matches=[]
                console.log(onlynumbersRobot)
                console.log('hey')
                for(let i=0;i<onlynumbersRobot.length-1;i++){
                    if(onlynumbersRobot[i]==onlynumbersRobot[i+1]){
                        console.log('hey')
                        matches.push(onlynumbersRobot[i])
                    } }
                    if(matches.length>1){
                        console.log('hey')
                        if(matches[matches.length-1]!=14){
                           
                            console.log('ROBOTS AHHH')
                            console.log(matches)
                            console.log(matches[matches.length-1])
                            console.log(robotdeck)
                            console.log(robotdeck.length)
                            console.log(Math.round((robotdeck.length/2)))
                            RobotcardFinder(matches[matches.length-1],false)} else{
                                console.log('ROBOTS AHHH')
                                console.log(matches)
                                console.log(matches.length)
                                console.log( matches[matches.length-2])
                                RobotcardFinder(matches[matches.length-2],false)
                            }
                    } else{console.log('ROBOTS AHHH')
                    console.log(robotdeck)
                    console.log(robotdeck.length)
                    console.log(Math.round((robotdeck.length/2)))
                        RobotcardFinder(robotdeck[Math.round((robotdeck.length/2))-1].value,false)
                        
                    }
          //  }else{
              
           // }
        }
    }

}
//this function "play" is about robots
function Play(mycard){
    console.log(mycard)
    
    for(let i=0;i<robotdeck.length;i++){
        if(robotdeck[i]==mycard){
             index=i
             console.log(robotdeck[i])
             //robotdeck.splice(i,1)

             //console.log('splice and dice')  
             console.log(robotdeck)
        }
       if(options[i]==mycard){
        options.splice(i,1)
       }
    }
    
    for(let i=(index+1);i<(robotdeck.length+1);i++){
        console.log(document.getElementById('rnum'+i))
        if(document.getElementById('rnum'+i)!=null){
        document.getElementById('rnum'+i).id='rnum'+(i-1)}
    }
     //cp
     for(let i=0;i<document.getElementsByClassName('cardy').length;i++){
        if( document.getElementsByClassName('cardy')[i].innerHTML==(mycard.value+mycard.suit) ){
            //if error with this part, possibly alter to make a new altidtoclass, altidtoclass2
            altidToClass=i;
        } else{
            console.log(document.getElementsByClassName('cardy')[i].innerHTML)
            //console.log(ops[0].value+ops[0].suit)
        }
 }
 document.getElementsByClassName('cardy')[altidToClass].style.width='70%'
 document.getElementsByClassName('cardy')[altidToClass].style.height='175px'
 console.log( document.getElementsByClassName('cardy')[altidToClass].style.position )
 document.getElementsByClassName('cardy')[altidToClass].style.position='relative'
 //document.getElementsByClassName('cardy')[altidToClass].style.top='75px'
document.getElementsByClassName('cardy')[altidToClass].id='rplayed'+(slotsfilled-1)

 console.log(document.getElementById('rplayed'+(slotsfilled)))  
 console.log(document.getElementsByClassName('cardy')[altidToClass] )
 console.log(document.getElementsByClassName('cardy')[idToClass] )
//   document.getElementById('card'+(slotsfilled)).appendChild(document.getElementsByClassName('cardy')[altidToClass])
    //cp

  //  document.getElementById('rnum'+index).style.width='70%'
   // document.getElementById('rnum'+index).style.height='175px'
   // console.log( document.getElementById('rnum'+index).innerHTML)
    //document.getElementById('rnum'+index).style.top='-175px'
   // document.getElementById('rnum'+index).style.position='relative'
    //document.getElementById('rnum'+index).id='rplayed'+(slotsfilled-1)
    console.log(document.getElementById('card'+(slotsfilled-1)))
    console.log(mycard)
    console.log(robotdeck.indexOf(mycard))
     console.log(robotdeck[robotdeck.indexOf(mycard)])
     for(let i=0;i<robotdeck.length;i++){
        if(robotdeck[i].value==mycard.value&&robotdeck[i].suit==mycard.suit){
            console.log(robotdeck[i])
            robotdeck.splice(i,1)
            console.log("splice and dice")

        }
     }
   

    // document.getElementsByClassName('cardy')[altidToClass].style.backgroundImage="none"
    document.getElementsByClassName('cardy')[altidToClass].style.position="relative"
    document.getElementsByClassName('cardy')[altidToClass].style.backgroundImage="none"
    document.getElementsByClassName('cardy')[altidToClass].style.color="black"
    document.getElementById('card'+(slotsfilled-1)).appendChild(document.getElementsByClassName('cardy')[altidToClass])
    
   
   //let played=document.createElement
   if(robotdeck.length==0&&playerdeck.length==0){
    document.getElementById("infobox").innerHTML="Tie!"
    isGameover=true
    setTimeout(function(){
        GameOver()
     }, 1000);
    return;
}else{
    if(playerdeck.length==0){
        document.getElementById("infobox").innerHTML="You won!"
        isGameover=true
        setTimeout(function(){
            GameOver()
         }, 1000);
        return;
    }
    if(robotdeck.length==0){
        document.getElementById("infobox").innerHTML="You lost!"
        isGameover=true
        setTimeout(function(){
            GameOver()
         }, 1000);
        return;
    }
}
}
let onlynumbersRobotfiltered
//forbeating
function RobotTurn(w){
    console.log(w)
    console.log(robotkozars)
            let options=[]
            for(let i=0;i<robotkozars.length;i++){
                if(!(robotkozars[i].value=="6"||robotkozars[i].value=="7"||robotkozars[i].value=="8"||robotkozars[i].value=="9"||robotkozars[i].value=="10"  )){
                    options.push(robotkozars[i])
                    robotkozars.splice(i,1)
                    i--;
                }
            }
            console.log(robotkozars)
            for (let j = 1; j < robotkozars.length; j++)
            {
               let temp = robotkozars[j].value;
               let possibleIndex = j;
               while (possibleIndex > 0 && temp < robotkozars[possibleIndex - 1].value)
               {
                  robotkozars[possibleIndex].value = robotkozars[possibleIndex - 1].value;
                  possibleIndex--;
               }
               robotkozars[possibleIndex].value = temp;
            }
            console.log(robotkozars)
            console.log(options)
            for(let i=0;i<options.length;i++){
                if(options[i].value==Jack){
                    let temp=options[i]
                    options[i]=options[0]
                    options[0]=temp
                }
                if(options[i].value==Queen){
                    if(options[0].value!=Jack){
                    let temp=options[i]
                    options[i]=options[0]
                    options[0]=temp
                    }else{
                        let temp=options[i]
                    options[i]=options[1]
                    options[1]=temp
                    }
                }
                if(options[i].value==Ace){
                    let temp=options[i]
                    options[i]=options[options.length-1]
                    options[options.length-1]=temp
                }
            }
            console.log(options)
            robotkozars=robotkozars.concat(options)
            console.log(robotkozars)
            options=[]
    //LET HIM USE KOZARS
if(Ourturn==false){
    Ourturn=true

console.log(robotdeck)
console.log(robotdeck.length)
/*
for(let i=0;i<robotdeck.length;i++){
    if(robotdeck[i].suit==kozar){
        console.log(robotdeck[i])
robotkozars.push(robotdeck[i])
    }
} */
console.log(robotdeck)
console.log(robotkozars)
robotnormalsRedone() 
if(robotkozars.length>0){
for(let i=0;i<robotnormals.length;i++){
    for(let j=0;j<robotkozars.length;j++){
        console.log(robotdeck)
    if(robotnormals[i]==robotkozars[j]){
        
        robotnormals.splice(i,1)

    }
    }
}}

console.log(deck.cards)
console.log(robotnormals)
console.log(robotdeck)
options=[]
for(let i=0;i<robotnormals.length;i++){
    if(robotnormals[i].suit==document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[1]||robotnormals[i].suit==document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[2]){
        options.push(robotnormals[i])
        console.log('push!')
    }}
    console.log(options.length)
    if(options.length==0){
        console.log('no normal options')
            if(document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[1]!=kozar&&document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[2]!=kozar){
                console.log('not given kozar')
        if(robotkozars.length==0){
            console.log('no koazr options')
            console.log(slotsfilled)
             takenCards=[];rox=robotdeck.length
            for(let i=(slotsfilled-1);i>-1;i--){
                console.log('HERE'+i+''+document.getElementById('cardplayed'+i).innerHTML)
                if(document.getElementById('rplayed'+i)!=null){
                    takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                Take1(document.getElementById('rplayed'+i))
                
                }
                takenCards.push(document.getElementById('cardplayed'+i).innerHTML)
                Take1(document.getElementById('cardplayed'+i))
            }
    } else{
        console.log(deck.cards.length)
     if(deck.cards.length>=16){
        console.log(playerdeck)
        console.log(robotdeck)
        console.log(robotkozars)
         takenCards=[];rox=robotdeck.length
        for(let i=(slotsfilled-1);i>-1;i--){
            console.log(document.getElementById('cardplayed'+(i+1)))
            console.log(document.getElementById('cardplayed'+(i-1)))
            console.log(document.getElementById('cardplayed'+i))
            console.log('HERE'+i+''+document.getElementById('cardplayed'+i))
            if(document.getElementById('rplayed'+i)!=null){
                takenCards.push(document.getElementById('rplayed'+i).innerHTML )
            Take1(document.getElementById('rplayed'+i))
            }
            takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
            Take1(document.getElementById('cardplayed'+i))
        }
     } else if(deck.cards.length<16&&deck.cards.length>10){
        let options=[]
        for(let i=0;i<robotkozars.length;i++){
            if(!(robotkozars[i].value=="6"||robotkozars[i].value=="7"||robotkozars[i].value=="8"||robotkozars[i].value=="9"||robotkozars[i].value=="10"  )){
                options.push(robotkozars[i])
                robotkozars.splice(i,1)
                i--;
            }
        }
        console.log(robotkozars)
        for (let j = 1; j < robotkozars.length; j++)
        {
           let temp = robotkozars[j].value;
           let possibleIndex = j;
           while (possibleIndex > 0 && temp < robotkozars[possibleIndex - 1].value)
           {
              robotkozars[possibleIndex].value = robotkozars[possibleIndex - 1].value;
              possibleIndex--;
           }
           robotkozars[possibleIndex].value = temp;
        }
        console.log(robotkozars)
        console.log(options)
        for(let i=0;i<options.length;i++){
            if(options[i].value==Jack){
                let temp=options[i]
                options[i]=options[0]
                options[0]=temp
            }
            if(options[i].value==Queen){
                if(options[0].value!=Jack){
                let temp=options[i]
                options[i]=options[0]
                options[0]=temp
                }else{
                    let temp=options[i]
                options[i]=options[1]
                options[1]=temp
                }
            }
            if(options[i].value==Ace){
                let temp=options[i]
                options[i]=options[options.length-1]
                options[options.length-1]=temp
            }
        }
        console.log(options)
        robotkozars=robotkozars.concat(options)
        console.log(robotkozars)
        options=[]
        console.log(playerdeck)
        console.log(robotdeck)
        console.log(robotkozars)
        if(robotkozars.length>1){
            console.log("PLAYING TIME")
            Play(robotkozars[0])
        } else{
            /*
            let options=[]
            for(let i=0;i<robotkozars.length;i++){
                if(!(robotkozars[i].value=="6"||robotkozars[i].value=="7"||robotkozars[i].value=="8"||robotkozars[i].value=="9"||robotkozars[i].value=="10"  )){
                    options.push(robotkozars[i])
                    robotkozars.splice(i,1)
                    i--;
                }
            }
            console.log(robotkozars)
            for (let j = 1; j < robotkozars.length; j++)
            {
               let temp = robotkozars[j].value;
               let possibleIndex = j;
               while (possibleIndex > 0 && temp < robotkozars[possibleIndex - 1].value)
               {
                  robotkozars[possibleIndex].value = robotkozars[possibleIndex - 1].value;
                  possibleIndex--;
               }
               robotkozars[possibleIndex].value = temp;
            }
            console.log(robotkozars)
            console.log(options)
            for(let i=0;i<options.length;i++){
                if(options[i].value==Jack){
                    let temp=options[i]
                    options[i]=options[0]
                    options[0]=temp
                }
                if(options[i].value==Queen){
                    if(options[0].value!=Jack){
                    let temp=options[i]
                    options[i]=options[0]
                    options[0]=temp
                    }else{
                        let temp=options[i]
                    options[i]=options[1]
                    options[1]=temp
                    }
                }
                if(options[i].value==Ace){
                    let temp=options[i]
                    options[i]=options[options.length-1]
                    options[options.length-1]=temp
                }
            }
            console.log(options)
            robotkozars=robotkozars.concat(options)
            console.log(robotkozars)
            options=[]
            */
             takenCards=[];rox=robotdeck.length
            for(let i=(slotsfilled-1);i>-1;i--){
                console.log('HERE'+i+''+document.getElementById('cardplayed'+i))
                if(document.getElementById('rplayed'+i)!=null){
                    takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                    Take1(document.getElementById('rplayed'+i))
                    }
                    takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
                Take1(document.getElementById('cardplayed'+i))
            } }}else if(deck.cards.length<=10&&deck.cards.length>2){
        console.log(playerdeck)
            console.log(robotdeck)
            
        if(slotsfilled>1&&robotkozars.length>1){
            console.log("PLAYING TIME")
            Play(robotkozars[0]) } else{
                for(let i=(slotsfilled-1);i>-1;i--){
                    console.log('HERE'+i+''+document.getElementById('cardplayed'+i).innerHTML)
                    if(document.getElementById('rplayed'+i)!=null){
                        takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                        Take1(document.getElementById('rplayed'+i))
                        }
                        takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
                    Take1(document.getElementById('cardplayed'+i))
                }
            }}else if(deck.cards.length<=2){
            console.log(playerdeck)
            console.log(robotdeck)
            console.log(robotkozars)
            if(robotkozars.length>0){
                console.log("PLAYING TIME")
                        Play(robotkozars[0])
                    }
                /*    else if(playerdeck<=3){
            if(slotsfilled>1&&robotkozars.length>=0){
                console.log("PLAYING TIME")
                Play(robotkozars[0])}
            if(slotsfilled>=0&&robotdeck.length>=9){
                //idk if it should be deck.cards.length or what
                let magic=Math.random()
                if(magic<.55){
                    console.log("PLAYING TIME")
                    Play(robotkozars[0])} else{
                         takenCards=[];rox=robotdeck.length
                        for(let i=(slotsfilled-1);i>-1;i--){
                            console.log('HERE'+i+''+document.getElementById('cardplayed'+i))
                            if(document.getElementById('rplayed'+i)!=null){
                                takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                                Take1(document.getElementById('rplayed'+i))
                                }
                                takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
                            Take1(document.getElementById('cardplayed'+i))
                        }
                    } 
            }else{
                console.log('huh')
                 takenCards=[];rox=robotdeck.length
                for(let i=(slotsfilled-1);i>-1;i--){
                    console.log('HERE'+i+''+document.getElementById('cardplayed'+i))
                    if(document.getElementById('rplayed'+i)!=null){
                        takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                        Take1(document.getElementById('rplayed'+i))

                        }
                        takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
                    Take1(document.getElementById('cardplayed'+i))
                }
            }*/
         else{//thisone
             takenCards=[];rox=robotdeck.length
            for(let i=(slotsfilled-1);i>-1;i--){
                console.log('HERE'+i+''+document.getElementById('cardplayed'+i).innerHTML)
                if(document.getElementById('rplayed'+i)!=null){
                    takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                    Take1(document.getElementById('rplayed'+i))
                    }
                    takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
                Take1(document.getElementById('cardplayed'+i))
            }
        }
        }
    
    } 
} else{
    //this is if they give u a kozar
    //document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[1]!=kozar&&document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[2]!=kozar
console.log('ahhh')
console.log(robotkozars)
console.log(robotkozars.length )
console.log(deck.cards.length)
console.log(slotsfilled)
if((document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[1]==kozar )&&(! ((document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0])!='6'&&(document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0])!='7'&&(document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0])!='8'&&(document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]-0)!='9'  )==false) ){
  
for(let i=0;i<robotkozars.length;i++){
    if(robotkozars[i].value==10||robotkozars[i].value>document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0] ){
        
    }else{
        robotkozars.splice(i,1)
        i--;
    }
}
    
}else{
     
for(let i=0;i<robotkozars.length;i++){
    if(robotkozars[i].value!=Jack&&robotkozars[i].value!=Queen&&robotkozars[i].value!=King&&robotkozars[i].value!=Ace){
        robotkozars.splice(i,1)
        i--;
    }
}
}
//console.log(document.getElementById('cardplayed'+i))
if(robotkozars.length==0){
     takenCards=[];rox=robotdeck.length
    for(let i=(slotsfilled-1);i>-1;i--){
        console.log(i)
        console.log(document.getElementById('cardplayed'+i))
        console.log('HERE'+i+' '+document.getElementById('cardplayed'+i))
        if(document.getElementById('rplayed'+i)!=null){
            takenCards.push(document.getElementById('rplayed'+i).innerHTML )
            Take1(document.getElementById('rplayed'+i))
            }
            takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
        Take1(document.getElementById('cardplayed'+i))
    }
} else{
 if(deck.cards.length>=18){
    console.log(document.getElementById('cardplayed'-0))
     takenCards=[];rox=robotdeck.length
    for(let i=(slotsfilled-1);i>-1;i--){
        console.log(document.getElementById('cardplayed'-0))
        console.log(i)
        console.log('HERE'+i+' '+document.getElementById('cardplayed'+i))
        if(document.getElementById('rplayed'+i)!=null){
            takenCards.push(document.getElementById('rplayed'+i).innerHTML )
            Take1(document.getElementById('rplayed'+i))
            }
            takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
        Take1(document.getElementById('cardplayed'+i))
    }
 }  else if(deck.cards.length<18&&deck.cards.length>10){
    if(slotsfilled>2&&robotkozars.length>1){
        console.log("PLAYING TIME")
        Play(robotkozars[0])
    } else{
         takenCards=[];rox=robotdeck.length
        for(let i=(slotsfilled-1);i>-1;i--){
            console.log('HERE'+i+''+document.getElementById('cardplayed'+i))
            if(document.getElementById('rplayed'+i)!=null){
                takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                Take1(document.getElementById('rplayed'+i))
                }
                takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
            Take1(document.getElementById('cardplayed'+i))
        } }}else if(deck.cards.length<=10&&deck.cards.length>2){
    if(slotsfilled>1&&robotkozars.length>1){
        console.log("PLAYING TIME")
        Play(robotkozars[0]) } else{
             takenCards=[];rox=robotdeck.length
            for(let i=(slotsfilled-1);i>-1;i--){
                console.log('HERE'+i+''+document.getElementById('cardplayed'+i))
                if(document.getElementById('rplayed'+i)!=null){
                    takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                    Take1(document.getElementById('rplayed'+i))
                    }
                    takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
                Take1(document.getElementById('cardplayed'+i))
            }
        }}
    if(deck.cards.length<=2){
        if(playerdeck.length>4&&robotkozars.length>2){
            console.log("PLAYING TIME")
                    Play(robotkozars[0])}
    if(playerdeck.length<=3){

        if(slotsfilled>1&&robotkozars.length>=0){
            console.log("PLAYING TIME")
            Play(robotkozars[0])}
        if(slotsfilled>=0&&robotdeck.length>=9){
            //idk if it should be deck.cards.length or what
            let magic=Math.random()
            console.log(magic)
            if(magic<.55){
                console.log("PLAYING TIME")
                Play(robotkozars[0])} else{
                     takenCards=[];rox=robotdeck.length
                    for(let i=(slotsfilled-1);i>-1;i--){
                        console.log('HERE'+i+''+document.getElementById('cardplayed'+i))
                        if(document.getElementById('rplayed'+i)!=null){
                            takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                            Take1(document.getElementById('rplayed'+i))
                            }
                            takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
                        Take1(document.getElementById('cardplayed'+i))
                    }
                } 
        }else{
            let magic=Math.random()
            console.log(magic)
            if(magic<.55){
                console.log("PLAYING TIME")
                Play(robotkozars[0])} else{
                     takenCards=[];rox=robotdeck.length
                    for(let i=(slotsfilled-1);i>-1;i--){
                        console.log('HERE'+i+''+document.getElementById('cardplayed'+i))
                        if(document.getElementById('rplayed'+i)!=undefined){
                            takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                            Take1(document.getElementById('rplayed'+i))
                            }
                            takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                        Take1(document.getElementById('cardplayed'+i))
                    }
                } 
        }

    } else{
        let magic=Math.random()
        console.log(magic)
        if(magic<.55){
            console.log("PLAYING TIME")
            Play(robotkozars[0])} else{
                 takenCards=[];rox=robotdeck.length
                for(let i=(slotsfilled-1);i>-1;i--){
                    console.log('HERE'+i+''+document.getElementById('cardplayed'+i))
                    if(document.getElementById('rplayed'+i)!=null){
                        takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                        Take1(document.getElementById('rplayed'+i))
                        }
                        console.log(i)
                        takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
                    Take1(document.getElementById('cardplayed'+i))
                }
            } 

    }
    }

}
}
} else{
console.log(document.getElementById('cardplayed'+(slotsfilled-1)))
if(document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[1]!=kozar&&document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[2]!=kozar){
console.log(options)
    if((document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0])!='6'&&(document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0])!='7'&&(document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0])!='8'&&(document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]-0)!='9' ){
       console.log(document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML.length>2)
       //console.log((document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]-0)!=(6||7||8||9))
        for(let i=0;i<options.length;i++){
            if(options[i].value==Jack){
                let temp=options[i]
                options[i]=options[0]
                options[0]=temp
            }
            if(options[i].value==Queen){
                if(options[0].value!=Jack){
                let temp=options[i]
                options[i]=options[0]
                options[0]=temp
                }else{
                    let temp=options[i]
                options[i]=options[1]
                options[1]=temp
                }
            }
            if(options[i].value==Ace){
                let temp=options[i]
                options[i]=options[options.length-1]
                options[options.length-1]=temp
            }
        }
       //GOTTA SORT LIST//done, see above
       console.log(robotdeck)
        for(let i=0;i<options.length;i++){
            console.log(options[i].value)
            console.log(Jack)
            console.log((document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]-0))
            //&&document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[2]==options[i].suit copy and paste removed from 1315
            //&&document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[2]==options[i].suit copy and paste removed from 1315
            if(options[i].value==Jack&&((document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]=="6"||document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]=="7"||document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]=="8"||document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]=="9"||document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]=="1" ))){
                //with current code, he can beat a face card with any other face card<- outdated?
                console.log("PLAYING TIME")
                Play(options[i])
                console.log(i)
                i=100} else if(options[i].value==Queen&&((document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]=="6"||document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]=="7"||document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]=="8"||document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]=="9"||document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]=="1" )||document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]==Jack  )){
                    console.log("PLAYING TIME")
                    Play(options[i])
                    console.log(i)
                    i=100
                } else if(options[i].value==King&&document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]!=Ace){
                    console.log("PLAYING TIME")
                    Play(options[i])
                    i=100
                    console.log(i)
                }else if(options[i].value==Ace){
                    console.log("PLAYING TIME")
                    Play(options[i])
                    console.log(i)
                    i=100
                } else if(i==(options.length-1)){
                    console.log('fail')
                     takenCards=[];rox=robotdeck.length
                    for(let i=(slotsfilled-1);i>-1;i--){
                        console.log('HERE'+i+' '+document.getElementById('cardplayed'+i).innerHTML)
                        if(document.getElementById('rplayed'+i)!=null){
                            takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                            Take1(document.getElementById('rplayed'+i))
                            }
                            takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
                        Take1(document.getElementById('cardplayed'+i))
                    }
                    normal=false
                    console.log('no play :(')
                    
                   
                }
                console.log(i)
        }
        console.log(options)
    } else if(((document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]=="6"||document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]=="7"||document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]=="8"||document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]=="9"||document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0]=="10" ))){
    console.log(onlynumbersRobot)
    onlynumbersRobotRedone()
    console.log(onlynumbersRobot)
        onlynumbersRobot= onlynumbersRobot.sort(function(a, b) {
            return a - b;
          })
        console.log(onlynumbersRobot)
        console.log(options)
        if(options.length==0){
             takenCards=[];rox=robotdeck.length
                for(let i=(slotsfilled-1);i>-1;i--){
                    console.log('HERE'+i+''+document.getElementById('cardplayed'+i))
                    if(document.getElementById('rplayed'+i)!=null){
                        takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                        Take1(document.getElementById('rplayed'+i))
                        }
                        takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
                    Take1(document.getElementById('cardplayed'+i))
                }
            
        }
        for(let i=0;i<options.length;i++){
           onlynumbersRobotfiltered= onlynumbersRobot.filter((number) => number >document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[0] )
        console.log(onlynumbersRobotfiltered)
        }
        console.log(onlynumbersRobotfiltered)
        if(onlynumbersRobotfiltered.length==0){
            normal=false

        } else{
        for(let j=0;j<onlynumbersRobotfiltered.length;j++){
            if(onlynumbersRobotfiltered[j]>10){
                console.log(robotdeck)
                if(onlynumbersRobotfiltered[j]==11){
                    for(let i=0;i<robotdeck.length;i++){
                        console.log(robotdeck)
                    if(robotdeck[i].value==Jack&&robotdeck[i].suit==document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[(1)]){
                     
                    
                        console.log("PLAYING TIME")
                                console.log(robotdeck[i])
                                Play(robotdeck[i])
                                console.log(i)
                                
                                i=100
                                j=100
                            
                        
                    }}}
                    if(onlynumbersRobotfiltered[j]==12){
                        for(let i=0;i<robotdeck.length;i++){
                        if(robotdeck[i].value==Queen&&robotdeck[i].suit==document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[(1)]){
                          
                    
                                    console.log(robotdeck)
                                    console.log("PLAYING TIME")
                                    Play(robotdeck[i])
                                    console.log(i)
                                    
                                    i=100
                                    j=100
                                
                            
                        }}}
                        if(onlynumbersRobotfiltered[j]==13){
                            for(let i=0;i<robotdeck.length;i++){
                            if(robotdeck[i].value==King&&robotdeck[i].suit==document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[(1)]){
                                
                                        console.log(robotdeck)
                                        console.log("PLAYING TIME")
                                        Play(robotdeck[i])
                                        console.log(i)
                                        
                                        i=100
                                        j=100
                                    
                                
                            }}}
                            if(onlynumbersRobotfiltered[j]==14){
                                for(let i=0;i<robotdeck.length;i++){
                                if(robotdeck[i].value==Ace&&robotdeck[i].suit==document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[(1)]){
                                    
                                            console.log(robotdeck)
                                            console.log("PLAYING TIME")
                                            Play(robotdeck[i])
                                            console.log(i)
                                            
                                            i=100
                                            j=100
                                        
                                    
                                }}}
                
            } else{
                console.log(onlynumbersRobotfiltered[0])
                for(let i=0;i<robotdeck.length;i++){
                    
                if(robotdeck[i].value==onlynumbersRobotfiltered[j]&&robotdeck[i].suit==document.getElementById('cardplayed'+(slotsfilled-1)).innerHTML[(1)]){
                    console.log(robotdeck)
                    console.log("PLAYING TIME")
                    Play(robotdeck[i])
                    console.log(i)
                    
                    i=100
                    j=100
                }
            }
            }
            if(j==(onlynumbersRobotfiltered.length-1)){
                console.log('COULDNT BEAT')
                 takenCards=[];rox=robotdeck.length
                for(let i=(slotsfilled-1);i>-1;i--){
                    console.log('HERE'+i+''+document.getElementById('cardplayed'+i))
                    if(document.getElementById('rplayed'+i)!=null){
                        takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                        Take1(document.getElementById('rplayed'+i))
                        }
                        takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
                    Take1(document.getElementById('cardplayed'+i))
                }
            }
        } 
        
        // for(let i=(slotsfilled-1);i>-1;i--){
        //     console.log('HERE '+i+' '+document.getElementById('cardplayed'+i))
        //     Take1(document.getElementById('cardplayed'+i))
        // }
    }
} 
console.log(normal)

} else{
//this is if they give u a kozar
console.log('ahhh')
//console.log(document.getElementById('cardplayed'+i))
if(robotkozars.length==0){
     takenCards=[];rox=robotdeck.length
    for(let i=(slotsfilled-1);i>-1;i--){
        console.log(i)
        console.log(document.getElementById('cardplayed'+i))
        console.log('HERE'+i+''+document.getElementById('cardplayed'+i))
        if(document.getElementById('rplayed'+i)!=null){
            takenCards.push(document.getElementById('rplayed'+i).innerHTML )
            Take1(document.getElementById('rplayed'+i))
            }
            takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
        Take1(document.getElementById('cardplayed'+i))
    }
} else{
 if(deck.cards.length>=18){
    console.log(document.getElementById('cardplayed'-0))
     takenCards=[];rox=robotdeck.length
    for(let i=(slotsfilled-1);i>-1;i--){
        console.log(document.getElementById('cardplayed'-0))
        console.log(i)
        console.log('HERE'+i+''+document.getElementById('cardplayed'+i))
        if(document.getElementById('rplayed'+i)!=null){
            takenCards.push(document.getElementById('rplayed'+i).innerHTML )
            Take1(document.getElementById('rplayed'+i))
            }
            takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
        Take1(document.getElementById('cardplayed'+i))
    }
 }else if(deck.cards.length<18&&deck.length>10){
    if(slotsfilled>2&&robotkozars.length>1){
        console.log("PLAYING TIME")
        Play(robotkozars[0])
    } else{
         takenCards=[];rox=robotdeck.length
        for(let i=(slotsfilled-1);i>-1;i--){
            console.log('HERE'+i+''+document.getElementById('cardplayed'+i))
            if(document.getElementById('rplayed'+i)!=null){
                takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                Take1(document.getElementById('rplayed'+i))
                }
                takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
            Take1(document.getElementById('cardplayed'+i))
        } }} else if(deck.cards.length<=10&&deck.cards.length>2){
    if(slotsfilled>1&&robotkozars.length>1){
        console.log("PLAYING TIME")
        Play(robotkozars[0]) } else{
             takenCards=[];rox=robotdeck.length
            for(let i=(slotsfilled-1);i>-1;i--){
                console.log('HERE'+i+''+document.getElementById('cardplayed'+i))

                if(document.getElementById('rplayed'+i)!=null){
                    takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                    Take1(document.getElementById('rplayed'+i))
                    }
                    takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
                Take1(document.getElementById('cardplayed'+i))
            }
        }}else if(deck.cards.length<=2){
        if(playerdeck.length>4&&robotkozars.length>2){
            console.log("PLAYING TIME")
                    Play(robotkozars[0])}
    if(playerdeck<=3){
        if(slotsfilled>1&&robotkozars.length>=0){
            console.log("PLAYING TIME")
            Play(robotkozars[0])}
        if(slotsfilled>=0&&robotdeck.length>=9){
            //idk if it should be deck.cards.length or what
            let magic=Math.random()
            if(magic<.55){
                console.log("PLAYING TIME")
                Play(robotkozars[0])} else{
                     takenCards=[];rox=robotdeck.length
                    for(let i=(slotsfilled-1);i>-1;i--){
                        console.log('HERE'+i+''+document.getElementById('cardplayed'+i))
                       
                        if(document.getElementById('rplayed'+i)!=null){
                            takenCards.push(document.getElementById('rplayed'+i).innerHTML )
                            Take1(document.getElementById('rplayed'+i))
                            }
                            takenCards.push(document.getElementById('cardplayed'+i).innerHTML )
                        Take1(document.getElementById('cardplayed'+i))
                    }
                } 
        }else{
            console.log('huh')
        }
    }
    }

}
}
}
}
}
function GameOver(){
let x=document.getElementById("congrats")
x.style.visibility="visible"
x.style.width="25%"
x.style.height="auto"

}
function Redo(){
    if(isGameover){
        
        location.reload()
    }
}





function PlayerNum(x){
    //document.getElementById('buttons').style.visibility='hidden'
    //document.getElementById('buttons').style.visibility='hidden'
    document.getElementById('trash').style.visibility='visible'
    document.getElementById('bottom').style.height= document.getElementById('deck').style.width
    document.getElementById('robotdeck').style.visibility='visible'
    document.getElementById('parentdeck').style.visibility='visible'
      //document.getElementById('columnOne').style.visibility="visible"
Gamesetup(x)
}
