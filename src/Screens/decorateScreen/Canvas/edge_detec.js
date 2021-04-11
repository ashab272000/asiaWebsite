
export class EdgeDetect{

    constructor(canvasWidth, colorConverter) {
        this._canvasWidth = canvasWidth;
        this._colorConverter = colorConverter;
        //edge detect works by comparing each pixel with its neighbore
        //color experiments showed that if the color is too dark or too light
        //we must compare by saturation
        //else we compare with hue
        this._direction = {
            up : -this._canvasWidth,
            right : 1,
            down : this._canvasWidth,
            left: -1
        }

        this._comparision = {
            hue: 0,
            saturation: 1
        }

    }


    /**
     * 
     * @param {ImageData} refImg 
     */
    setMainImgData(refImg){
        this._refImg = refImg;
    }

    detectEdge(mouseX, mouseY, edgeImg, refImg){

        this._imgData = edgeImg;
        this._refImg = refImg;
        
        //get the pixel clicked
        let pixelClicked = this._getPixelClicked(mouseX, mouseY);

        //get the hsl of the pixel
        let refPixelHsl = this._colorConverter.rgbToHsl(this._refImg.data[pixelClicked * 4], this._refImg.data[pixelClicked * 4 + 1],  this._refImg.data[pixelClicked * 4 + 2]);

        // run the algorithim
        this._detectEdgeViaBreadth(pixelClicked, this._getComparision(refPixelHsl));

        return this._imgData;
    }

    _detectEdgeViaBreadth(pixel, comparision){

        this._pixelToWhite(pixel);
        //Recursion reaches stack overflow
        //therefore, using "Recursion" with while loop
        let nextPixel = pixel;
        let pixelsTraversed = [];
        let pop = false;

        while (nextPixel != -1 && nextPixel !== undefined)
        {
            let currentPixel = nextPixel;
            nextPixel = this._getNextPixel(currentPixel, pixel, this._direction.up, pop);
            if(nextPixel != -1 && nextPixel !== undefined)
            {
                this._pixelToWhite(nextPixel);
                pixelsTraversed.push(currentPixel);
                pop = false;
                continue;
            }
            nextPixel = this._getNextPixel(currentPixel, pixel, this._direction.right, pop);
            if(nextPixel != -1 && nextPixel !== undefined)
            {
                this._pixelToWhite(nextPixel);
                pixelsTraversed.push(currentPixel);
                pop = false;
                continue;
            }
            nextPixel = this._getNextPixel(currentPixel, pixel, this._direction.down, pop);
            if(nextPixel != -1 && nextPixel !== undefined)
            {
                this._pixelToWhite(nextPixel);
                pixelsTraversed.push(currentPixel);
                pop = false;
                continue;
            }
            nextPixel = this._getNextPixel(currentPixel, pixel, this._direction.left, pop);
            if(nextPixel != -1 && nextPixel !== undefined)
            {
                this._pixelToWhite(nextPixel);
                pixelsTraversed.push(currentPixel);
                pop = false;
                continue;
            }else{
                nextPixel = pixelsTraversed.pop();
                pop = true;
            } 
        }


    }

    
    _pixelToWhite(pixel) {
        this._imgData.data[pixel * 4] = 255;
        this._imgData.data[pixel * 4 + 1] = 255;
        this._imgData.data[pixel * 4 + 2] = 255;
        this._imgData.data[pixel * 4 + 3] = 69;
    }


    _getPixelClicked(mouseX, mouseY){
        let pixel = mouseX + mouseY * this._canvasWidth;
        return pixel
    }

    _getComparision(pixel){
        //check to configure the  variable
        
        if(pixel[1] < 0.15 || pixel[1] > 0.85)
        {
            return this._comparision.saturation;
        }else{
            return this._comparision.hue;
        }

    }

    _getHslFromRgb(pixel, imgData){
        return this._colorConverter.rgbToHsl(imgData.data[pixel * 4], imgData.data[pixel * 4 + 1], imgData.data[pixel * 4 + 2]);
    }

    _getRgbFromHsl(pixel, imgData){
        return this._colorConverter.rgbToHsl(imgData.data[pixel * 4], imgData.data[pixel * 4 + 1], imgData.data[pixel * 4 + 2]);
    }

    _getRgb(pixel, imgData){
        return [imgData.data[pixel * 4], imgData.data[pixel * 4 + 1], imgData.data[pixel * 4 + 2], imgData.data[pixel * 4 + 3]]
    }

    /**
     * Checks if the color a is a shade of color b.
     * a is compared color and b is the currentColor
     */
     _isColorShade(a , b){
        let red1 = a[0];
        let blue1 = a[1];
        let green1 = a[2];
        let red2 = b[0];
        let blue2 = b[1];
        let green2 = b[2];
        if(red1 != undefined && blue1 != undefined && green1 != undefined && red2 != undefined && blue2 != undefined && green2 != undefined)
        {
            return this._isColorFactorSimilar(red1, blue1,red2,blue2) && this._isColorFactorSimilar(blue1,green1,blue2, green2);
        }
        return false;

        // check if the factors are pretty similar
        // if one of the current colors have 0 then the compared color can have the less than the factor
        // example
        //green and blue factor is 2
        //red is 0
        //compared red should be less than or equal to 2
        
        //if one of the primary color reaches 255 then 

        
    }

    /**
     * 
     * a1 and a2 are part of the comparedColor
     * b1 and b2 are part of the CurrentColor
     * the number 1 and represents the corresponding comparables
     * @returns 
     */
    _isColorFactorSimilar(a1, a2, b1, b2){
        let factor1 = b1 == 0 || a1 == 255 ? -1 : b1/a1;
        let factor2 = b2 == 0 || a2 == 255 ? -1 : b2/a2;
        // console.log("factor1:" + factor1);
        // console.log("factor2:" + factor2);
        // console.log("a1:" + a1);
        // console.log("b1:" + b1);
        // console.log("a2:" + a2);
        // console.log("b2:" + b2);
        if(Math.abs(Math.abs(factor1) - Math.abs(factor2)) > 0.8    ){
            if(factor1 == -1){
                if(b1 == 0){
                    return (a1 - b1) < factor2;
                }else if(a1 == 255){
                    return b1 * factor2 > a1
                }
            }else if(factor2 == -1){
                if(b2 == 0){
                    return (a2 - b2) < factor1;
                }else if(a2 == 255){
                    return b2 * factor1 > a2;
                }
            }
            return false;
        }
        return true;
    }

    _getNextPixel(currentPixel, pixelClicked, direction, isPoped){
        //get the hsl of the pixel
        let comparePixel = 0;

        //compare the pixel above
        comparePixel = currentPixel + (direction);

        //get the rgb value of the pixel of the edgeimg layer
        //check if the pixel is already part of the pixel
        let comparePixelRgbEdge = this._getRgb(comparePixel, this._imgData);
        if(!(comparePixelRgbEdge[0] == 255 && comparePixelRgbEdge[1] == 255 && comparePixelRgbEdge[2] == 255 && comparePixelRgbEdge[3] == 69) )
        {

            let clickedRgbValue = this._getRgb(pixelClicked, this._refImg);
            let compareRgbValue = this._getRgb(comparePixel, this._refImg);
            let currentRgbValue = this._getRgb(currentPixel, this._refImg);
            let rgbDiff = Math.abs(((currentRgbValue[0] + currentRgbValue[1] + currentRgbValue[2])/3) - ((compareRgbValue[0] + compareRgbValue[1] + compareRgbValue[2])/3));
            //change this

            // if( compareValue < 0.03 && compareLightness > -0.03 && compareLightness < 0.03 && rgbDiff < 5)
            // {
            //     //this gets the avg values of lightness and saturation
            //     /*
            //     if(!isPoped)
            //     {
            //         let compareHsl = this._colorConverter.rgbToHsl(...compareRgbValue);
            //         avgL = (avgL + compareHsl[2])/2;
            //         avgS = (avgS + compareHsl[1])/2; 
            //     }*/
            //     return comparePixel;
            // }else{
            //     return -1;
            // }
            if(this._isColorShade(compareRgbValue, clickedRgbValue) &&  rgbDiff < 4){
                return comparePixel;
            }
            return -1;

        }else{
            return -1;
        }    
    }
}
