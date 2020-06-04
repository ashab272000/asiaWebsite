
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
        this._currentLayer = -1;
        this._image = {
            image: null,
            transform: null
        }
    }

    
    addLayer(edgeData, colorData){
        //this._layers.history.push([edgeData, colorData]);
        let history = this._layers.history.slice(0, this._currentLayer + 1);
        history.push([edgeData, colorData]);
        this._currentLayer++;
        this._layers.history = history;
        if(history.length > 2)
            console.log(`testing ${history[this._currentLayer][1].data[103847] == history[this._currentLayer - 1][1].data[103847]}`);
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

    createLayer(imageData, edgeImageData, colorImageData){
        this._layers.imgLayer = imageData;
        this.addLayer(edgeImageData, colorImageData);

    }

    async addImg(src){
        await this._imageLoader._loadImageData(src);
        this._image.image = await this._imageLoader.getImg();
        this._image.transform = await this._imageLoader.getImgTransform();
    }

    
    undo(){
        console.log("undo is done");
        if(this._currentLayer > 0)
        {
            this._currentLayer--;
            console.log(this._currentLayer);
        }
    }

    redo(){
        if(this._currentLayer < this._layers.history.length - 1){
            this._currentLayer++;
        }
    }
}