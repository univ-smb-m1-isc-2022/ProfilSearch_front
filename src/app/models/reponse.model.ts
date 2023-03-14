import { Question } from './question.model';
import { Candidature } from './candidature.model';

export class Reponse {
    constructor(
        public id: number,
        public reponse: string,
        public question: Question,
) {
    }
}