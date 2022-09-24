import { IInterfaceState } from "../types/state";
import { BaklavaEvent, PreventableBaklavaEvent, SequentialHook } from "@baklavajs/events";
import { INodeInterface, INode } from "../types";
export declare class NodeInterface implements INodeInterface {
    id: string;
    isInput: boolean;
    parent: INode;
    option?: string;
    [k: string]: any;
    events: {
        setConnectionCount: BaklavaEvent<number>;
        beforeSetValue: PreventableBaklavaEvent<any>;
        setValue: BaklavaEvent<any>;
        updated: BaklavaEvent<void>;
    };
    hooks: {
        load: SequentialHook<IInterfaceState>;
        save: SequentialHook<IInterfaceState>;
    };
    private _connectionCount;
    set connectionCount(v: number);
    get connectionCount(): number;
    private _value;
    set value(v: any);
    get value(): any;
    constructor(parent: INode, isInput: boolean);
    load(state: IInterfaceState): void;
    save(): IInterfaceState;
}
