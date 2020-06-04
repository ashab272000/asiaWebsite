import { Colors, FavouriteColors } from "./favouriteColor";


export class ToolboxView{
    constructor(){
        this.toolbox = document.querySelector("#photoEditor-toolbox-upload");
        this.uploadButton = document.querySelector("#uploadImage");
        this.uploadInput = document.querySelector("#uploadInput");
        this.chooseColorButton = document.querySelector("#chooseColorButton");
        this.undoButton = document.querySelector("#undoButton");
        this.redoButton = document.querySelector("#redoButton");
        this._selectedIndex = -1;
    }

    addFavColorHtml(colorIndex){
        //get the parent object where we would inject a new color
        //when a favourite color is added
        const parent = document.querySelector("#photoEditor-toolbox-colors");
        let children = parent.children;
        if(this._selectedIndex != -1)
        {
            parent.children[this._selectedIndex].classList.remove('selected');
        }

        //add html element to display the color
        this._addFavHtmlElement(parent, Colors.colors[colorIndex], Colors.colorsInfo[colorIndex]);
        this._addFavElementListener(parent);
        this._selectedIndex = 0;
        parent.children[this._selectedIndex].classList.add('selected');


        //limit of color boxes 
        if(parent.children.length > 6)
        {
            parent.removeChild(parent.lastElementChild);
        }
        //set the selectedColorIndex of the Colors object to the corresponding color index
        //FavouriteColors.colors are in reverse order to the array of color objects
        Colors.selectedColorIndex = FavouriteColors.colors[(FavouriteColors.colors.length - 1) - this._selectedIndex ];
            
    }
    
    _addFavHtmlElement(parent ,color, colorInfo){
        const html = "<div class='fav'><div class='favColor' style='background: %color%; width: 60px; height:60px;'></div><h4> %colorName% <br> %colorId% </h4></div>";
        let newHtml = html.replace("%color%", color);
        newHtml = newHtml.replace("%colorName%", colorInfo.split(", ")[0]);
        newHtml = newHtml.replace("%colorId%", colorInfo.split(", ")[1]);
        parent.insertAdjacentHTML("afterbegin", newHtml);
    }
    
    _addFavElementListener(parent){
        
        parent.firstChild.addEventListener('click', (e) => {
            
            //get the current index of the element
            const newSelectedIndex = Array.prototype.indexOf.call(parent.children, e.currentTarget);
            //console.log
            console.log(`newSelectedIndex: ${newSelectedIndex}` );
            //remove the selection ui from the old selected color object
            parent.children[this._selectedIndex].classList.remove('selected');
            //assign the selectedIndex to the current index of the element
            this._selectedIndex = newSelectedIndex;
            //add the selection ui to the currrent selected color
            parent.children[this._selectedIndex].classList.add('selected');
            //set the selectedColorIndex of the Colors object to the corresponding color index
            //FavouriteColors.colors are in reverse order to the array of color objects
            Colors.selectedColorIndex = FavouriteColors.colors[(FavouriteColors.colors.length - 1) - this._selectedIndex ];
            console.log(Colors.selectedColorIndex);
            
        });
        
    }


}
