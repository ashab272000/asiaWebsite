

//data dfor colors, didnt want to write some php code
//wanted to make this a static website
//or maybe not
//i may just use ajax to get this data
//dis a huge data (not that huge)
const primaryColor = "#70C1ff";
const colors = [ '#F3F2ED', '#F1F0E8', '#F1E8D3', '#DEDBD0', '#E9E8DF', '#BDBCB6', '#DFDFDC', '#D0D4DD', '#BEC9D3', '#C6CEC4', '#D5D3C0', '#E2DCBA', '#F6EDD6', '#F5E8D5', '#EDE8EC', '#F9DFD2', '#EFEDE8', '#ECEADE', '#E5DECD', '#C5C0B2', '#D7D2C6', '#979893', '#D3D3CF', '#B6BCC9', '#97A5B0', '#A7AEA5', '#ABAC92', '#D1CAA1', '#EFE3C2', '#E4DAC8', '#F4E4E1', '#F69C91', '#EBE9DF', '#F1EFE2', '#CBC0AF', '#AAA497', '#CCC7C0', '#918F87', '#BAB9B7', '#8A8F9B', '#6F7B86', '#647571', '#979781', '#D0C082', '#E7D9B7', '#D9C8B3', '#EFC9CB', '#E3695F', '#E2E0D6', '#E4DFCF', '#A99C8D', '#958F85', '#B7B1A5', '#7D7B75', '#B2B2B0', '#636876', '#5b6670', '#606B71', '#82826D', '#AD9C50', '#EBCB87', '#c46854', '#B28C91', '#AB2E37', '#DED9CE', '#CCBFAF', '#7A6D64', '#736D67', '#85817A', '#626461', '#373636', '#4A4C5C', '#46515B', '#415158', '#5E5D52', '#697D61', '#CA9450', '#935047', '#6D4446', '#9D3C3C', '#E3DED2', '#E3D9C6', '#9E9081', '#9F9586', '#C1BDB3', '#A4A29B', '#777576', '#7C8086', '#3F576E', '#698F8F', '#907F62', '#999D71', '#FAE8B8', '#A8786B', '#685A64', '#9C4347', '#E2DFD6', '#E5DECC', '#D3CDBC', '#CCC5B5', '#DED9CE', '#B9B8AF', '#B5BBBD', '#99A3B0', '#668596', '#B7CCCE', '#B7AA8F', '#B7AE77', '#F8E9C1', '#BBA392', '#999195', '#CE908B', '#E9E6D9', '#EBE6D6', '#E2DBCC', '#D2CAB8', '#DEDED7', '#D4D3C8', '#d6d5cd', '#D1D7DF', '#A0B8C1', '#CEDBDB', '#DACDAD', '#DEDAA3', '#F1ECDC', '#C9B9A9', '#C5BFC3', '#E7A8A6']; 
const colorsInfo = ["7236, Jazz White", "1624, Skylight", "0567, Ivory", "1024, Timeless", "1622, Reflection", "1269, Dawn", "9904, Twilight", "4177, Heath Violet", "4468, Alladin", "7555, Soft Mint", "8303, White Heather", "8124, Malmo", "1334, Pure Barley", "566, Magnolia", "3154, Dream", "2374, Bliss", "9918, Classic White", "1001, Egg White", "1875, Sense", "10679, Washed Linen", "10341, Limestone", "8094, Silver Tone", "9915, Oxford River", "4062, Classic Blue", "4017, Eclipse Grey", "7163, Minty Breeze", "8302, Laurel", "8087, Spring Air", "1304, Romantic", "1065, Samik Ivory", "3180, Rose Petal", "2602, Butterfly", "8395, White Comfort", "1453, Cotton Ball", "1140, Sand", "394, Soft Grey", "10182, White Linen", "1877, Pebblestone", "9911, Platinum", "4624, Warm Blue", "4618, Evening Light", "6325, Balance", "8252, Green Harmony", "274, Bamboo", "1012, Wild Rice", "0568, Woodsmoke", "3021, Petal Pink", "2456, Roz", "8282, White Pepper", "1275, Mild", "1623, Marrakesh", "1352, Form", "10342, Sable Stone", "1462, Evening Sky", "9930, Jazz Grey", "4594, Blue Harmony", "4638, Elegant Blue", "5030, St Pauls Blue", "8469, Green Leaf", "8306, Wheat", "1156, Petals", "2587, Beat", "3186, Pashmina", "2625, Monroe", "552, Breeze", "1359, Macchiato", "2363, Solid", "10249, Vandyke Brown", "10429, Discrete", "7354, Moss Green", "9938, Blackened Black", "4143, Shadow Black", "4477, Deco Blue", "5180, Oslo", "8422, Green Marble", "125, Palm Leaf", "1987, Oak Sand", "2859, Whispering Red", "2846, Bordeaux", "2115, Bologna", "1376, Mist", "1519, Vanilla Latte", "1929, Nutmeg", "1233, Mohair", "553, Chino", "1032, Iron Grey", "9913, Matrix", "4629, Matt Silver", "4625, Petroli", "6084, Sea Emerald", "10248, Olive Garden", "8109, April Green", "10541, Sunkissed", "2856, Warm Blush", "3207, Dark Velvet", "2731, Hibiscus", "1928, Summer Snow", "1832, Milky Way", "10678, Space", "1016, Antique White", "8470, Smooth White", "1973, Objective", "5081, Silver Moon", "4109, Gustivian Blue", "5159, Retro Blue", "5225, Lake View", "1938, Tea Leaves", "8088, Spring Foliage", "1154, Cheese Cake", "2024, Senses", "3206, Light Eggplant", "2613, Petit Four", "486, Early Rain", "1625, Soul", "1931, Cashew", "1876, Wild Earl", "8394, White Poetry", "1391, Bare", "121, Pearl", "4627, Rain Sky", "4423, Teal Zen", "5262, Svalbard Sea", "10245, Ginseng", "8200, Winter Willow", "1442, Clear", "10580, Soft Skin", "3037, Cool Ash", "2619, Rose Basket", "7236, Jazz White", "1624, Skylight", "0567, Ivory", "1024, Timeless", "1622, Reflection", "1269, Dawn", "9904, Twilight", "4177, Heath Violet", "4468, Alladin", "7555, Soft Mint", "8303, White Heather", "8124, Malmo", "1334, Pure Barley", "566, Magnolia", "3154, Dream", "2374, Bliss", "9918, Classic White", "1001, Egg White", "1875, Sense", "10679, Washed Linen", "10341, Limestone", "8094, Silver Tone", "9915, Oxford River", "4062, Classic Blue", "4017, Eclipse Grey", "7163, Minty Breeze", "8302, Laurel", "8087, Spring Air", "1304, Romantic", "1065, Samik Ivory", "3180, Rose Petal", "2602, Butterfly", "8395, White Comfort", "1453, Cotton Ball", "1140, Sand", "394, Soft Grey", "10182, White Linen", "1877, Pebblestone", "9911, Platinum", "4624, Warm Blue", "4618, Evening Light", "6325, Balance", "8252, Green Harmony", "274, Bamboo", "1012, Wild Rice", "0568, Woodsmoke", "3021, Petal Pink", "2456, Roz", "8282, White Pepper", "1275, Mild", "1623, Marrakesh", "1352, Form", "10342, Sable Stone", "1462, Evening Sky", "9930, Jazz Grey", "4594, Blue Harmony", "4638, Elegant Blue", "5030, St Pauls Blue", "8469, Green Leaf", "8306, Wheat", "1156, Petals", "2587, Beat", "3186, Pashmina", "2625, Monroe", "552, Breeze", "1359, Macchiato", "2363, Solid", "10249, Vandyke Brown", "10429, Discrete", "7354, Moss Green", "9938, Blackened Black", "4143, Shadow Black", "4477, Deco Blue", "5180, Oslo", "8422, Green Marble", "125, Palm Leaf", "1987, Oak Sand", "2859, Whispering Red", "2846, Bordeaux", "2115, Bologna", "1376, Mist", "1519, Vanilla Latte", "1929, Nutmeg", "1233, Mohair", "553, Chino", "1032, Iron Grey", "9913, Matrix", "4629, Matt Silver", "4625, Petroli", "6084, Sea Emerald", "10248, Olive Garden", "8109, April Green", "10541, Sunkissed", "2856, Warm Blush", "3207, Dark Velvet", "2731, Hibiscus", "1928, Summer Snow", "1832, Milky Way", "10678, Space", "1016, Antique White", "8470, Smooth White", "1973, Objective", "5081, Silver Moon", "4109, Gustivian Blue", "5159, Retro Blue", "5225, Lake View", "1938, Tea Leaves", "8088, Spring Foliage", "1154, Cheese Cake", "2024, Senses", "3206, Light Eggplant", "2613, Petit Four", "486, Early Rain", "1625, Soul", "1931, Cashew", "1876, Wild Earl", "8394, White Poetry", "1391, Bare", "121, Pearl", "4627, Rain Sky", "4423, Teal Zen", "5262, Svalbard Sea", "10245, Ginseng", "8200, Winter Willow", "1442, Clear", "10580, Soft Skin", "3037, Cool Ash", "2619, Rose Basket"];
let colorChosen = [null, null, null, null, null, null];
let undoImageDatas = [];
let redoImageDatas = [];
let height;
let width;
let canvasTop;
let x;
let y;
let baseScrollY;
let clickPointHsl;
let selectedColor = [0,0,0];

//respornsive canvas
const baseInnerWidth = 1366;
const baseInnerHeight = 657;
const baseCanvasWidth = 700;
const baseCanvasHeight = 500; 
let innerHeightRatio;
let innerWidthRatio;

//documnetselectors 
const canvas =  document.querySelector("canvas");
const rect = canvas.getBoundingClientRect();
const ctx = canvas.getContext("2d");
const uploadImgButton = document.querySelector("#uploadImage");
const uploadInput = document.querySelector("#uploadInput");
const chooseColorButton = document.querySelector("#chooseColorButton");
const undoButton = document.querySelector("#undoButton");
const redoButton = document.querySelector("#redoButton");
const colorWindow = document.querySelector('#colors-window');
const cancelColorWindow = document.querySelector('#cancel-window');
const toolbox = document.querySelector("#photoEditor-toolbox-upload");
const editor = document.getElementById("editor-container");
//global variables
let imgSrc = "../img/img4.jpg";
let mainImgData;
let upImgData;
let colorTools;
let avgL = 0.5;
let avgS = 0.5;



const saveImageDataForUndo = (imgData) =>
{
    if(undoImageDatas.length >= 6)
    {
        undoImageDatas.shift();
    }
    undoImageDatas.push(imgData);

    console.log(undoImageDatas);
}
const saveImageDataForRedo = (imgData) =>
{
    if(redoImageDatas.length >= 6)
    {
        redoImageDatas.shift();
    }
    redoImageDatas.push(imgData);
}

const clearRedo =() => {
    redoImageDatas = [];
}

const undo = () => {
    if(undoImageDatas.length > 0)
    {   
        let currentImgData = ctx.getImageData(0,0,canvas.width, canvas.height);
        saveImageDataForRedo(currentImgData);
        let imgData = undoImageDatas.pop();
        return imgData;
        
    }
    else{
        return null;
    }
}

const redo = () => {
    if(redoImageDatas.length > 0)
    {   
        let imgData = redoImageDatas.pop();
        //saveImageDataForUndo(imgData);
        return imgData;
    }else{
        return null;
    }
}



//this adds random color
//argument can be added to add a specific color
const addColor = (index) => {


    const parent = document.querySelector("#colors-container");
    const html = "<div class='colorTool' style='background: %color%; width: 60px; height:60px; border: 1px solid white;margin=0px;padding =0px;'></div>";
    let newHtml = html.replace("%color%", colors[index]);
    parent.insertAdjacentHTML("beforeend", newHtml);
}

const addFavColor = (index) => {

    let num = colorChosen.length - 1;
    //check where the first null is
    //save that index to num
    for(let i = 0; i < colorChosen.length ; i++)
    {
        if(colorChosen[i] == null)
        {
            num = i;
            break;
        }
    }
    //shift all the elements to the right
    //make space for the new color choses
    for(let j = num; j > 0; j--)
    {
        colorChosen[j] = colorChosen[j - 1]; 
    }
    colorChosen[0] = index;

    addFavColorHtml(num);

};

const addFavColorHtml = (num) =>{

    const parent = document.querySelector("#photoEditor-toolbox-colors");
    let children = parent.children;
    for (let i = num; i > -1; i--)
    {
        if(i >= (children.length) )
        {
            if(colorChosen[i] == null)
            {   
                break;
            }else{
                //console.log("before:" +parent.children[i].style.backgroundColor);
                const html = "<div class='fav'><div class='favColor' style='background: %color%; width: 60px; height:60px;'></div><h4> %colorName% <br> %colorId% </h4></div>";
                let newHtml = html.replace("%color%", colors[colorChosen[i]]);
                newHtml = newHtml.replace("%colorName%", colorsInfo[colorChosen[i]].split(", ")[0]);
                newHtml = newHtml.replace("%colorId%", colorsInfo[colorChosen[i]].split(", ")[1]);
                parent.insertAdjacentHTML("afterbegin", newHtml);

                for(let j = 0; j < parent.childElementCount; j++)
                {
                    parent.children[j].addEventListener("click", () =>{
                        changeSelectedColor(parent.children[j].children[0]);
                        for (let i = 0; i < parent.childElementCount; i++)
                        {
                            parent.children[i].classList.remove("selected");
                        }
                        parent.children[j].classList.add("selected");
                    })
                }
            }
        }else{
            parent.children[i].children[0].style.backgroundColor = colors[colorChosen[i]];
            parent.children[i].children[1].innerHTML = colorsInfo[colorChosen[i]].split(", ")[0] + "<br>" +  colorsInfo[colorChosen[i]].split(", ")[1];
        }
    }
    for (let i = 0; i < parent.childElementCount; i++)
    {
        parent.children[i].classList.remove("selected");
    }
    parent.children[0].classList.add("selected");
}


//get random color and convert them to hexa
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

//------------------------------------------color-conversion-----------------------------------
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



//------------------------------------------Initialization--------------------------------------
const init = () => {
    //reset scrolling
    
    //sets up the canvas
    setUpCanvas();
    //ahfusjash ufsdiafji ajf
    for(let i = 0; i < colors.length; i++)
    {
        addColor(i);
    }

    setUpColors();
}

//load a specific image
const loadImage = (src = "../img/pagol2.jpg") => {

    //setting the avgerage value for click and all
    avgL = 0.5;
    avgS = 0.5;

    //clear the canvas
    ctx.clearRect(0,0,rect.width,rect.height); 
    //create a new image object with the src specified
    const img = new Image();
    img.src = src;

    //when the image loads
    //fit the image to the canvas
    img.onload = () => {

        let imgRatio = img.width/img.height;
        let canvasRatio = canvas.width/canvas.height;

        if(imgRatio > canvasRatio)
        {
            width = canvas.width;
            height = width/(imgRatio);
            x = 0;
            y= (canvas.height - height)/2;
        }else{
            height = canvas.height;
            width = height * imgRatio;
            y = 0;
            x = (canvas.width - width)/2;
        }

        img.width = width;
        img.height= height;


        ctx.drawImage(img,x,y,width,height);
        //change the mainImgData and upImgdata
        setTimeout( () => {
            mainImgData = ctx.getImageData(0,0,rect.width,rect.height);
        }, 200)
        upImgData = null;
    }
}

//change the color of the image
const changeImage = (mainHsl,data,changeData, edgeData) =>{

    //initiate the variables for the lowest and highest fro lightness and saturation(get constants)
    let lowestS = edgeData[1];
    let highestS = edgeData[2];
    let lowestL = edgeData[3];
    let highestL = edgeData[4];
    let edgeImg = edgeData[0];

    //convert the selected color from rgb to hsl
    let selectedHsl = rgbToHsl(...selectedColor);

    //go through the all the pixels in the image
    for (let i = 0; i < edgeImg.data.length; i+=4) {
        
        //convert the pixel color to hsl
        let hsl = rgbToHsl(data.data[i],data.data[i+1], data.data[i+2])

        if(edgeImg.data[i] == 255 && edgeImg.data[i+1] == 255 && edgeImg.data[i+2] ==  255){

            //lightness formula
            
   
            let lightness;
            let saturation;
            /*         
            lightness = (((selectedHsl[2] * 100) + (((0.5 - hsl[2]) + hsl[2])- lowestL) * 100)) / (highestL * 100) ;
            if(selectedHsl[2] < 0.4){
                lightness = ((hsl[2] * lightness));
            }
            else{
                lightness = (lightness + (hsl[2] * lightness))/2;
            }*/

            //saturation formula
            //saturation = (selectedHsl[1]  + hsl[1])/2 ;  
            
            //pretty good
            //lightness = selectedHsl[2] + (hsl[2] - selectedHsl[2] + (-(highestL+ lowestL) / 2) + selectedHsl[2]);
            lightness = (selectedHsl[2]) + ((hsl[2] )+ (-(avgL)));
            lightness *= (selectedHsl[2] * 0.85);
            lightness += 0.2;
            //saturation = selectedHsl[1] - (selectedHsl[1] * ((selectedHsl[2]) * 0.6));

            //saturation = selectedHsl[1] - (selectedHsl[1] * ((selectedHsl[2]) * 0.6)) + ((((0.92+0.42)/2) - selectedHsl[2]) * (10/25));
            saturation = selectedHsl[1] - (selectedHsl[1] * ((selectedHsl[2]) * 0.6));
            //saturation = selectedHsl[1];
            //saturation = selectedHsl[1] - (selectedHsl[1] * avgL * selectedHsl[2]);



            //saturation = (selectedHsl[1] - 0.7) + ((hsl[1] * 100)/((1 + (selectedHsl[1] - 0.7)) * 100));
            //saturation = selectedHsl[1] - (hsl[1] * hsl[2]) + (selectedHsl[1] * lightness);
            //saturation = selectedHsl[1] - (hsl[1] - selectedHsl[1] + (-(highestS+ lowestS) / 2) + selectedHsl[1]);
            //convert hsl to rgb
            let rgb = hslToRgb(selectedHsl[0], saturation, lightness);

            //change the image data
            changeData.data[i] = rgb[0];
            changeData.data[i+1] = rgb[1];
            changeData.data[i+2] = rgb[2];
        }
    }

    //put the image data when done
    ctx.putImageData(changeData,0,0);
    console.log("selectedHsl[1]: " + selectedHsl[1]+" selectedHsl[2]: " + selectedHsl[2]);
    console.log("highest saturation: " + (selectedHsl[1] - (selectedHsl[1] * ((selectedHsl[2] ) * 0.6))))
}

//detect the edge
const edgeDetect = (mouseX, mouseY) => {
    //this is the variable that holds which color variable to compare
    //generaly it compares the hue of a color which is 0
    //but white and black comparision needs to be compared by saturation
    //lightness in hsl represents the shades, therefore we dont need to compare them.
    //saturation < 0.1 = white
    //saturation > 0.9 = black
    //else compare with hue in hsl
    //hsl[0] = hue
    //hsl[1] = saturation
    //hsl[2] = lightness
    let compare = 0;

    //get the image data
    let imgData = ctx.getImageData(0,0,rect.width, rect.height);


    //get the pixel number clicked
    let pixel = mouseX + mouseY * rect.width;

    //get the hsl of the pixel
    let hslPixel = rgbToHsl(imgData.data[pixel*4], imgData.data[pixel* 4 + 1], imgData.data[pixel * 4 + 2]);


    //check to configure the compare variable
    if(hslPixel[1] < 0.15 || hslPixel[1] > 0.85)
    {
        //saturation will be compared
        compare = 1;
    }else{
        compare = 0;
    }

    //detect the pixels
    let info = pixelEdgeDetect(compare, pixel, imgData);

    return [imgData, info[0], info[1], info[2], info[3]];

};

const pixelEdgeDetect = (compare, pixel, imgData) => {

    //these are needed for lighting purposes
    let lowestS = 1000;
    let highestS = 0;
    let lowestL = 1000;
    let highestL = 0;

    imgData.data[pixel * 4] = 255;
    imgData.data[pixel * 4 + 1] = 255;
    imgData.data[pixel * 4 + 2] = 255;

    let nextPixel = pixel;
    let pixels=[];
    let pop = false;
    
    //check and change pixel above
    while (nextPixel != -1 && nextPixel !== undefined)
    {
        let currentPixel = nextPixel;
        let res;
        nextPixel = changePixelEdge(currentPixel, compare, imgData, -rect.width, pop);

        if(nextPixel != -1 && nextPixel !== undefined)
        {
            res = runSuccessChangePixelEdge(imgData,nextPixel, currentPixel, lowestL, highestL, pixels);
            lowestL = res[0];
            highestL = res[1];
            pop = false;
        }else{
            nextPixel = changePixelEdge(currentPixel, compare, imgData, 1, pop);
            if(nextPixel != -1 && nextPixel !== undefined)
            {
                res = runSuccessChangePixelEdge(imgData,nextPixel, currentPixel, lowestL, highestL, pixels);
                lowestL = res[0];
                highestL = res[1];
                pop = false;
            }else{
                nextPixel = changePixelEdge(currentPixel, compare, imgData, rect.width, pop);
                if(nextPixel != -1 && nextPixel !== undefined)
                {
                    res = runSuccessChangePixelEdge(imgData,nextPixel, currentPixel, lowestL, highestL, pixels);
                    lowestL = res[0];
                    highestL = res[1];
                    pop = false;
                }else{
                    nextPixel = changePixelEdge(currentPixel, compare, imgData, -1, pop);
                    if(nextPixel != -1 && nextPixel !== undefined)
                    {
                        res = runSuccessChangePixelEdge(imgData,nextPixel, currentPixel, lowestL, highestL, pixels);
                        lowestL = res[0];
                        highestL = res[1];
                        pop = false;
                    }else{
                        nextPixel = pixels.pop();
                        pop = true;
                    } //else while loop ends here     
                }
            }
        }

    }

    return [lowestS, highestS, lowestL, highestL];


};

const runSuccessChangePixelEdge = (imgData,nextPixel, currentPixel, lowestL, highestL,pixels) =>
{

    egdeColorChange(imgData, nextPixel);
    pixels.push(currentPixel);

    let hsl = rgbToHsl(imgData.data[nextPixel], imgData.data[nextPixel + 1], imgData.data[nextPixel + 2]);

    if(hsl[2] < lowestL)
    {
        lowestL = hsl[2];
    }
    if(hsl[2] > highestL)
    {
        highestL = hsl[2];
    }
    return [lowestL, highestL];

}


const changePixelEdge = (currentPixel, compare , imgData,value, pop) =>{
    //get the hsl of the pixel
    let currentHsl = rgbToHsl(mainImgData.data[currentPixel * 4], mainImgData.data[currentPixel * 4 + 1], mainImgData.data[currentPixel * 4 + 2]);
    let compareValue;
    let compareLightness;
    let comparePixel;
    let comparePixelHsl;

    //compare the pixel above
    comparePixel = currentPixel + (value);


    if(!(imgData.data[comparePixel * 4] == 255 && imgData.data[comparePixel * 4 + 1] == 255  && imgData.data[comparePixel * 4 + 2] == 255 && imgData.data[comparePixel * 4 + 3] == 69) )
    {
        comparePixelHsl = rgbToHsl(mainImgData.data[comparePixel * 4], mainImgData.data[comparePixel * 4 + 1], mainImgData.data[comparePixel * 4 + 2]);
        compareValue = Math.abs(currentHsl[compare] - comparePixelHsl[compare]);
        if(compare == 0)
        {
            compareValue /= 360;
        }
        compareLightness = currentHsl[2] - comparePixelHsl[2];

        let currentRgbValue = [mainImgData.data[currentPixel * 4], mainImgData.data[currentPixel * 4 + 1], mainImgData.data[currentPixel * 4 + 2]];
        let compareRgbValue = [mainImgData.data[comparePixel * 4], mainImgData.data[comparePixel * 4 + 1], mainImgData.data[comparePixel * 4 + 2]];
        let rgbDiff = Math.abs(((currentRgbValue[0] + currentRgbValue[1] + currentRgbValue[2])/3) - ((compareRgbValue[0] + compareRgbValue[1] + compareRgbValue[2])/3));

        
        if( compareValue < 0.03 && compareLightness > -0.06 && compareLightness < 0.06 && rgbDiff < 6)
        {
            if(!pop)
            {
                let compareHsl = rgbToHsl(...compareRgbValue);
                avgL = (avgL + compareHsl[2])/2;
                avgS = (avgS + compareHsl[1])/2; 
            }
            return comparePixel;
        }else{
            return -1;
        }




    }else{
        return -1;
    }

};

const egdeColorChange = (imgData, pixel) =>
{
    imgData.data[pixel * 4] = 255;
    imgData.data[pixel * 4 + 1] = 255;
    imgData.data[pixel * 4 + 2] = 255;
    imgData.data[pixel * 4 + 3] = 69; 
}

const setUpCanvas = () => {
    canvasTop = canvas.getBoundingClientRect().top + pageYOffset;
    innerWidthRatio = baseInnerWidth/innerWidth;
    canvas.width = baseCanvasWidth/innerWidthRatio;
    canvas.height = baseCanvasHeight;
    rect.width = canvas.width;
    rect.height = canvas.height;
    let margin = (innerWidth - rect.width - 50 - toolbox.offsetWidth)/2;
    editor.style.marginLeft =  ""+ margin + "px";

    //change design when the screen size is medium
    //mediaMd start from 940 to below
    if(innerWidth <= 940)
    {
        canvas.width = innerWidth - 50;
        rect.width = canvas.width;
        editor.style.marginLeft =  "25px";
        editor.style.marginRight = "25px";
    }
    //get the margin left to setu
    //let margin = (innerWidth - editor.style.width)/2;S
    //editor.style.marginLeft = "50px";

    //toolbox.style.
    loadImage(imgSrc);      
}

const resizeCanvas = () => {
    setUpCanvas();
};

const canvasClicked = (e) => {
    //save the image data for undo purposes
    saveImageDataForUndo(ctx.getImageData(0, 0,canvas.height, canvas.width));
    clearRedo();
    if(mainImgData)
    {
        ctx.putImageData(mainImgData,0, 0);
    }
    //get mouse position

    let mouseX;
    let mouseY;

    let margin = parseInt(editor.style.marginLeft.replace("px",""));
    mouseX = e.clientX - rect.left - margin;
    mouseY = e.clientY - canvasTop + pageYOffset;

    let top =  rect.top;  
    console.log("mouseY: " + mouseY + "\nrect.top: " +top+ "\nclientY: " + e.clientY + "\npagoffset: " + pageYOffset);

    //get the edge detection of the wall 
    let edge = edgeDetect(mouseX, mouseY);
    //ctx.putImageData(edge[0], 0, 0);
    //get the image data of where the mouse clicked
    let data = ctx.getImageData(mouseX,mouseY,2,2);
    //The following is done so that, existing paint are not overwritten if the new paint is in another place
    //if there is an image data to be painted on, use that
    if(upImgData)
    {
        ctx.putImageData(upImgData, 0, 0);
    }

    //convert the rgb to hsl
    clickPointHsl = rgbToHsl(data.data[0],data.data[1], data.data[2]);

    console.log("clickPointHsl: " + clickPointHsl);

    //get the image data again, and update it to upImageData
    upImgData = ctx.getImageData(0,0,rect.width,rect.height);
    changeImage(clickPointHsl, mainImgData, upImgData, edge);
};

canvas.addEventListener("click", (e) => {
    canvasClicked(e);
});


const setUpColors = () => {

    let colorTools = document.getElementsByClassName("colorTool");
    
    for(let i = 0; i < colorTools.length; i++)
    {
        colorTools[i].addEventListener("click", () => {
            changeSelectedColor(colorTools[i]);
            //document.querySelector("#photoEditor-toolbox-colors").style.display = "block";
            colorWindow.style.visibility= "hidden";
            colorTools[i].style.borderColor = "white";
            addFavColor(i);
        });

        colorTools[i].addEventListener("mouseover", () => {
            colorTools[i].style.borderColor = primaryColor ;
        });
        colorTools[i].addEventListener("mouseout", () => {
            colorTools[i].style.borderColor = "white";
        });
    }


};

const changeSelectedColor = (element) => {
    selectedColor = element.style.backgroundColor;
    selectedColor = selectedColor.replace(/[rgba()]/gi, "");
    selectedColor = selectedColor.trim().split(',');
    console.log(rgbToHsl(...selectedColor));
}


uploadImgButton.addEventListener("click", () => {

    uploadInput.click();

});


uploadInput.addEventListener("change", (e) => {

    if(uploadInput.value)
    {
        let file = e.target.files[0];
        let fr = new FileReader();
        fr.onload = () => {
            imgSrc = fr.result;
            loadImage(imgSrc);
        }
        fr.readAsDataURL(file);
        
    }

});

chooseColorButton.addEventListener("click", ()=>{
    colorWindow.style.visibility = "visible";
});

//
cancelColorWindow.addEventListener("click", () =>{
    colorWindow.style.visibility= "hidden";
});

undoButton.addEventListener("click", () => {
    let imgData = undo();
    console.log("undoButton clicked");
    if(imgData != null)
    {
        ctx.putImageData(imgData, 0, 0);
    }
});

redoButton.addEventListener("click", () => {
    let imgData = redo();

    if(imgData)
    {
        ctx.putImageData(imgData, 0, 0);
    }
});

//this resizes the canvas when the window gets resized.
//this one is dev process
//window.addEventListener("resize", resizeCanvas);

window.addEventListener("orientationChange", resizeCanvas);




init();

