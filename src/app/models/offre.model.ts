import { Question } from "./question.model";

export class Offre {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public dateDebut: Date,
        public dateFin: Date,
        public creation_date : Date,
        public salary: number,
        public type: string,
        public place: string,
        public questions: Question[],
        public image: number[],
        public imageUrl: string,
        public published: boolean,
        public bullets: string[] = []       
    ){
    }

}