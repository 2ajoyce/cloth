import DressCode from './DressCode'
import Color from './Color'
import {Image} from 'cloudinary-react'
import Material from './Material'
import Garment from './Garment'
import GarmentType from './GarmentType'

export enum LegType {
    SKINNY,
    SLIM,
    TAPERED,
    REGULAR,
    STRAIGHT,
    BOOT_CUT,
    LOOSE
}

class Pants extends Garment {
    constructor(
        id: string,
        color: Array<Color>,
        image: Image,
        dressCode: DressCode,
        material: Material[],
        public legType: LegType
    ) {
        super(id, color, image, dressCode, GarmentType.PANTS, material)
    }
}

export default Pants