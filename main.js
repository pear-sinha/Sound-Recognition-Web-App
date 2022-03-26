var classifier;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rDgu-8R8c/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    console.log("function gotResults is called.");
    if (error){
        console.error(error);
    } 
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById('result_label').innerHTML = "I can hear: " + results[0].label;
        document.getElementById('result_label').style.color = "rgb("+random_number_r+""+random_number_g+""+random_number_b+")";
        document.getElementById('result_accuracy').innerHTML = "Accuracy: " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById('result_accuracy').style.color = "rgb("+random_number_r+""+random_number_g+""+random_number_b+")";

        img1 = document.getElementById("cat.png");
        img2 = document.getElementById("dog.png");
        img3 = document.getElementById("lion.jpg");
        img4 = document.getElementById("cow.jpg");
        bgimg = document.getElementById("background-gif-9.gif");

        if(results[0].label == "Bark"){
            document.getElementById("animal_image").innerHTML= img2.src = 'dog.png';
        }
        else if(results[0].label == "Meow"){
            document.getElementById("animal_image").innerHTML= img1.src = 'cat.png';
        }
        else if(results[0].label == "Moo"){
            document.getElementById("animal_image").innerHTML= img4.src = 'cow.png';
        }
        else if(results[0].label == "Roar"){
            document.getElementById("animal_image").innerHTML= img1.src = 'lion.png';
        }
        else{
            document.getElementById("animal_image").innerHTML= bgimg.src = 'background-gif-9.gif';
        }
    }
}

