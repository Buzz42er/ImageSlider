var img = [
    './images/Snimka zaslona (8).png',
    './images/Snimka zaslona (12).png',
    './images/Snimka zaslona (15).png',
    './images/Snimka zaslona (16).png'
]

//place of current picture in the array img
var num = 2

//function for button before
function before() {
    //getting img in html
    var imgSlider = document.getElementById('imgSlider')
    //when clicked num will subtract 1 from itself
    num--
    //if num is less then 0
    if (num < 0) {
        //img length bil subtract 1 from itself
        num = img.length-1 
    }
    //exchange current imgSlider sorce with sam number in array as num
    imgSlider.src = img[num]
    console.log(img[num])
}

//function for button next
function next() {
    //get imgSlider in a var
    var imgSlider = document.getElementById('imgSlider')
    //when clicked add 1 to num
    num++

    //if num is larger then or equle value 3 exchange value of num with 0
    if (num >= img.length) {
        num = 0
    }
    //exchange imgSlider sorce with img array's item with same value as num
    imgSlider.src = img[num]

}