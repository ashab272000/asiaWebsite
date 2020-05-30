import {CanvasController} from "./decorateScreen/Canvas/canvas_controller";
import {ImageLayer} from './decorateScreen/Objects/image_layer';
import { Layers } from "./decorateScreen/Objects/layers";

const canvasController = new CanvasController();
const imgLayers = new Layers();

imgLayers.addImgLayer(new ImageLayer('../img/img1.jpg', canvasController));

canvasController.drawImage(imgLayers.getLayer().imgLayer);

