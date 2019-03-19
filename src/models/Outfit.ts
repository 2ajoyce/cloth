import DressCode from './DressCode'
import {Image} from 'cloudinary-react'
import Shoes from './Shoes'
import Pants from './Pants'
import Shirt from './Shirt'
import Socks from './Socks'
import Jacket from './Jacket'
import Tie from './Tie'
import Belt from './Belt'
import Shorts from './Shorts'


class Outfit {
    constructor(
        public id: string,
        public image: Image,
        public dressCode: DressCode,
        public belt: Belt,
        public bottoms: Pants | Shorts,
        public shirt: Shirt,
        public shoes: Shoes,
        public socks: Socks,
        public jacket?: Jacket,
        public tie?: Tie,
    ) {
    }
}

export default Outfit