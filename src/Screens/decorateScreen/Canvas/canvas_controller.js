import {CanvasView} from "./canvas_view";
import {ColorConverter} from "./color_converter";
import { EdgeDetect } from "../EdgeDetection/edge_detec";
import { Layers } from "../Objects/layers";

export class CanvasController {
    

    constructor() {
        this._canvasView = new CanvasView();
        const canvasValues = this._canvasView.getCanvasValues();
        this._canvas = canvasValues.canvas;
        this._ctx = canvasValues.ctx;
        this._rect = canvasValues.rect;
        this._colorConverter = new ColorConverter();
        this._edgeDetector = new EdgeDetect(this._canvas.width, this._colorConverter);
        this._canvasTop = this._rect.top + pageYOffset;
        this._setupListeners();
        this._setupCanvas().then();
    }

    async _setupCanvas(){
        this._layers = new Layers(this._canvas.width, this._canvas.height);
        await this._layers.addImg('../img/img1.jpg');
        await this.drawImage(await this._layers.getImageValue());

        this._setupLayers();
        this._setupEdgeDetector();
    }

    _setupLayers(){
        const mainImageLayer = this._getContextImageData();
        const edgeLayer = this._getContextImageData();
        const colorLayer = this._getContextImageData();
    
        this._layers.addLayer(mainImageLayer, edgeLayer, colorLayer);

        console.log(this._layers);
    }

    _setupEdgeDetector(){
        console.log(this._layers.getLayer().imgLayer);
        this._edgeDetector.setMainImgData(this._layers.getLayer().imgLayer, this._layers.getLayer().edgeLayer);
    }



    getCanvas(){
        return this._canvas;
    }


    
    //load a specific image
    //loadImage(src = "../img/pagol2.jpg"){
    async drawImage(imageObject){
        //setTimeout waits for 100ms
        //It waits for the image to load
        //clear the canvase so that an image could be drawn
        //console.log(imgLoader);
        this._canvasView.clearCanvas();

        //create a new image object with the src specified
        let img = await  imageObject.image;
        let imgTransform = await imageObject.transform;

        this._ctx.drawImage(img, imgTransform.x, imgTransform.y, imgTransform.width, imgTransform.height);

    }

    _getContextImageData(){
        //this._ctx.getImageData(0, 0, this._canvas.width, this._canvas.height);
        return this._ctx.getImageData(0, 0, this._canvas.width, this._canvas.height);
    }

    putImageData(imageData){
        this._ctx.putImageData(imageData, 0, 0);
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

                avgCounter++;
    
                let lightness;
                let saturation;
                
                lightness = (selectedHsl[2]) + ((hsl[2])+ (-(avgL)));
                lightness *= (selectedHsl[2] * 0.85);
                lightness = (lightness + selectedHsl[2])/2;
                avgLightness += lightness;

                saturation = selectedHsl[1] - (selectedHsl[1] * ((selectedHsl[2]) * 0.6));
                saturation = (selectedHsl[1] + saturation)/2;

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


    _canvasClicked(e){

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
        console.log(mousePosition);
        this._edgeDetector.detectEdge(mousePosition.x, mousePosition.y);
        this.putImageData(this._layers.getLayer().edgeLayer);

    };

    _getMousePosition(e){
        const editor = this._canvasView.getEditor();
        let margin = parseInt(editor.style.marginLeft.replace("px",""));
        let mouseX = e.clientX - this._rect.left - margin;
        let mouseY = e.clientY - this._canvasTop + pageYOffset;

        return {
            x : mouseX,
            y : mouseY
        }
    }

    _setupListeners(){
        this._canvas.addEventListener("click", (e) => {
            this._canvasClicked(e);
        });
        window.addEventListener("orientationChange", (e) => {
            this.resizeCanvas();
        });
    }

    getImageData(){
        this._ctx.getImageData(0, 0, this._canvas.width, this._canvas.height);
    }

}

