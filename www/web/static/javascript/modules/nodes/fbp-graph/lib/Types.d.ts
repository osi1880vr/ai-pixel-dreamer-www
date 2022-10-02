export declare type TransactionEntry = {
    cmd: string;
    args: {
        [key: string]: any;
    };
    rev: number | null;
};
export declare type JournalMetadata = {
    [key: string]: any;
};
export declare type GraphOptions = {
    caseSensitive?: boolean;
};
export declare type PropertyMap = {
    [key: string]: any;
};
export declare type GraphNodeID = string;
export declare type GraphNodeMetadata = PropertyMap;
export declare type GraphNode = {
    id: GraphNodeID;
    component: string;
    metadata?: GraphNodeMetadata;
};
export declare type GraphJsonNode = {
    component: string;
    metadata?: GraphNodeMetadata;
};
export declare type GraphEdgeMetadata = PropertyMap;
export declare type GraphEdge = {
    from: {
        node: GraphNodeID;
        port: string;
        index?: number;
    };
    to: {
        node: GraphNodeID;
        port: string;
        index?: number;
    };
    metadata?: GraphEdgeMetadata;
};
export declare type GraphJsonEdge = {
    src?: {
        process: GraphNodeID;
        port: string;
        index?: number;
    };
    data?: any;
    tgt: {
        process: GraphNodeID;
        port: string;
        index?: number;
    };
    metadata?: GraphEdgeMetadata;
};
export declare type GraphIIPMetadata = PropertyMap;
export declare type GraphIIP = {
    from: {
        data: any;
    };
    to: {
        node: GraphNodeID;
        port: string;
        index?: number;
    };
    metadata?: GraphIIPMetadata;
};
export declare type GraphExportedPort = {
    process: GraphNodeID;
    port: string;
    metadata?: GraphNodeMetadata;
};
export declare type GraphGroupMetadata = PropertyMap;
export declare type GraphGroup = {
    name: string;
    nodes: Array<GraphNodeID>;
    metadata?: GraphGroupMetadata;
};
export declare type GraphJson = {
    caseSensitive?: boolean;
    properties?: PropertyMap;
    processes?: {
        [key: string]: GraphJsonNode;
    };
    connections?: Array<GraphJsonEdge>;
    inports?: {
        [key: string]: GraphExportedPort;
    };
    outports?: {
        [key: string]: GraphExportedPort;
    };
    groups?: Array<GraphGroup>;
};
