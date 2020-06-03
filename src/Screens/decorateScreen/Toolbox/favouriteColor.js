

// export class FavouriteColors{

//     constructor(){
//         this._favColor = [];
//     }

//     getFavColor(){
//         return this._favColor;
//     }

//     addFavColorIndex(index)
//     {
//         this._favColor.push(index);
//         if(this._favColor.length >= 7)
//         {
//             this.removeFavColorIndex();
//         }
//     }

//     removeFavColorIndex(){
//         this._favColor = this._favColor.slice(1, this._favColor.length);
//     }
// }

export const FavouriteColors = {
    colors: [],
    addColorIndex: (i) =>{
        FavouriteColors.colors.push(i);
        if(FavouriteColors.colors.length >= 7)
        {
            FavouriteColors.removeColorIndex();
        }
    },
    removeColorIndex: () => {
        FavouriteColors.colors = FavouriteColors.colors.slice(1, FavouriteColors.colors.length);
    }
}