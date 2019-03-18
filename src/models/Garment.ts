import DressCode from './DressCode'
import Thing from './Thing'
import Color from './Color'
import {Image} from 'cloudinary-react'
import Material from "./Material";


class Garment extends Thing {
    constructor(id: string, color: Array<Color>, image: Image, public dressCode: DressCode, public material: Material[]) {
        super(id, color, material, image)
    }
}

export default Garment