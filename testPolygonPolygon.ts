namespace collision {
    function dot(x1: number, x2: number, y1: number, y2: number): number {
        return x1 * x2 + y1 * y2;
    }
    export function testPolygonPolygon(p1: Polygon, p2: Polygon): boolean {
        let s1 = p1.points, s2 = p2.points, l1 = s1.length, l2 = s2.length;
        let borderPx = s1[0].x + p1.x,
            borderPy = s1[0].y + p1.y;
        for (let i = 1; i < l1; i++) {
            let borderVx = s1[i].x + p1.x - borderPx,
                borderVy = s1[i].y + p1.y - borderPy;
            let minp1Dot = dot(borderVx, s1[0].x + p1.x, borderVy, s1[0].y + p1.y),
                maxp1Dot = minp1Dot,
                minp2Dot = dot(borderVx, s2[0].x + p2.x, borderVy, s2[0].y + p2.y),
                maxp2Dot = minp2Dot;
            for (let j = 1; j < l1; j++) {
                let temp = dot(borderVx, s1[j].x + p1.x, borderVy, s1[j].y + p1.y);
                if (temp < minp1Dot) {
                    minp1Dot = temp;
                }
                if (temp > maxp1Dot) {
                    maxp1Dot = temp;
                }
            }
            for (let j = 1; j < l2; j++) {
                let temp = dot(borderVx, s2[j].x + p2.x, borderVy, s2[j].y + p2.y);
                if (temp < minp2Dot) {
                    minp2Dot = temp;
                }
                if (temp > maxp2Dot) {
                    maxp2Dot = temp;
                }
            }
            if (Math.max(minp1Dot, minp2Dot) > Math.min(maxp1Dot, maxp2Dot)) {
                return false;
            }
            borderPx = s1[i].x + p1.x;
            borderPy = s1[i].y + p1.y;
        }
        borderPx = s2[0].x + p2.x;
        borderPy = s2[0].y + p2.y;
        for (let i = 1; i < l2; i++) {
            let borderVx = s2[i].x + p1.x - borderPx,
                borderVy = s2[i].y + p1.y - borderPy;
            let minp1Dot = dot(borderVx, s1[0].x + p1.x, borderVy, s1[0].y + p1.y),
                maxp1Dot = minp1Dot,
                minp2Dot = dot(borderVx, s2[0].x + p2.x, borderVy, s2[0].y + p2.y),
                maxp2Dot = minp2Dot;
            for (let j = 1; j < l1; j++) {
                let temp = dot(borderVx, s1[j].x + p1.x, borderVy, s1[j].y + p1.y);
                if (temp < minp1Dot) {
                    minp1Dot = temp;
                }
                if (temp > maxp1Dot) {
                    maxp1Dot = temp;
                }
            }
            for (let j = 1; j < l2; j++) {
                let temp = dot(borderVx, s2[j].x + p2.x, borderVy, s2[j].y + p2.y);
                if (temp < minp2Dot) {
                    minp2Dot = temp;
                }
                if (temp > maxp2Dot) {
                    maxp2Dot = temp;
                }
            }
            if (Math.max(minp1Dot, minp2Dot) > Math.min(maxp1Dot, maxp2Dot)) {
                return false;
            }
            borderPx = s2[i].x + p1.x;
            borderPy = s2[i].y + p1.y;
        }
        return true;
    }
}