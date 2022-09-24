import { INodeInterface } from "./nodeInterface";
export declare enum TemporaryConnectionState {
    NONE = 0,
    ALLOWED = 1,
    FORBIDDEN = 2
}
export interface ITemporaryConnection {
    status: TemporaryConnectionState;
    from: INodeInterface;
    to?: INodeInterface;
    mx?: number;
    my?: number;
}
export interface IConnection {
    id: string;
    from: INodeInterface;
    to: INodeInterface;
}
export interface ITransferConnection extends IConnection {
    isInDanger: boolean;
    destructed: boolean;
}
