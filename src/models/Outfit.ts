import DressCode from './DressCode'
import {Image} from 'cloudinary-react'
import Garment from './Garment'
import Shoe from './Shoe'


class Outfit {
    constructor(
        public id: string,
        public image: Image,
        public dressCode: DressCode,
        public garments: Array<Garment>,
        public shoe: Shoe
    ) {
    }
}

export default Outfit