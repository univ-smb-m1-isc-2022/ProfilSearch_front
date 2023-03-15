import { Reponse } from './reponse.model';
export class Candidature {
    constructor(
        public id: number,
        public name: string,
        public fname: string,
        public email: string,
        public offre: { id: number, name?: string },
        public reponses: Reponse[]
    ){
    }
}