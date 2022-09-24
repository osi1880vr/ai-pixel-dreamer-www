import { NodeInterface } from "./nodeInterface";
import { BaklavaEvent } from "@baklavajs/events";
import { IConnection, ITransferConnection } from "../types/connection";
export declare class Connection implements ITransferConnection {
    id: string;
    from: NodeInterface;
    to: NodeInterface;
    isInDanger: boolean;
    destructed: boolean;
    events: {
        destruct: BaklavaEvent<void>;
    };
    constructor(from: NodeInterface, to: NodeInterface);
    destruct(): void;
}
/**
 * This class is used for calculation purposes only.
 * It won't alter any state of the connected nodes
 */
export declare class DummyConnection implements IConnection {
    id: string;
    from: NodeInterface;
    to: NodeInterface;
    constructor(from: NodeInterface, to: NodeInterface);
}
