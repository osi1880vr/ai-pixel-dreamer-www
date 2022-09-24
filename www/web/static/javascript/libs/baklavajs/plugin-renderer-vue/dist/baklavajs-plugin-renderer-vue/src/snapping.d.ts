/** A function that receives raw x and y values and returns the new x and y values, which the node should be snapped to */
export declare type SnappingProvider = (x: number, y: number) => {
    x: number;
    y: number;
};
export declare function createSimpleSnappingProvider(xGrid: number, yGrid: number): SnappingProvider;
