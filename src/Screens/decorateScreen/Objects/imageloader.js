
export class ImageLoader{

    constructor(canvasWidth, canvasHeight){
        this._canvasWidth = canvasWidth;
        this._canvasHeight = canvasHeight;
        this._imagePromise = null;
    }
    
    async getImg()
    {
        let imageValues = await this._imagePromise;

        return imageValues.img;
    }

    async getImgTransform(){

        let imageValues = await this._imagePromise;

        return imageValues.transform;
    }

    async _loadImageData(src){
        const img = new Image();
        let result;
    
        //when the image loads
        //fit the image to the canvas
        this._imagePromise = new Promise(
            resolve => {
                img.onload = () => {
            
                    let transform = this._getImageTransform(img.width, img.height)
                    img.width = transform.width;
                    img.height= transform.height;
                    result = {
                        img: img,
                        transform: transform
                    };
                    resolve(result);
                    
                };
            }
        );
        

        //img source should be set after the image.onload() function
        img.src = src;

    }

    
    _getImageTransform(imgWidth, imgHeight){

        //get the canvas
        let x = 0;
        let y = 0;
        let width = imgWidth;
        let height = imgHeight;
        //get the ratio of width:height of the image
        let imgRatio = width/height;
        //get the ratio of width:height of the canvas
        let canvasRatio = this._canvasWidth/this._canvasHeight;

        //we run a check
        //to know if the image size is a landscape or a potrait
        //landscape: width of image = width of canvas, height is calculated based on the image ratio
        //potrait: height of image = height of canvas, width is calculated based on the image ratio
        //check if image is landscape
        if(imgRatio > canvasRatio)
        {
            width = this._canvasWidth;
            height = width/(imgRatio);
            x = 0;
            y= (this._canvasHeight - height)/2;
        }else
        {
            height = this._canvasHeight;
            width = height * imgRatio;
            y = 0;
            x = (this._canvasWidth - width)/2;
        }

        return {
            width: width,
            height: height,
            x:x,
            y:y
        }
    }
}