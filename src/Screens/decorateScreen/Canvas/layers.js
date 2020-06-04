
import { ImageLoader } from "./imageloader";



export class Layers{

    constructor(canvasWidth, canvasHeight)
    {   
        this._canvasWidth = canvasWidth;
        this._canvasHeight = canvasHeight;
        this._imageLoader = new ImageLoader(canvasWidth, canvasHeight);
        this._layers = {
            imgLayer:null,
            edgeLayer:null,
            colorLayer:null
        };
        this._image = {
            image: null,
            transform: null
        }
    }

    getLayer(){
        return this._layers;
    }
    getEdgeLayer(){
        return this._layers.edgeLayer;
    }
    setEdgeLayer(data) {
        this._layers.edgeLayer = data;
    }
    getColorLayer(){
        return this._layers.colorLayer;
    }
    setColorLayer(data) {
        this._layers.colorLayer = data;
    }
    getImgLayer(){
        return this._layers.imgLayer;
    }

    async getImageValue(){
        return this._image;
    }

    addLayer(imageData, edgeImageData, colorImageData){
        this._layers.imgLayer = imageData;
        this._layers.edgeLayer = edgeImageData;
        this._layers.colorLayer = colorImageData;

    }

    async addImg(src){
        await this._imageLoader._loadImageData(src);
        this._image.image = await this._imageLoader.getImg();
        this._image.transform = await this._imageLoader.getImgTransform();

        console.log(this._image);
        // this._layers.imgLayer = new ImageLayer(src, this._canvasController);
        // this._layers.edgeLayer = new EdgeDetect(src, this._canvasController, this._layers.imgLayer);
        // this._layers.colorLayer = new ImageLayer(src, this._canvasController);
    }
}