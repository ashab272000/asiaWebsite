import { ToolboxView } from "./tollbox_view";
import { GalleryController } from "./gallery_controller";

export class ToolboxController {

    constructor()
    {
        
        this._toolboxView = new ToolboxView();
        this._galleryControllet = new GalleryController();
        this._setupListeners();
    }


    _setupListeners(){
        
        this._toolboxView.chooseColorButton.addEventListener("click", ()=>{
            this._toolboxView.gallery.style.visibility = "visible";
        });

        //
        this._toolboxView.galleryCancelButton.addEventListener("click", () =>{
            this._toolboxView.gallery.style.visibility= "hidden";
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

    setUpColors(){

        let colorTools = document.getElementsByClassName("colorTool");
        
        for(let i = 0; i < colorTools.length; i++)
        {
            colorTools[i].addEventListener("click", () => {
                changeSelectedColor(colorTools[i]);
                //document.querySelector("#photoEditor-toolbox-colors").style.display = "block";
                colorWindow.style.visibility= "hidden";
                colorTools[i].style.borderColor = "white";
                addFavColor(i);
            });
    
            colorTools[i].addEventListener("mouseover", () => {
                colorTools[i].style.borderColor = primaryColor ;
            });
            colorTools[i].addEventListener("mouseout", () => {
                colorTools[i].style.borderColor = "white";
            });
        }
    
    
    };

    addFavColor(index){
    
        let num = colorChosen.length - 1;
        //check where the first null is
        //save that index to num
        for(let i = 0; i < colorChosen.length ; i++)
        {
            if(colorChosen[i] == null)
            {
                num = i;
                break;
            }
        }
        //shift all the elements to the right
        //make space for the new color choses
        for(let j = num; j > 0; j--)
        {
            colorChosen[j] = colorChosen[j - 1]; 
        }
        colorChosen[0] = index;
    
        addFavColorHtml(num);
    
    };
    
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