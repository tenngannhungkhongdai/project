let banco=[
    ['a1','b1','c1','d1','e1','f1','g1','h1'],
    ['a2','b2','c2','d2','e2','f2','g2','h2'],
    ['a3','b3','c3','d3','e3','f3','g3','h3'],
    ['a4','b4','c4','d4','e4','f4','g4','h4'],
    ['a5','b5','c5','d5','e5','f5','g5','h5'],
    ['a6','b6','c6','d6','e6','f6','g6','h6'],
    ['a7','b7','c7','d7','e7','f7','g7','h7'],
    ['a8','b8','c8','d8','e8','f8','g8','h8']
]
let column1=['a1','a2','a3','a4','a5','a6','a7','a8']
let column2=['b1','b2','b3','b4','b5','b6','b7','b8']
let column3=['c1','c2','c3','c4','c5','c6','c7','c8']
let column4=['d1','d2','d3','d4','d5','d6','d7','d8']
let column5=['e1','e2','e3','e4','e5','e6','e7','e8']
let column6=['f1','f2','f3','f4','f5','f6','f7','f8']
let column7=['g1','g2','g3','g4','g5','g6','g7','g8']
let column8=['h1','h2','h3','h4','h5','h6','h7','h8']
var o=document.getElementsByClassName('square')
var b151=banco[7][0]
var b131=banco[7][1]
var b141=banco[7][2]
var b191=banco[7][3]
var b101=banco[7][4]
var b142=banco[7][5]
var b132=banco[7][6]
var b152=banco[7][7]
var b111=banco[6][0]
var b112=banco[6][1]
var b113=banco[6][2]
var b114=banco[6][3]
var b115=banco[6][4]
var b116=banco[6][5]
var b117=banco[6][6]
var b118=banco[6][7]
var w051=banco[0][0]
var w031=banco[0][1]
var w041=banco[0][2]
var w091=banco[0][3]
var w001=banco[0][4]
var w042=banco[0][5]
var w032=banco[0][6]
var w052=banco[0][7]
var w011=banco[1][0]
var w012=banco[1][1]
var w013=banco[1][2]
var w014=banco[1][3]
var w015=banco[1][4]
var w016=banco[1][5]
var w017=banco[1][6]
var w018=banco[1][7]
for(i=0;i<o.length;i++){
    if(o[i].id==b151){o[i].innerHTML='<button class="bpiece" id="b151">rook</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==b152){o[i].innerHTML='<button class="bpiece" id="b152">rook</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==b131){o[i].innerHTML='<button class="bpiece" id="b131">knight</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==b132){o[i].innerHTML='<button class="bpiece" id="b132">knight</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==b141){o[i].innerHTML='<button class="bpiece" id="b141">bishop</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==b142){o[i].innerHTML='<button class="bpiece" id="b142">bishop</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==b191){o[i].innerHTML='<button class="bpiece" id="b191">bqueen</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==b101){o[i].innerHTML='<button class="bpiece" id="b101">king</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==b111){o[i].innerHTML='<button class="bpiece" id="b111">pawn</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==b112){o[i].innerHTML='<button class="bpiece" id="b112">pawn</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==b113){o[i].innerHTML='<button class="bpiece" id="b113">pawn</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==b114){o[i].innerHTML='<button class="bpiece" id="b114">pawn</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==b115){o[i].innerHTML='<button class="bpiece" id="b115">pawn</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==b116){o[i].innerHTML='<button class="bpiece" id="b116">pawn</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==b117){o[i].innerHTML='<button class="bpiece" id="b117">pawn</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==b118){o[i].innerHTML='<button class="bpiece" id="b118">pawn</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w051){o[i].innerHTML='<button class="wpiece" id="w051">rook</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w052){o[i].innerHTML='<button class="wpiece" id="w052">rook</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w031){o[i].innerHTML='<button class="wpiece" id="w031">knight</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w032){o[i].innerHTML='<button class="wpiece" id="w032">knight</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w041){o[i].innerHTML='<button class="wpiece" id="w041">bishop</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w042){o[i].innerHTML='<button class="wpiece" id="w042">bishop</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w091){o[i].innerHTML='<button class="wpiece" id="w091">queen</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w001){o[i].innerHTML='<button class="wpiece" id="w001">king</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w011){o[i].innerHTML='<button class="wpiece" id="w011">pawn</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w012){o[i].innerHTML='<button class="wpiece" id="w012">pawn</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w013){o[i].innerHTML='<button class="wpiece" id="w013">pawn</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w014){o[i].innerHTML='<button class="wpiece" id="w014">pawn</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w015){o[i].innerHTML='<button class="wpiece" id="w015">pawn</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w016){o[i].innerHTML='<button class="wpiece" id="w016">pawn</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w017){o[i].innerHTML='<button class="wpiece" id="w017">pawn</button>'}
}
for(i=0;i<o.length;i++){
    if(o[i].id==w018){o[i].innerHTML='<button class="wpiece" id="w018">pawn</button>'}
}
var unmove = document.getElementsByClassName('wpiece')
for(a=0;a<unmove.length;a++){unmove[a].addEventListener('click',unmovable)}
var unmove = document.getElementsByClassName('bpiece')
for(a=0;a<unmove.length;a++){unmove[a].addEventListener('click',unmovable)}
function unmovable(){
    for(i=0;i<o.length;i++){if(o[i].id==movable){o[i].innerHTML=''}}
}
document.getElementById('014').addEventListener('click',vitri)
function vitri(){
    alert('w'+parseInt(this.id))
    alert(w014)
    for(x=0;x<banco.length;x++){if(banco[x].includes(a)){
            var y=banco[x].indexOf(a)
            alert(banco[x][y])
        }
    }
}
function tienhaibuoc(){
    movable=banco[3][3]
    for(i=0;i<o.length;i++){if(o[i].id==movable){o[i].innerHTML='<button class="movable"></button>'}}
}