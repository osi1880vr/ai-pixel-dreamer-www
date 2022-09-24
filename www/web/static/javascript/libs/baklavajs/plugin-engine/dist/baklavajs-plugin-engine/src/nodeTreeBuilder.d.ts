import { INode, IConnection } from "../../baklavajs-core/types";
interface IOrderCalculationResult {
    calculationOrder: INode[];
    rootNodes: INode[];
}
export declare function calculateOrder(nodes: ReadonlyArray<INode>, connections: ReadonlyArray<IConnection>, roots?: INode[]): IOrderCalculationResult;
export declare function containsCycle(nodes: ReadonlyArray<INode>, connections: ReadonlyArray<IConnection>): boolean;
export {};
