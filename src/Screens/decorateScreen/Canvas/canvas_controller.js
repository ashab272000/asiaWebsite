import {CanvasView} from "./canvas_view";
import {ColorConverter} from "./color_converter";
import { EdgeDetect } from "./edge_detec";
import { Layers } from "./layers";
import { ColorFiller } from './coloring';

export class CanvasController {
    

    constructor() {
        this._canvasView = new CanvasView();
        
        //values of the canvas DOM object
        const canvasValues = this._canvasView.getCanvasValues();
        this._canvas = canvasValues.canvas;
        this._ctx = canvasValues.ctx;
        this._rect = canvasValues.rect;
        //pageYOffset is part of window
        //thus, it is a global variable
        this._canvasTop = this._rect.top + pageYOffset;
        
        //classes that this class neeeds
        this._colorConverter = new ColorConverter();
        this._edgeDetector = new EdgeDetect(this._canvas.width, this._colorConverter);
        this._colorFiller = new ColorFiller(this._colorConverter);


        this._setupListeners();
        this._setupCanvas().then();
    }

    async _setupCanvas(){
        this._layers = new Layers(this._canvas.width, this._canvas.height);
        await this._layers.addImg('../img/img1.jpg');
        await this._drawImage(await this._layers.getImageValue());

        this._setupLayers();
    }

    _setupLayers(){
        const mainImageLayer = this._getContextImageData();
        this._layers.createLayer(mainImageLayer);
        this._ctx.putImageData(this._layers.getColorLayer(), 0, 0);

    }
    
    //load a specific image object
    async _drawImage(imageObject){
        //setTimeout waits for 100ms
        //It waits for the image to load
        //clear the canvase so that an image could be drawn
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
        //detect the edge
        //and get the edge data
        const edgeData = this._edgeDetector.detectEdge(mousePosition.x, mousePosition.y, this._layers.getEdgeLayer(), this._layers.getColorLayer());
        //get the colordata for colorfiller
        const colorData = this._colorFiller.fillColor(this._layers.getImgLayer(),edgeData, this._layers.getColorLayer());
        //add the data to the layer
        this._layers.addLayer(edgeData, colorData);
        // this._layers.setEdgeLayer(this._edgeDetector.getEdgeData()); 
        // this._layers.setColorLayer(this._colorFiller.fillColor(this._layers.getImgLayer(),this._layers.getEdgeLayer(), this._layers.getColorLayer())); 
        //draw the color layer
        this._ctx.putImageData(colorData, 0, 0);
        
        
        //this._ctx.putImageData(this._layers.getLayer().edgeLayer, 0, 0);
        
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
    
    putImageData(imageData){
        this._ctx.putImageData(imageData, 0, 0);
    }

    getCanvas(){
        return this._canvas;
    }

    getImageData(){
        this._ctx.getImageData(0, 0, this._canvas.width, this._canvas.height);
    }

    undo(){
        this._layers.undo();
        this._ctx.putImageData(this._layers.getColorLayer(), 0, 0);
    }

    redo(){
        this._layers.redo();
        this._ctx.putImageData(this._layers.getColorLayer(), 0 ,0);
    }
    
}

