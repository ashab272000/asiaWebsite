import { ToolboxView } from "./tollbox_view";
import { FavouriteColors } from './favouriteColor';

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
        
        this._toolboxView.chooseColorButton.addEventListener("click", ()=>{
            this._galleryController.openGallery();
        });

        this._toolboxView.undoButton.addEventListener("click", () => {
            this._canvasController.undo();
        });

        this._toolboxView.redoButton.addEventListener("click", () => {
            console.log('redo is done');
            this._canvasController.redo();
        });
    }
    
}