import { EdgeDetect } from "../EdgeDetection/edge_detec";
import { ImageLayer } from "./image_layer";



export class Layers{

    constructor(canvasController)
    {   
        this._canvasController = canvasController;
        this.layers = {
            imgLayer:null,
            edgeLayer:null,
            colorLayer:null
        };
    }

    getLayer(){
        return this.layers;
    }

    addImg(src){
        this.layers.imgLayer = new ImageLayer(src, this._canvasController);
        this.layers.edgeLayer = new EdgeDetect(src, this._canvasController);
        this.layers.colorLayer = new ImageLayer(src, this._canvasController);
    }
}