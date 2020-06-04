import { ToolboxView } from "./tollbox_view";
import { FavouriteColors } from './favouriteColor';

export class ToolboxController {

    constructor()
    {
        this._toolboxView = new ToolboxView();
        this._primaryColor = '#70c1ff';
        this._setupListeners();
        this._selectedColor;

    }
    
    init(galleryController){
        this._galleryController = galleryController;
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

        /*
        this._toolboxView.undoButton.addEventListener("click", () => {
            let imgData = undo();
            console.log("undoButton clicked");
            if(imgData != null)
            {
                ctx.putImageData(imgData, 0, 0);
            }
        });

        this._toolboxView.redoButton.addEventListener("click", () => {
            let imgData = redo();

            if(imgData)
            {
                ctx.putImageData(imgData, 0, 0);
            }
        });
        */
    }
    
}