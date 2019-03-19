import DressCode from './DressCode'
import Thing from './Thing'
import Color from './Color'
import {Image} from 'cloudinary-react'
import Material from './Material'
import GarmentType from './GarmentType'


abstract class Garment extends Thing {
    protected constructor(
        id: string,
        color: Array<Color>,
        image: Image,
        public dressCode: DressCode,
        public garmentType: GarmentType,
        public material: Material[]
    ) {
        super(id, color, material, image)
    }
}

export default Garment