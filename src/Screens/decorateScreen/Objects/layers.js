
export class Layers{

    constructor()
    {
        this.layers = {
            imgLayer:null,
            edgeLayer:null,
            colorLayer:null
        };
    }

    getLayer(){
        return this.layers;
    }

    addImgLayer(imgLayer){
        this.layers.imgLayer = imgLayer;
        this.layers.edgeLayer = null;
        this.layers.colorLayer = null;
    }

    addEdgeLayer(edgeLayer)
    {
        this.layers.edgeLayer = edgeLayer;
    }
    
    addColorLayer(colorLayer){
        this.layers.colorLayer = colorLayer;
    }
}