import Glide from '@glidejs/glide'


export const setupGlide = () => {
    
    var glide = new Glide('#card-glider', {
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
      });

    glide.mount();

}