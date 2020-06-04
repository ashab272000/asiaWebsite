import { GalleryView } from './gallery_view';
import { Colors, FavouriteColors } from './favouriteColor';
 

export class GalleryController{

    constructor(){
    }

    init(toolboxController){
        this._toolboxController = toolboxController;
        this._galleryView = new GalleryView();
        this._fillGallery();
        this._setupListeners();
    }

    _fillGallery()
    {
        for (let i = 0; i < Colors.colors.length; i++)
        {
            let func = this._toolboxController.addColorToFavBox.bind(this._toolboxController);
            this._galleryView.addColor(i, (index) => {
                console.log(`index: ${index}`);
                this._toolboxController.addColorToFavBox(index);
            });
        }
    }

    openGallery(){
        this._galleryView.getGalleryWindow().style.visibility = "visible";
    }

    closeGallery(){
        this._galleryView.getGalleryWindow().style.visibility = "hidden";
    }

    _setupListeners(){
        this._galleryView.getGalleryCancelButton().addEventListener('click', () =>{
            this.closeGallery();
        })
    }
    
    


}