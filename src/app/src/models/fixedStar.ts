export interface FixedStar {
    id? : number,
    name: string,
    longitude: number,
    latitude: number,
    magnitude: number,
    category: number,
    nature: Array<number>,
    constellationID: number,
    description: Array<string>
}