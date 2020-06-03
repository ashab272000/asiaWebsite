
export class ColorFiller{

    constructor(colorConverter){
        this._colorConverter = colorConverter;
    }

    /**
     * 
     * @param {ImageData} edgeLayer 
     * @param {ImageData} colorLayer 
     * @param {Int8Array} selectedColor 
     */
    fillColor(mainImgLayer,edgeLayer, colorLayer, selectedColor){
        
        //change the color of the 
        let edgeImg = edgeLayer;

        //convert the selected color from rgb to hsl
        let selectedHsl = this._colorConverter.rgbToHsl(...selectedColor);

        //go through the all the pixels in the image
        for (let i = 0; i < edgeImg.data.length; i+=4) {
            
            if(edgeImg.data[i] == 255 && edgeImg.data[i+1] == 255 && edgeImg.data[i+2] ==255  && edgeImg.data[i+3]){

                //convert the pixel color to hsl
                let hsl = this._colorConverter.rgbToHsl(mainImgLayer.data[i],mainImgLayer.data[i+1], mainImgLayer.data[i+2])
    
                let lightness;
                let saturation;
                
                //the lightness should use the average l
                //lightness = (selectedHsl[2]) + ((hsl[2])+ (-(avgL)));
                //temporarily we will be using 0.5 instead of average lightness
                lightness = (selectedHsl[2]) + ((hsl[2]) - 0.5);

                lightness *= (selectedHsl[2] * 0.85);
                lightness = (lightness + selectedHsl[2])/2;

                saturation = selectedHsl[1] - (selectedHsl[1] * ((selectedHsl[2]) * 0.6));
                saturation = (selectedHsl[1] + saturation)/2;

                //convert hsl to rgb
                let rgb = this._colorConverter.hslToRgb(selectedHsl[0], saturation, lightness);

                //change the image data
                colorLayer.data[i] = rgb[0];
                colorLayer.data[i+1] = rgb[1];
                colorLayer.data[i+2] = rgb[2];
            }
        }

        //put the image data when done
        return colorLayer;
    }
}