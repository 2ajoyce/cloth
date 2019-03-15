import Color from './Color'
import Material from './Material'
import {Image} from 'cloudinary-react'


abstract class Thing {
    protected constructor(
        public id: string,
        public color: Array<Color>,
        public material: Array<Material>,
        public image: Image) {
    }
}

export default Thing