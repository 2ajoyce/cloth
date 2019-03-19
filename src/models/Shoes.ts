import DressCode from './DressCode'
import Thing from './Thing'
import Color from './Color'
import Material from './Material'
import {Image} from 'cloudinary-react'


class Shoes extends Thing {
    constructor(
        id: string,
        color: Array<Color>,
        material: Array<Material>,
        image: Image,
        public dressCode: DressCode
    ) {
        super(id, color, material, image)
    }
}

export default Shoes