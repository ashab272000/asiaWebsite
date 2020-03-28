
let height;
let width;
let x;
let y;
let clickPointHsl;
let selectedColor = [0,0,0];

const canvas =  document.querySelector("canvas");
const rect = canvas.getBoundingClientRect();
const ctx = canvas.getContext("2d");
const uploadImgButton = document.querySelector("#uploadImage");
const uploadInput = document.querySelector("#uploadInput");
let mainImgData;
let upImgData;
let colorTools;





const addColor = () => {

    let color = randColor();

    const parent = document.querySelector("#photoEditor-toolbox-colors");
    const html = "<div class='colorTool' style='background: %color%;'></div>";
    let newHtml = html.replace("%color%", color);

    parent.insertAdjacentHTML("beforeend", newHtml);

    
    
}

const randColor = () => {

    let redHexa = Math.floor((Math.random() * 255)).toString(16);
    let blueHexa = Math.floor((Math.random() * 255)).toString(16);
    let greenHexa = Math.floor((Math.random() * 255)).toString(16);
    let hexa = "#" +redHexa + blueHexa + greenHexa;

    while (hexa.length < 7)
    {
        hexa = hexa + "0";
    }

    return hexa;
}


// from https://gist.github.com/mjackson/5311256
const rgbToHsl = (r, g, b) => {
    r /= 255, g /= 255, b /= 255;
  
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
  
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
  
      h /= 6;
    }
  
    return [ h * 360, s, l ];
}

// from https://gist.github.com/mjackson/5311256
function hslToRgb(h, s, l) {
    var r, g, b;
    
    h = h/360;
    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      }
  
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
  
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
  
    return [ r * 255, g * 255, b * 255 ];
}


const init = () => {
    loadImage();
    for(let i = 0; i < 10; i++)
    {
        addColor();
    }

    setUpColors();

}

const loadImage = (src = "../img/img4.jpg") => {

    ctx.clearRect(0,0,canvas.width,canvas.height); 
    const img = new Image();
    img.src = src;
    //img.style.objectFit = "contain";

    img.onload = () => {

        if(img.width > img.height)
        {
            width = rect.width;
            height = (img.height/img.width) * rect.width;
            x = 0;
            y= (rect.height - height)/2
        }else{
            height = rect.height;
            width = (img.width/img.height) * rect.height;
            y = 0;
            x = (rect.width - width)/2
        }
        console.log(rect.height);

        console.log("x: " + x);
        console.log("y: " + y);
        console.log("width: " + width);
        console.log("height: " + height);
        //console.log("rectHeight: " + rect.height )

        img.width = width;
        img.height= height;

        ctx.drawImage(img,x,y,width,height);
        setTimeout( () => {
            mainImgData = ctx.getImageData(0,0,rect.width,rect.height);
        }, 200)
        upImgData = null;
    }
}

const changeImage = (mainHsl,data,changeData) =>{

    let lowestS = 1000;
    let highestS = 0;
    let closestL = 1000;
    let highestL = 0;
    let selectedHsl = rgbToHsl(...selectedColor);
    for (let i = 0; i < data.data.length; i+=2) {
        
        let hsl = rgbToHsl(data.data[i],data.data[i+1], data.data[i+2])
        let cH = Math.abs(mainHsl[0] - hsl[0]);
        let cS = Math.abs(mainHsl[1] - hsl[1]);
        let cL = hsl[2] - mainHsl[2];
        if(cH < 6  && cS < 0.6 && (cL > -0.05 && cL <0.4)){
            if(hsl[1] < lowestS)
            {
                lowestS = hsl[1];
            }
            if(hsl[1] > highestS)
            {
                highestS = hsl[1];
            }
            if(hsl[2] < closestL)
            {
                closestL = hsl[2];
            }
            if(hsl[2] > highestL)
            {
                highestL = hsl[2];
            }
        }
    }
    

    highestL = highestL - (closestL - selectedHsl[2]);



    console.log("changeImage(): highestS: " + highestS );
    console.log("changeImage(): selectedHsl: " + selectedHsl[1] );
    console.log("changeImage(): mainHsl: " + mainHsl );
    let gada = hslToRgb(...mainHsl);
    console.log("changeImage(): mainHsl rgb: " + gada );
    

    if(selectedHsl[2] < closestL)
    {
        console.log("bhalo");
    }else{
        console.log("gada")
    }

    if(highestS < 0.1 || lowestS > 0.9)
    {
        for (let i = 0; i < data.data.length; i+=2) {
        }

    }

    for (let i = 0; i < data.data.length; i+=2) {
        
        let hsl = rgbToHsl(data.data[i],data.data[i+1], data.data[i+2])
        let cH = Math.abs(mainHsl[0] - hsl[0]);
        let cS = Math.abs(mainHsl[1] - hsl[1]);
        let cL = hsl[2] - mainHsl[2];
        if(cH < 15 && cS < 0.8 && (cL > -0.2)){
            let lightness;

            lightness = (((selectedHsl[2] * 100) + (hsl[2] - closestL) * 100)) / (highestL * 100) ;
            lightness = (lightness + (hsl[2] * lightness))/2 ;

            saturation = (selectedHsl[1]  + lightness)/2 ;  

            let rgb = hslToRgb(selectedHsl[0], saturation, lightness);
            changeData.data[i] = rgb[0];
            changeData.data[i+1] = rgb[1];
            changeData.data[i+2] = rgb[2];
        }
    }

    ctx.putImageData(changeData,0,0);
}

const edgeDetect = (data) => {

    ctx.putImageData(mainImgData);
    const img = ctx.getImageData();

    
    for(let i = 0; i < data.data.length; i++)
    {
        data.data[i] = 255;
    }



}


canvas.addEventListener("click", (e) => {

    if(mainImgData)
    {
        ctx.putImageData(mainImgData,0, 0);
    }
    //get mouse position

    let mouseX;
    let mouseY;

    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    //get the image data of where the mouse clicked
    let data = ctx.getImageData(mouseX,mouseY,20,20);

    //The following is done so that, existing paint are not overwritten if the new paint is in another place
    //if there is an image data to be painted on, use that
    if(upImgData)
    {
        ctx.putImageData(upImgData, 0, 0);
    }
    //convert the rgb to hsl
    clickPointHsl = rgbToHsl(data.data[0],data.data[1], data.data[2]);
    //get the image data again, and update it to upImageData
    upImgData = ctx.getImageData(0,0,rect.width,rect.height);


    console.log(clickPointHsl);

    //change the color of the wall 
    changeImage(clickPointHsl, mainImgData, upImgData);
 
});

uploadImgButton.addEventListener("click", () => {

    uploadInput.click();

});


uploadInput.addEventListener("change", (e) => {

    if(uploadInput.value)
    {
        let file = e.target.files[0];
        let fr = new FileReader();
        fr.onload = () => {
            loadImage(fr.result);
        }
        fr.readAsDataURL(file);
        
    }

});

const setUpColors = () => {

    colorTools = document.getElementsByClassName("colorTool");
    
    for(let i = 0; i < colorTools.length; i++)
    {
        colorTools[i].addEventListener("click", () => {
            selectedColor = colorTools[i].style.backgroundColor;
            selectedColor = selectedColor.replace(/[rgba()]/gi, "")
            selectedColor = selectedColor.trim().split(',');
            console.log(rgbToHsl(...selectedColor));
        });
    }


}








init();