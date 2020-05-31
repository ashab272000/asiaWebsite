

export class EdgeDetect{

    constructor(canvas, colorConverter) {
        this._canvas = canvas;
        this._colorConverter = colorConverter;
        //edge detect works by comparing each pixel with its neighbore
        //color experiments showed that if the color is too dark or too light
        //we must compare by saturation
        //else we compare with hue
        this._saturationComparision = false;

    }

    detectEdge(imgData, mousePosition){

        let pixelClicked = this._getPixelClicked;
        this._checkSaturationComparision();

    }

    _getPixelClicked(){
        return (mouseX + mouseY * _canvas.width);
    }

    _checkSaturationComparision(){
        //check to configure the  variable
        if(hslPixel[1] < 0.15 || hslPixel[1] > 0.85)
        {
            
            this._checkSaturationComparision = true;
        }else{
            this._checkSaturationComparision = false;
        }
    }

//detect the edge
    edgeDetect(mouseX, mouseY, imgData){
        //this is the variable that holds which color variable to compare
        //generaly it compares the hue of a color which is 0
        //but white and black comparision needs to be compared by saturation
        //lightness in hsl represents the shades, therefore we dont need to compare them.
        //saturation < 0.1 = white
        //saturation > 0.9 = black
        //else compare with hue in hsl
        //hsl[0] = hue
        //hsl[1] = saturation
        //hsl[2] = lightness
        let compare = 0;

        //get the pixel number clicked
        let pixel = this._getPixelClicked;

        //get the hsl of the pixel
        let hslPixel = rgbToHsl(imgData.data[pixel*4], imgData.data[pixel* 4 + 1], imgData.data[pixel * 4 + 2]);


        //check to configure the compare variable
        if(hslPixel[1] < 0.15 || hslPixel[1] > 0.85)
        {
            //saturation will be compared
            compare = 1;
        }else{
            compare = 0;
        }

        //detect the pixels
        let info = pixelEdgeDetect(compare, pixel, imgData);

        return [imgData, info[0], info[1], info[2], info[3]];

    };

    _pixelEdgeDetect (compare, pixel, imgData){

        //these are needed for lighting purposes
        let lowestS = 1000;
        let highestS = 0;
        let lowestL = 1000;
        let highestL = 0;

        imgData.data[pixel * 4] = 255;
        imgData.data[pixel * 4 + 1] = 255;
        imgData.data[pixel * 4 + 2] = 255;

        let nextPixel = pixel;
        let pixels=[];
        let pop = false;
        
        //check and change pixel above
        while (nextPixel != -1 && nextPixel !== undefined)
        {
            let currentPixel = nextPixel;
            let res;
            nextPixel = changePixelEdge(currentPixel, compare, imgData, -rect.width, pop);

            if(nextPixel != -1 && nextPixel !== undefined)
            {
                res = runSuccessChangePixelEdge(imgData,nextPixel, currentPixel, lowestL, highestL, pixels);
                lowestL = res[0];
                highestL = res[1];
                pop = false;
            }else{
                nextPixel = changePixelEdge(currentPixel, compare, imgData, 1, pop);
                if(nextPixel != -1 && nextPixel !== undefined)
                {
                    res = runSuccessChangePixelEdge(imgData,nextPixel, currentPixel, lowestL, highestL, pixels);
                    lowestL = res[0];
                    highestL = res[1];
                    pop = false;
                }else{
                    nextPixel = changePixelEdge(currentPixel, compare, imgData, rect.width, pop);
                    if(nextPixel != -1 && nextPixel !== undefined)
                    {
                        res = runSuccessChangePixelEdge(imgData,nextPixel, currentPixel, lowestL, highestL, pixels);
                        lowestL = res[0];
                        highestL = res[1];
                        pop = false;
                    }else{
                        nextPixel = changePixelEdge(currentPixel, compare, imgData, -1, pop);
                        if(nextPixel != -1 && nextPixel !== undefined)
                        {
                            res = runSuccessChangePixelEdge(imgData,nextPixel, currentPixel, lowestL, highestL, pixels);
                            lowestL = res[0];
                            highestL = res[1];
                            pop = false;
                        }else{
                            nextPixel = pixels.pop();
                            pop = true;
                        } //else while loop ends here     
                    }
                }
            }

        }

        return [lowestS, highestS, lowestL, highestL];


    };

    _runSuccessChangePixelEdge(imgData,nextPixel, currentPixel, lowestL, highestL,pixels){

        edgeColorChange(imgData, nextPixel);
        pixels.push(currentPixel);

        let hsl = rgbToHsl(imgData.data[nextPixel], imgData.data[nextPixel + 1], imgData.data[nextPixel + 2]);

        if(hsl[2] < lowestL)
        {
            lowestL = hsl[2];
        }
        if(hsl[2] > highestL)
        {
            highestL = hsl[2];
        }
        return [lowestL, highestL];

    }


    _changePixelEdge(currentPixel, compare , imgData,value, pop){
        //get the hsl of the pixel
        let currentHsl = rgbToHsl(mainImgData.data[currentPixel * 4], mainImgData.data[currentPixel * 4 + 1], mainImgData.data[currentPixel * 4 + 2]);
        let compareValue;
        let compareLightness;
        let comparePixel;
        let comparePixelHsl;

        //compare the pixel above
        comparePixel = currentPixel + (value);


        if(!(imgData.data[comparePixel * 4] == 255 && imgData.data[comparePixel * 4 + 1] == 255  && imgData.data[comparePixel * 4 + 2] == 255 && imgData.data[comparePixel * 4 + 3] == 69) )
        {
            comparePixelHsl = rgbToHsl(mainImgData.data[comparePixel * 4], mainImgData.data[comparePixel * 4 + 1], mainImgData.data[comparePixel * 4 + 2]);
            compareValue = Math.abs(currentHsl[compare] - comparePixelHsl[compare]);
            if(compare == 0)
            {
                compareValue /= 360;
            }
            compareLightness = currentHsl[2] - comparePixelHsl[2];

            let currentRgbValue = [mainImgData.data[currentPixel * 4], mainImgData.data[currentPixel * 4 + 1], mainImgData.data[currentPixel * 4 + 2]];
            let compareRgbValue = [mainImgData.data[comparePixel * 4], mainImgData.data[comparePixel * 4 + 1], mainImgData.data[comparePixel * 4 + 2]];
            let rgbDiff = Math.abs(((currentRgbValue[0] + currentRgbValue[1] + currentRgbValue[2])/3) - ((compareRgbValue[0] + compareRgbValue[1] + compareRgbValue[2])/3));

            
            if( compareValue < 0.03 && compareLightness > -0.06 && compareLightness < 0.06 && rgbDiff < 5)
            {
                if(!pop)
                {
                    let compareHsl = rgbToHsl(...compareRgbValue);
                    avgL = (avgL + compareHsl[2])/2;
                    avgS = (avgS + compareHsl[1])/2; 
                }
                return comparePixel;
            }else{
                return -1;
            }




        }else{
            return -1;
        }

    };

    edgeColorChange(imgData, pixel)
    {
        imgData.data[pixel * 4] = 255;
        imgData.data[pixel * 4 + 1] = 255;
        imgData.data[pixel * 4 + 2] = 255;
        imgData.data[pixel * 4 + 3] = 69; 
    }

}
