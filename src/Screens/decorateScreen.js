import {CanvasController} from "./decorateScreen/Canvas/canvas_controller";
import { ToolboxController } from "./decorateScreen/Toolbox/toolbox_controller";
import { GalleryController } from "./decorateScreen/Toolbox/gallery_controller";

const main = async () => {
        
    const canvasController = new CanvasController();
    const galleryController = new GalleryController();
    const toolboxController = new ToolboxController();
    toolboxController.init(canvasController, galleryController);
    galleryController.init(toolboxController);

}

main();
