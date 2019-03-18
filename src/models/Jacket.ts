import DressCode from './DressCode'
import Color from './Color'
import {Image} from 'cloudinary-react'
import Material from './Material'
import Garment from './Garment'
import GarmentType from './GarmentType'

export enum JacketType {
    ANORAK,
    BIKER,
    BLOUSON,
    BOMBER,
    CROMBIE,
    DENIM,
    FLEECE,
    HOODED,
    INSULATED_VEST,
    LEATHER,
    LEATHER_VEST,
    OVERCOAT,
    PARKA,
    PEACOAT,
    QUILTED,
    RACER,
    RAINCOAT,
    SHEARLING,
    SKI,
    TRACK,
    TRENCHCOAT,
    TRUCKER,
    VARSITY
}

export enum JacketWeight {
    HEAVY,
    MEDIUM,
    LIGHT
}

class Jacket extends Garment {
    constructor(
        id: string,
        color: Array<Color>,
        image: Image,
        dressCode: DressCode,
        material: Material[],
        public jacketType: JacketType,
        public jacketWeight: JacketWeight
    ) {
        super(id, color, image, dressCode, GarmentType.JACKET, material)
    }
}

export default Jacket