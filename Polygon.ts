namespace collision {
    export type Point = { x: number, y: number };
    export interface Polygon {
        x: number;
        y: number;
        points: Point[];
    }
}