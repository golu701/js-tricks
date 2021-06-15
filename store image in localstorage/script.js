function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}


//  To take the image
bannerImage = document.getElementById('image');
imgData = getBase64Image(bannerImage);
localStorage.setItem("imgData", imgData);


// To set the image
var dataImage = localStorage.getItem('imgData');
bannerImg = document.getElementById('preview');
bannerImg.src = "data:image/png;base64," + dataImage;

