import { Vue } from "vue-property-decorator";
import { IConnection } from "../../../baklavajs-core/types";
import { IViewNode } from "../../types";
import { ViewPlugin } from "../viewPlugin";
interface IRect {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}
export default class Minimap extends Vue {
    ctx?: CanvasRenderingContext2D;
    intervalHandle: number;
    showViewBounds: boolean;
    dragging: boolean;
    bounds: IRect;
    nodes: IViewNode[];
    connections: IConnection[];
    plugin: ViewPlugin;
    mounted(): void;
    beforeDestroy(): void;
    updateCanvas(): void;
    /** Transforms coordinates from editor space to minimap space */
    transformCoordinates(origX: number, origY: number): [number, number];
    /** Transforms coordinates from minimap space to editor space */
    reverseTransform(thisX: number, thisY: number): [number, number];
    getNodeColor(domElement?: HTMLElement | null): string;
    getComputedColor(domElement: Element): string | undefined;
    /** Returns view bounds in editor space */
    getViewBounds(): IRect;
    mousedown(ev: MouseEvent): void;
    mousemove(ev: MouseEvent): void;
    mouseup(ev: MouseEvent): void;
}
export {};
