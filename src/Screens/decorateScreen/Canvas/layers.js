
import { ImageLoader } from "./imageloader";



export class Layers{

    constructor(canvasWidth, canvasHeight)
    {   
        this._canvasWidth = canvasWidth;
        this._canvasHeight = canvasHeight;
        this._imageLoader = new ImageLoader(canvasWidth, canvasHeight);
        this._layers = {
            imgLayer:null,
            history : []
        };
        this._currentLayer = 0;
        this._image = {
            image: null,
            transform: null
        }
    }

    
    addLayer(edgeData, colorData){
        //this._layers.history.push([edgeData, colorData]);
        //create a history to replaces the this._layers.history with length + 1

        //let history = this._layers.history.slice(0, this._currentLayer + 1);
        //push the edgeLayer and colorlayer to history
        this._layers.history.push([edgeData, colorData]);
        //this._layers.history = history;
        //increment the currentlayer, currentlayer(stores index of the current color and edge layer being used)
        this._currentLayer = this._layers.history.length - 1;
        console.log(`addLayer -> this._currentLayer: ${this._currentLayer}`);
        console.log(`addLayer -> this._layers.history: ${this._layers.history}`);
        //replace the history
        //this._layers.history = history;
        
    }
    getEdgeLayer(){
        const imgData = this._layers.history[this._currentLayer][0];
        const layer = new ImageData(imgData.data.slice(),imgData.width, imgData.height);
        return layer;
    }
    getColorLayer(){
        const imgData = this._layers.history[this._currentLayer][1];
        const layer = new ImageData(imgData.data.slice(),imgData.width, imgData.height);
        return layer;
    }

    getImgLayer(){
        return this._layers.imgLayer;
    }

    async getImageValue(){
        return this._image;
    }

    createLayer(imageData){
        this._layers.imgLayer = imageData;
        const edgeLayer = new ImageData(imageData.data.slice(), imageData.width, imageData.height);
        const colorLayer = new ImageData(imageData.data.slice(), imageData.width, imageData.height);

        this._layers.history.push([edgeLayer, colorLayer]);
    }

    async addImg(src){
        await this._imageLoader._loadImageData(src);
        this._image.image = await this._imageLoader.getImg();
        this._image.transform = await this._imageLoader.getImgTransform();
    }

    
    undo(){
        if(this._currentLayer > 0)
        {
            this._currentLayer--;
            console.log(this._currentLayer);
        }
    }

    redo(){
        if(this._currentLayer < this._layers.history.length - 1){
            this._currentLayer++;
            console.log(this._currentLayer);
        }
    }
}