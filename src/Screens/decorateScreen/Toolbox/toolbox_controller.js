import { ToolboxView } from "./tollbox_view";
import { FavouriteColors } from './favouriteColor';
import { Layers } from "../Canvas/layers";
import { CanvasController } from "../Canvas/canvas_controller";

export class ToolboxController {

    constructor()
    {
        this._toolboxView = new ToolboxView();
        this._primaryColor = '#70c1ff';
        this._selectedColor;

    }
    
    init(canvasController,galleryController){
        this._galleryController = galleryController;
        this._canvasController = canvasController;
        this._setupListeners();
    }
    
    addColorToFavBox(i)
    {
        FavouriteColors.addColorIndex(i);
        this._toolboxView.addFavColorHtml(i);
    }
        

    _setupListeners(){

        this._toolboxView.uploadButton.addEventListener('click', () => {
            this._toolboxView.uploadInput.click();
        });
        
        this._toolboxView.uploadInput.addEventListener('change', (event) => {
            
            var fr = new FileReader();
            fr.onload = async () => {
                //console.log(fr.result.toString());
                await new CanvasController().addImageToCanvas(fr.result);   
            }
            fr.readAsDataURL(event.target.files[0]);
        }, false);

        
        this._toolboxView.chooseColorButton.addEventListener("click", ()=>{
            this._galleryController.openGallery();
        });

        this._toolboxView.undoButton.addEventListener("click", () => {
            this._canvasController.undo();
        });

        this._toolboxView.redoButton.addEventListener("click", () => {
            this._canvasController.redo();
        });
    }
    
}