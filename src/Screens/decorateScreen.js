import {CanvasController} from "./decorateScreen/Canvas/canvas_controller";
import { Layers } from "./decorateScreen/Objects/layers";

const main = async () => {
        
    const canvasController = new CanvasController();
    //const imgLayers = new Layers(canvasController.getCanvas().width, canvasController.getCanvas().height);

    //await imgLayers.addImg('../img/img1.jpg');
    //await canvasController.drawImage(await imgLayers.getImageValue());

    // const mainImageLayer = canvasController.getContextImageData();
    // const edgeLayer = canvasController.getContextImageData();
    // const colorLayer = canvasController.getContextImageData();

    // imgLayers.addLayer(mainImageLayer, edgeLayer, colorLayer);

    

    //canvasController.putImageData(imgLayers.getLayer().edgeLayer.getImageData());

}

main();
