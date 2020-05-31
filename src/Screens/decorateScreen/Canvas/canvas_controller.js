import {CanvasView} from "./canvas_view";
import {ColorConverter} from "./color_converter";

export class CanvasController {
    

    constructor() {
        this._canvasView = new CanvasView();
        const canvasValues = this._canvasView.getCanvasValues();
        this._canvas = canvasValues.canvas;
        this._ctx = canvasValues.ctx;
        this._rect = canvasValues.rect;
        this._colorConverter = new ColorConverter();
        this._setupListeners();
    }

    getCanvas(){
        return this._canvas;
    }
    
    //load a specific image
    //loadImage(src = "../img/pagol2.jpg"){
    drawImage(imgLayer){

        //setTimeout waits for 100ms
        //It waits for the image to load
        setTimeout(() => {
            //clear the canvase so that an image could be drawn
            //console.log(imgLayer);
            this._canvasView.clearCanvas();

            //create a new image object with the src specified
            let img = imgLayer.getImgData();
            let imgTransform = imgLayer.getImgTransform();

            this._ctx.drawImage(img, imgTransform.x, imgTransform.y, imgTransform.width, imgTransform.height);

        },300);


    }

    
    //change the color of the image
    changeImage (mainHsl,data,changeData, edgeData){

        //initiate the variables for the lowest and highest fro lightness and saturation(get constants)
        let lowestS = edgeData[1];
        let highestS = edgeData[2];
        let lowestL = edgeData[3];
        let highestL = edgeData[4];
        let edgeImg = edgeData[0];

        //convert the selected color from rgb to hsl
        let selectedHsl = rgbToHsl(...selectedColor);
        let avgLightness = 0;
        let avgSaturation = 0;
        let avgCounter = 0;

        //go through the all the pixels in the image
        for (let i = 0; i < edgeImg.data.length; i+=4) {
            
            //convert the pixel color to hsl
            let hsl = rgbToHsl(data.data[i],data.data[i+1], data.data[i+2])

            if(edgeImg.data[i] == 255 && edgeImg.data[i+1] == 255 && edgeImg.data[i+2] ==  255){

                //lightness formula
                avgCounter++;
                
    
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
                lightness = (selectedHsl[2]) + ((hsl[2])+ (-(avgL)));
                lightness *= (selectedHsl[2] * 0.85);
                lightness = (lightness + selectedHsl[2])/2;
                avgLightness += lightness;
                //saturation = selectedHsl[1] - (selectedHsl[1] * ((selectedHsl[2]) * 0.6));

                //saturation = selectedHsl[1] - (selectedHsl[1] * ((selectedHsl[2]) * 0.6)) + ((((0.92+0.42)/2) - selectedHsl[2]) * (10/25));
                saturation = selectedHsl[1] - (selectedHsl[1] * ((selectedHsl[2]) * 0.6));
                saturation = (selectedHsl[1] + saturation)/2;
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
        console.log(`Lightness value:  ${avgLightness/avgCounter}`);
    }


    canvasClicked(e){

        //there few different layers that the program will work with
        //1. Main layer
        //      this is the layer of the uploaded image
        //      Should not be changed, unless user uploads another image
        //2. EdgeDetection Layer
        //      More like a mask layer
        //      program uses it to know which part should be painted
        //      it paints white, where a color should be painted
        //3. Color Layer
        //      This wil take the corresponding edge detection layer
        //      and paint the where the mask is drawn white

        //get the mouse position
        let mousePosition = this._getMousePosition(e);

        //detectEdge(mousePosition);


    };

    _getMousePosition(e){
        const editor = this._canvasView.getEditor();
        let margin = parseInt(editor.style.marginLeft.replace("px",""));
        let mouseX = e.clientX - this._rect.left - margin;
        let mouseY = e.clientY - canvasTop + pageYOffset;

        return {
            x : mouseX,
            y : mouseY
        }
    }

    loadImageData(src, callback){
        const img = new Image();
    
        //when the image loads
        //fit the image to the canvas
        img.onload = () => {
            
            let transform = this._getImageTransform(img.width, img.height)
            img.width = transform.width;
            img.height= transform.height;
            let result = {
                img: img,
                transform: transform
            };
            callback(result);

        };

        //img source should be set after the image.onload() function
        img.src = src;

    }

    _getImageTransform(imgWidth, imgHeight){
        let x = 0;
        let y = 0;
        let width = imgWidth;
        let height = imgHeight;
        //get the ratio of width:height of the image
        let imgRatio = width/height;
        //get the ratio of width:height of the canvas
        let canvasRatio = this._canvas.width/this._canvas.height;

        //we run a check
        //to know if the image size is a landscape or a potrait
        //landscape: width of image = width of canvas, height is calculated based on the image ratio
        //potrait: height of image = height of canvas, width is calculated based on the image ratio
        //check if image is landscape
        if(imgRatio > canvasRatio)
        {
            width = this._canvas.width;
            height = width/(imgRatio);
            x = 0;
            y= (this._canvas.height - height)/2;
        }else
        {
            height = this._canvas.height;
            width = height * imgRatio;
            y = 0;
            x = (this._canvas.width - width)/2;
        }

        return {
            width: width,
            height: height,
            x:x,
            y:y
        }
    }


    _setupListeners(){
        this._canvas.addEventListener("click", (e) => {
            canvasClicked(e);
        });
        window.addEventListener("orientationChange", (e) => {
            this.resizeCanvas();
        });
    }

    getImageData(){
        this._ctx.getImageData(0, 0, this._canvas.width, this._canvas.height);
    }

}

