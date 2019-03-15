import DressCode from './DressCode'
import Fabric from './Fabric'
import Thing from './Thing'
import Color from './Color'
import {Image} from 'cloudinary-react'


class Garment extends Thing {
    constructor(id: string, color: Array<Color>, image: Image, public dressCode: DressCode, public fabric: Fabric) {
        super(id, color, fabric.material, image)
    }
}

export default Garment