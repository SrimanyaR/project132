prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DInRsMlYU/model.json' ,modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!!!!')
}

function check() 
{
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The prediction is "+ prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
    console.log(results);
    document.getElementById("status").innerHTML = results[0].label;
    prediction_1 = results[0].label;
}}


//create your model and store it in var classifier 

//define function modelLoaded

//define function check() 


//define function gotResult(error, results)
