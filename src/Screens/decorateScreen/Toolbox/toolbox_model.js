

export class ToolboxModel{
 
    constructor(maxFavColors = 6) {
        this._primaryColor = "#70c1ff";
        this._maxFavColors = maxFavColors;
        this._favColor = []
    }

    getFavColors()
    {
        return this._favColor;
    }

    addFavColorIndex(index)
    {
        this._favColor.push(index);
        if(this._favColor.length >= 7)
        {
            this.removeFavColorIndex();
        }
    }

    removeFavColorIndex(){
        this._favColor = this._favColor.slice(1, this._favColor.length);
    }
}