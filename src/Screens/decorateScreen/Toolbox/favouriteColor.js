

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
        Colors.selectedColorIndex = i;
    },
    removeColorIndex: () => {
        FavouriteColors.colors = FavouriteColors.colors.slice(1, FavouriteColors.colors.length);
    }

}

export const Colors = {
    selectedColorIndex: 0,
    colors:[ '#F3F2ED', '#F1F0E8', '#F1E8D3', '#DEDBD0', '#E9E8DF', '#BDBCB6', '#DFDFDC', '#D0D4DD', '#BEC9D3', '#C6CEC4', '#D5D3C0', '#E2DCBA', '#F6EDD6', '#F5E8D5', '#EDE8EC', '#F9DFD2', '#EFEDE8', '#ECEADE', '#E5DECD', '#C5C0B2', '#D7D2C6', '#979893', '#D3D3CF', '#B6BCC9', '#97A5B0', '#A7AEA5', '#ABAC92', '#D1CAA1', '#EFE3C2', '#E4DAC8', '#F4E4E1', '#F69C91', '#EBE9DF', '#F1EFE2', '#CBC0AF', '#AAA497', '#CCC7C0', '#918F87', '#BAB9B7', '#8A8F9B', '#6F7B86', '#647571', '#979781', '#D0C082', '#E7D9B7', '#D9C8B3', '#EFC9CB', '#E3695F', '#E2E0D6', '#E4DFCF', '#A99C8D', '#958F85', '#B7B1A5', '#7D7B75', '#B2B2B0', '#636876', '#5b6670', '#606B71', '#82826D', '#AD9C50', '#EBCB87', '#c46854', '#B28C91', '#AB2E37', '#DED9CE', '#CCBFAF', '#7A6D64', '#736D67', '#85817A', '#626461', '#373636', '#4A4C5C', '#46515B', '#415158', '#5E5D52', '#697D61', '#CA9450', '#935047', '#6D4446', '#9D3C3C', '#E3DED2', '#E3D9C6', '#9E9081', '#9F9586', '#C1BDB3', '#A4A29B', '#777576', '#7C8086', '#3F576E', '#698F8F', '#907F62', '#999D71', '#FAE8B8', '#A8786B', '#685A64', '#9C4347', '#E2DFD6', '#E5DECC', '#D3CDBC', '#CCC5B5', '#DED9CE', '#B9B8AF', '#B5BBBD', '#99A3B0', '#668596', '#B7CCCE', '#B7AA8F', '#B7AE77', '#F8E9C1', '#BBA392', '#999195', '#CE908B', '#E9E6D9', '#EBE6D6', '#E2DBCC', '#D2CAB8', '#DEDED7', '#D4D3C8', '#d6d5cd', '#D1D7DF', '#A0B8C1', '#CEDBDB', '#DACDAD', '#DEDAA3', '#F1ECDC', '#C9B9A9', '#C5BFC3', '#E7A8A6'], 
    colorsInfo:["7236, Jazz White", "1624, Skylight", "0567, Ivory", "1024, Timeless", "1622, Reflection", "1269, Dawn", "9904, Twilight", "4177, Heath Violet", "4468, Alladin", "7555, Soft Mint", "8303, White Heather", "8124, Malmo", "1334, Pure Barley", "566, Magnolia", "3154, Dream", "2374, Bliss", "9918, Classic White", "1001, Egg White", "1875, Sense", "10679, Washed Linen", "10341, Limestone", "8094, Silver Tone", "9915, Oxford River", "4062, Classic Blue", "4017, Eclipse Grey", "7163, Minty Breeze", "8302, Laurel", "8087, Spring Air", "1304, Romantic", "1065, Samik Ivory", "3180, Rose Petal", "2602, Butterfly", "8395, White Comfort", "1453, Cotton Ball", "1140, Sand", "394, Soft Grey", "10182, White Linen", "1877, Pebblestone", "9911, Platinum", "4624, Warm Blue", "4618, Evening Light", "6325, Balance", "8252, Green Harmony", "274, Bamboo", "1012, Wild Rice", "0568, Woodsmoke", "3021, Petal Pink", "2456, Roz", "8282, White Pepper", "1275, Mild", "1623, Marrakesh", "1352, Form", "10342, Sable Stone", "1462, Evening Sky", "9930, Jazz Grey", "4594, Blue Harmony", "4638, Elegant Blue", "5030, St Pauls Blue", "8469, Green Leaf", "8306, Wheat", "1156, Petals", "2587, Beat", "3186, Pashmina", "2625, Monroe", "552, Breeze", "1359, Macchiato", "2363, Solid", "10249, Vandyke Brown", "10429, Discrete", "7354, Moss Green", "9938, Blackened Black", "4143, Shadow Black", "4477, Deco Blue", "5180, Oslo", "8422, Green Marble", "125, Palm Leaf", "1987, Oak Sand", "2859, Whispering Red", "2846, Bordeaux", "2115, Bologna", "1376, Mist", "1519, Vanilla Latte", "1929, Nutmeg", "1233, Mohair", "553, Chino", "1032, Iron Grey", "9913, Matrix", "4629, Matt Silver", "4625, Petroli", "6084, Sea Emerald", "10248, Olive Garden", "8109, April Green", "10541, Sunkissed", "2856, Warm Blush", "3207, Dark Velvet", "2731, Hibiscus", "1928, Summer Snow", "1832, Milky Way", "10678, Space", "1016, Antique White", "8470, Smooth White", "1973, Objective", "5081, Silver Moon", "4109, Gustivian Blue", "5159, Retro Blue", "5225, Lake View", "1938, Tea Leaves", "8088, Spring Foliage", "1154, Cheese Cake", "2024, Senses", "3206, Light Eggplant", "2613, Petit Four", "486, Early Rain", "1625, Soul", "1931, Cashew", "1876, Wild Earl", "8394, White Poetry", "1391, Bare", "121, Pearl", "4627, Rain Sky", "4423, Teal Zen", "5262, Svalbard Sea", "10245, Ginseng", "8200, Winter Willow", "1442, Clear", "10580, Soft Skin", "3037, Cool Ash", "2619, Rose Basket", "7236, Jazz White", "1624, Skylight", "0567, Ivory", "1024, Timeless", "1622, Reflection", "1269, Dawn", "9904, Twilight", "4177, Heath Violet", "4468, Alladin", "7555, Soft Mint", "8303, White Heather", "8124, Malmo", "1334, Pure Barley", "566, Magnolia", "3154, Dream", "2374, Bliss", "9918, Classic White", "1001, Egg White", "1875, Sense", "10679, Washed Linen", "10341, Limestone", "8094, Silver Tone", "9915, Oxford River", "4062, Classic Blue", "4017, Eclipse Grey", "7163, Minty Breeze", "8302, Laurel", "8087, Spring Air", "1304, Romantic", "1065, Samik Ivory", "3180, Rose Petal", "2602, Butterfly", "8395, White Comfort", "1453, Cotton Ball", "1140, Sand", "394, Soft Grey", "10182, White Linen", "1877, Pebblestone", "9911, Platinum", "4624, Warm Blue", "4618, Evening Light", "6325, Balance", "8252, Green Harmony", "274, Bamboo", "1012, Wild Rice", "0568, Woodsmoke", "3021, Petal Pink", "2456, Roz", "8282, White Pepper", "1275, Mild", "1623, Marrakesh", "1352, Form", "10342, Sable Stone", "1462, Evening Sky", "9930, Jazz Grey", "4594, Blue Harmony", "4638, Elegant Blue", "5030, St Pauls Blue", "8469, Green Leaf", "8306, Wheat", "1156, Petals", "2587, Beat", "3186, Pashmina", "2625, Monroe", "552, Breeze", "1359, Macchiato", "2363, Solid", "10249, Vandyke Brown", "10429, Discrete", "7354, Moss Green", "9938, Blackened Black", "4143, Shadow Black", "4477, Deco Blue", "5180, Oslo", "8422, Green Marble", "125, Palm Leaf", "1987, Oak Sand", "2859, Whispering Red", "2846, Bordeaux", "2115, Bologna", "1376, Mist", "1519, Vanilla Latte", "1929, Nutmeg", "1233, Mohair", "553, Chino", "1032, Iron Grey", "9913, Matrix", "4629, Matt Silver", "4625, Petroli", "6084, Sea Emerald", "10248, Olive Garden", "8109, April Green", "10541, Sunkissed", "2856, Warm Blush", "3207, Dark Velvet", "2731, Hibiscus", "1928, Summer Snow", "1832, Milky Way", "10678, Space", "1016, Antique White", "8470, Smooth White", "1973, Objective", "5081, Silver Moon", "4109, Gustivian Blue", "5159, Retro Blue", "5225, Lake View", "1938, Tea Leaves", "8088, Spring Foliage", "1154, Cheese Cake", "2024, Senses", "3206, Light Eggplant", "2613, Petit Four", "486, Early Rain", "1625, Soul", "1931, Cashew", "1876, Wild Earl", "8394, White Poetry", "1391, Bare", "121, Pearl", "4627, Rain Sky", "4423, Teal Zen", "5262, Svalbard Sea", "10245, Ginseng", "8200, Winter Willow", "1442, Clear", "10580, Soft Skin", "3037, Cool Ash", "2619, Rose Basket"],
}