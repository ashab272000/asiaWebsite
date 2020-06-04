
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
        let history = this._layers.history.slice(0, this._currentLayer + 1);

        //create EdgeLayer
        //slice() is used, to copy all the values rather than referencing the cvalues
        const edgeLayer = new ImageData(edgeData.data.slice(),edgeData.width, edgeData.height);
        //create ColorLayer
        const colorLayer = new ImageData(colorData.data.slice(),colorData.width, colorData.height);
        //push the edgeLayer and colorlayer to history
        history.push([edgeData, colorData]);
        this._layers.history = history;
        //increment the currentlayer, currentlayer(stores index of the current color and edge layer being used)
        this._currentLayer = this._layers.history.length - 1;
        console.log(`addLayer -> this._currentLayer: ${this._currentLayer}`);
        console.log(`addLayer -> this._layers.history: ${this._layers.history}`);
        //replace the history
        //this._layers.history = history;
        
    }
    getEdgeLayer(){
        return this._layers.history[this._currentLayer][0];
    }
    getColorLayer(){
        return this._layers.history[this._currentLayer][1];
    }
    getImgLayer(){
        return this._layers.imgLayer;
    }

    async getImageValue(){
        return this._image;
    }

    createLayer(imageData){
        this._layers.imgLayer = imageData;
        this.addLayer(imageData, imageData);

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