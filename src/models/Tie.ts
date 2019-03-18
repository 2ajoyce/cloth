import DressCode from './DressCode'
import Color from './Color'
import {Image} from 'cloudinary-react'
import Material from './Material'
import Garment from './Garment'
import GarmentType from './GarmentType'

export enum TieType {
    BOW_TIE,
    NECK_TIE,
    ASCOT,
    CRAVAT
}

export enum TieWidth {
    SLIM,
    CLASSIC,
    WIDE
}

class Tie extends Garment {
    constructor(
        id: string,
        color: Array<Color>,
        image: Image,
        dressCode: DressCode,
        material: Material[],
        public tieType: TieType,
        public tieWidth: TieWidth
    ) {
        super(id, color, image, dressCode, GarmentType.TIE, material)
    }
}

export default Tie