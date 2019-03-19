import DressCode from './DressCode'
import Color from './Color'
import {Image} from 'cloudinary-react'
import Material from './Material'
import Garment from './Garment'
import GarmentType from './GarmentType'

class Shorts extends Garment {
    constructor(
        id: string,
        color: Array<Color>,
        image: Image,
        dressCode: DressCode,
        material: Material[]
    ) {
        super(id, color, image, dressCode, GarmentType.SHORTS, material)
    }
}

export default Shorts