
class GalleryView{

    constructor()
    {
        this.gallery = document.querySelector('#colors-window');
        this.galleryCancelButton = document.querySelector('#cancel-window');
    }

    addColor(index){
        const parent = document.querySelector("#colors-container");
        const html = "<div class='colorTool' style='background: %color%; width: 60px; height:60px; border: 1px solid white;margin=0px;padding =0px;'></div>";
        let newHtml = html.replace("%color%", this._colors[index]);
        parent.insertAdjacentHTML("beforeend", newHtml);
    }
}