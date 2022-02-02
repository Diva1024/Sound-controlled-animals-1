function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/TcIQ4lgo2/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);

}
var dog=0;
var lion=0;
var clap=0;
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";
        img=document.getElementById("ear_img");
        if(results[0].label=="Clap"){
            img.src="clap.png";
            clap=clap+1;

        }
         else if(results[0].label=="Bark"){
            img.src="barking.jpg";
            dog=dog+1;

        }
         else if(results[0].label=="Roaring"){
            img.src="roar.jpg";
            lion=lion+1;
        }
         else{
            img.src="speaker.png";
        }
    }

}
