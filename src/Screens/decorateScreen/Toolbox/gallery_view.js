import { FavouriteColors } from "./favouriteColor";


export class GalleryView{

    constructor()
    {
        this._gallery = document.querySelector('#colors-window');
        this._galleryCancelButton = document.querySelector('#cancel-window');
        this._primaryColor = '#70c1ff';
    }

    addColor(colorHex, i){
        //select the parent element where the html will be inserted to
        const parent = document.querySelector("#colors-container");
        //the html string to be inserted
        const html = "<div class='colorTool' style='background: %color%; width: 60px; height:60px; border: 1px solid white;margin=0px;padding =0px;'></div>";
        //replace the color with the parameter "colorHex"
        let newHtml = html.replace("%color%", colorHex);
        //insert the element
        parent.insertAdjacentHTML("beforeend", newHtml);
        //add a listener to the child
        //used last child instead of children[i]
        parent.lastChild.addEventListener('click', (e) => {
            this._gallery.style.visibility = "hidden";
            e.target.style.borderColor = "white";   
            FavouriteColors.addColorIndex(i);
        });

        parent.lastChild.addEventListener("mouseover", (e) => {
            e.target.style.borderColor = this._primaryColor;
        })

        parent.lastChild.addEventListener("mouseout", (e) => {
            e.target.style.borderColor = "white";
        });
    }

    getGalleryWindow() {
        return this._gallery;
    }

    getGalleryCancelButton() {
        return this._galleryCancelButton;
    }

    setUpColors(){

        let colorTools = document.getElementsByClassName("colorTool").length;
        
        for(let i = 0; i < colorTools.length; i++)
        {
            colorTools[i].addEventListener("click", () => {
                //document.querySelector("#photoEditor-toolbox-colors").style.display = "block";
                this._toolboxView.gallery.style.visibility= "hidden";
                //change the border color
                colorTools[i].style.borderColor = "white";
                //
                this._toolboxModel.addFavColorIndex(i);
                console.log(this._toolboxModel.getFavColors()); 
            });
    
            colorTools[i].addEventListener("mouseover", () => {
                colorTools[i].style.borderColor = this._primaryColor ;
            });
            colorTools[i].addEventListener("mouseout", () => {
                colorTools[i].style.borderColor = "white";
            });
        }
    
    
    };

}