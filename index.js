// no argument
//const wallPaint = function(){
//    console.log("The wall has been painted red.");
//};
//wallPaint();
// single argument
//const wallPaint = function(color){
//   console.log("The wall has been painted " + color.);
//};
//wallPaint("green");
//wallPaint("blue");
//wallPaint();

const wallPaint = function(side, color){
    console.log("The " + side ,"wall has been painted " + color.);
};

wallPaint("North","blue");
