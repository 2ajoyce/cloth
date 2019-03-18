import DressCode from './DressCode'
import Color from './Color'
import {Image} from 'cloudinary-react'
import Material from './Material'
import Garment from './Garment'
import GarmentType from './GarmentType'

class Belt extends Garment {
    constructor(
        id: string,
        color: Array<Color>,
        image: Image,
        dressCode: DressCode,
        garmentType: GarmentType,
        material: Material[]
    ) {
        super(id, color, image, dressCode, GarmentType.BELT, material)
    }
}

export default Belt