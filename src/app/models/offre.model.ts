export class Offre {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public dateDebut: Date,
        public dateFin: Date,
        public salary: number,
        public type: string,
        public place: string,
        
    ){
    }
}