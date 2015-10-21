function calculate() {
var weight = document.bmiForm.weight.value;
var height = document.bmiForm.height.value;
if(weight > 0 && height > 0){
var final = weight/(height/100*height/100);
//document.bmiForm.bmi.value = finalBmi
if(final < 18.5){
document.bmiForm.meaning.value = "You need eat more.";
}
if(final > 18.5 && final < 25){
document.bmiForm.meaning.value = "You have a healthy body.";
}
if(final > 25){
document.bmiForm.meaning.value = "You are overWeight.";
}
}
else{
alert("Please fill something")
}
}
