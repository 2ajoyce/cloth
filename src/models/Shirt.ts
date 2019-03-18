import DressCode from './DressCode'
import Color from './Color'
import {Image} from 'cloudinary-react'
import Material from './Material'
import Garment from './Garment'
import GarmentType from './GarmentType'

export enum SleeveLength {
    SHORT,
    LONG,
    ROLLED
}

export enum CollarType {
    NONE,
    FORWARD_POINT,
    BUTTON_DOWN,
    SPREAD,
    CUTAWAY,
    BAND,
    SOFT
}

class Shirt extends Garment {
    constructor(
        id: string,
        color: Array<Color>,
        image: Image,
        dressCode: DressCode,
        material: Material[],
        public sleeveLength: SleeveLength,
        public collarType: CollarType
    ) {
        super(id, color, image, dressCode, GarmentType.SHIRT, material)
    }
}

export default Shirt