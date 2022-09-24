import { INode, INodeInterface } from "../../../../baklavajs-core/types";
export interface IResolvedDomElements {
    node: HTMLElement | null;
    interface: HTMLElement | null;
    port: HTMLElement | null;
}
export declare function getDomElementOfNode(node: INode): HTMLElement | null;
export default function getDomElements(ni: INodeInterface): IResolvedDomElements;
