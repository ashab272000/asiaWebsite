
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
            nextPixel = this._getNextPixel(currentPixel, comparision, this._direction.up, pop);
            if(nextPixel != -1 && nextPixel !== undefined)
            {
                this._pixelToWhite(nextPixel);
                pixelsTraversed.push(currentPixel);
                pop = false;
                continue;
            }
            nextPixel = this._getNextPixel(currentPixel, comparision, this._direction.right, pop);
            if(nextPixel != -1 && nextPixel !== undefined)
            {
                this._pixelToWhite(nextPixel);
                pixelsTraversed.push(currentPixel);
                pop = false;
                continue;
            }
            nextPixel = this._getNextPixel(currentPixel, comparision, this._direction.down, pop);
            if(nextPixel != -1 && nextPixel !== undefined)
            {
                this._pixelToWhite(nextPixel);
                pixelsTraversed.push(currentPixel);
                pop = false;
                continue;
            }
            nextPixel = this._getNextPixel(currentPixel, comparision, this._direction.left, pop);
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

    _getNextPixel(currentPixel, compare, direction, isPoped){
        //get the hsl of the pixel
        let currentHsl = this._getHslFromRgb(currentPixel, this._refImg);
        let compareValue = 0;
        let compareLightness = 0;
        let comparePixel = 0;
        let comparePixelHsl = 0;

        //compare the pixel above
        comparePixel = currentPixel + (direction);

        //get the rgb value of the pixel of the edgeimg layer
        //check if the pixel is already part of the pixel
        let comparePixelRgbEdge = this._getRgb(comparePixel, this._imgData);
        if(!(comparePixelRgbEdge[0] == 255 && comparePixelRgbEdge[1] == 255 && comparePixelRgbEdge[2] == 255 && comparePixelRgbEdge[3] == 69) )
        {
            //get the hsl for the pixel to be compared in the mainimglayer
            comparePixelHsl = this._getHslFromRgb(currentPixel, this._refImg);
            compareValue = Math.abs(currentHsl[compare] - comparePixelHsl[compare]);

            //compare == 0 means comparison has to be done in hue
            //compare == 1 means comparision has to be done in saturation
            if(compare == 0)
            {
                compareValue /= 360;
            }

            compareLightness = currentHsl[2] - comparePixelHsl[2];

            let currentRgbValue = this._getRgb(currentPixel, this._refImg);
            let compareRgbValue = this._getRgb(comparePixel, this._refImg);

            //change this
            let rgbDiff = Math.abs(((currentRgbValue[0] + currentRgbValue[1] + currentRgbValue[2])/3) - ((compareRgbValue[0] + compareRgbValue[1] + compareRgbValue[2])/3));

            if( compareValue < 0.03 && compareLightness > -0.03 && compareLightness < 0.03 && rgbDiff < 5)
            {
                //this gets the avg values of lightness and saturation
                /*
                if(!isPoped)
                {
                    let compareHsl = this._colorConverter.rgbToHsl(...compareRgbValue);
                    avgL = (avgL + compareHsl[2])/2;
                    avgS = (avgS + compareHsl[1])/2; 
                }*/
                return comparePixel;
            }else{
                return -1;
            }

        }else{
            return -1;
        }    
    }
}
