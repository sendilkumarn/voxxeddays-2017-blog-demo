import { Entry } from '../entry';
import { User } from '../../shared';
export class Blog {
    constructor(
        public id?: number,
        public name?: string,
        public handle?: string,
        public entry?: Entry,
        public user?: User,
    ) {
    }
}
