// import big from '../assets/large.jpg';
import small from '../assets/small.jpg';

import '../styles/image_viewer.css';

export default () => {
const image = document.createElement('img');
image.src = small;
document.body.appendChild(image);

}


// const image2 = document.createElement('img');
// image2.src = big;

// document.body.appendChild(image2);