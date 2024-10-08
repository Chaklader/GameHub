import noImage from '../../assets/no-image.webp'

const getCroppedImageURL = (url: string) => {
    if (!url) return noImage;

    const target = 'media/';
    const index = url.indexOf(target) + target.length;

    return url.substring(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageURL;