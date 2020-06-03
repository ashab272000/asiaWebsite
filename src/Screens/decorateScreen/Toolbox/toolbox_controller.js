import { ToolboxView } from "./tollbox_view";
import { GalleryController } from "./gallery_controller";
import { ToolboxModel } from "./toolbox_model";

export class ToolboxController {

    constructor()
    {
        this._toolboxView = new ToolboxView();
        this._toolboxModel = new ToolboxModel();
        this._galleryController = new GalleryController();
        this._primaryColor = '#70c1ff';
        this._setupListeners();
        this._selectedColor;
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

    
    
    addFavColorHtml(num){
    
        const parent = document.querySelector("#photoEditor-toolbox-colors");
        let children = parent.children;
        for (let i = num; i > -1; i--)
        {
            if(i >= (children.length) )
            {
                if(colorChosen[i] == null)
                {   
                    break;
                }else{
                    //console.log("before:" +parent.children[i].style.backgroundColor);
                    const html = "<div class='fav'><div class='favColor' style='background: %color%; width: 60px; height:60px;'></div><h4> %colorName% <br> %colorId% </h4></div>";
                    let newHtml = html.replace("%color%", colors[colorChosen[i]]);
                    newHtml = newHtml.replace("%colorName%", colorsInfo[colorChosen[i]].split(", ")[0]);
                    newHtml = newHtml.replace("%colorId%", colorsInfo[colorChosen[i]].split(", ")[1]);
                    parent.insertAdjacentHTML("afterbegin", newHtml);
    
                    for(let j = 0; j < parent.childElementCount; j++)
                    {
                        parent.children[j].addEventListener("click", () =>{
                            changeSelectedColor(parent.children[j].children[0]);
                            for (let i = 0; i < parent.childElementCount; i++)
                            {
                                parent.children[i].classList.remove("selected");
                            }
                            parent.children[j].classList.add("selected");
                        })
                    }
                }
            }else{
                parent.children[i].children[0].style.backgroundColor = colors[colorChosen[i]];
                parent.children[i].children[1].innerHTML = colorsInfo[colorChosen[i]].split(", ")[0] + "<br>" +  colorsInfo[colorChosen[i]].split(", ")[1];
            }
        }
        for (let i = 0; i < parent.childElementCount; i++)
        {
            parent.children[i].classList.remove("selected");
        }
        parent.children[0].classList.add("selected");
    }
    
}