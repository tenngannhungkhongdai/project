let row1=['a1','b1','c1','d1','e1','f1','g1','h1']
let row2=['a2','b2','c2','d2','e2','f2','g2','h2']
let row3=['a3','b3','c3','d3','e3','f3','g3','h3']
let row4=['a4','b4','c4','d4','e4','f4','g4','h4']
let row5=['a5','b5','c5','d5','e5','f5','g5','h5']
let row6=['a6','b6','c6','d6','e6','f6','g6','h6']
let row7=['a7','b7','c7','d7','e7','f7','g7','h7']
let row8=['a8','b8','c8','d8','e8','f8','g8','h8']
let column1=['a1','a2','a3','a4','a5','a6','a7','a8']
let column2=['b1','b2','b3','b4','b5','b6','b7','b8']
let column3=['c1','c2','c3','c4','c5','c6','c7','c8']
let column4=['d1','d2','d3','d4','d5','d6','d7','d8']
let column5=['e1','e2','e3','e4','e5','e6','e7','e8']
let column6=['f1','f2','f3','f4','f5','f6','f7','f8']
let column7=['g1','g2','g3','g4','g5','g6','g7','g8']
let column8=['h1','h2','h3','h4','h5','h6','h7','h8']
var o=document.getElementsByClassName('square')
brook1=row8[0]
bknight1=row8[1]
bbishop1=row8[2]
bqueen=row8[3]
bking=row8[4]
bbishop2=row8[5]
bknight2=row8[6]
brook2=row8[7]
bpawn1=row7[0]
bpawn2=row7[1]
bpawn3=row7[2]
bpawn4=row7[3]
bpawn5=row7[4]
bpawn6=row7[5]
bpawn7=row7[6]
bpawn8=row7[7]
wrook1=row1[0]
wknight1=row1[1]
wbishop1=row1[2]
wqueen=row1[3]
wking=row1[4]
wbishop2=row1[5]
wknight2=row1[6]
wrook2=row1[7]
wpawn1=row2[0]
wpawn2=row2[1]
wpawn3=row2[2]
wpawn4=row2[3]
wpawn5=row2[4]
wpawn6=row2[5]
wpawn7=row2[6]
wpawn8=row2[7]
for(i=0;i<o.length;i++){
    if(o[i].id==brook1||o[i].id==brook2){o[i].innerHTML='<button class="brook">rook</button>'}
    if(o[i].id==bknight1||o[i].id==bknight2){o[i].innerHTML='<button class="bknight">knight</button>'}
    if(o[i].id==bbishop1||o[i].id==bbishop2){o[i].innerHTML='<button class="bbishop">bishop</button>'}
    if(o[i].id==bqueen){o[i].innerHTML='<button class="bqueen">queen</button>'}
    if(o[i].id==bking){o[i].innerHTML='<button class="bking">king</button>'}
    if(
        o[i].id==bpawn1||
        o[i].id==bpawn2||
        o[i].id==bpawn3||
        o[i].id==bpawn4||
        o[i].id==bpawn5||
        o[i].id==bpawn6||
        o[i].id==bpawn7||
        o[i].id==bpawn8
    ){o[i].innerHTML='<button class="bpawn">pawn</button>'}
    if(o[i].id==wrook1||o[i].id==wrook2){o[i].innerHTML='<button class="wrook">rook</button>'}
    if(o[i].id==wknight1||o[i].id==wknight2){o[i].innerHTML='<button class="wknight">knight</button>'}
    if(o[i].id==wbishop1||o[i].id==wbishop2){o[i].innerHTML='<button class="wbishop">bishop</button>'}
    if(o[i].id==wqueen){o[i].innerHTML='<button class="wqueen">queen</button>'}
    if(o[i].id==wking){o[i].innerHTML='<button class="wking">king</button>'}
    if(
        o[i].id==wpawn1||
        o[i].id==wpawn2||
        o[i].id==wpawn3||
        o[i].id==wpawn4||
        o[i].id==wpawn5||
        o[i].id==wpawn6||
        o[i].id==wpawn7||
        o[i].id==wpawn8
    ){o[i].innerHTML='<button class="wpawn">pawn</button>'}
}
