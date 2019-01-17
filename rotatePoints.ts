namespace collision {
    export function rotatePoints(p: Polygon, dRotation: number): void {
        let points = p.points;
        let l = points.length;
        let rad = dRotation / 180 * Math.PI;
        let cos = Math.cos(rad);
        let sin = Math.sin(rad);
        for (let i = 0; i < l; i++) {
            let t = points[i];
            let x = t.x;
            let y = t.y;
            t.x = x * cos - y * sin;
            t.y = x * sin + y * cos;
        }
    }
}