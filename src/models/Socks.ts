import DressCode from './DressCode'
import Color from './Color'
import {Image} from 'cloudinary-react'
import Material from './Material'
import Garment from './Garment'
import GarmentType from './GarmentType'

export enum SockLength {
    NO_SHOW,
    ANKLE,
    CREW
}

class Socks extends Garment {
    constructor(
        id: string,
        color: Array<Color>,
        image: Image,
        dressCode: DressCode,
        material: Material[],
        public sockLength: SockLength
    ) {
        super(id, color, image, dressCode, GarmentType.SOCKS, material)
    }
}

export default Socks