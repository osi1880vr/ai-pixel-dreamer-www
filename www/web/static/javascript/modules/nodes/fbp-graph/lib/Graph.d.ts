/// <reference types="node" />
import { EventEmitter } from 'events';
import { JournalMetadata, GraphOptions, PropertyMap, GraphNode, GraphNodeMetadata, GraphNodeID, GraphEdge, GraphEdgeMetadata, GraphIIP, GraphIIPMetadata, GraphExportedPort, GraphGroup, GraphGroupMetadata, GraphJson } from './Types';
declare class Graph extends EventEmitter {
    name: string;
    properties: PropertyMap;
    nodes: Array<GraphNode>;
    edges: Array<GraphEdge>;
    initializers: Array<GraphIIP>;
    inports: {
        [key: string]: GraphExportedPort;
    };
    outports: {
        [key: string]: GraphExportedPort;
    };
    groups: Array<GraphGroup>;
    transaction: {
        id: string | null;
        depth: number;
    };
    caseSensitive: boolean;
    constructor(name?: string, options?: GraphOptions);
    getPortName(port?: string): string;
    startTransaction(id: string, metadata?: JournalMetadata): Graph;
    endTransaction(id: string, metadata?: JournalMetadata): Graph;
    checkTransactionStart(): Graph;
    checkTransactionEnd(): Graph;
    setProperties(properties: PropertyMap): Graph;
    addInport(publicPort: string, nodeKey: GraphNodeID, portKey: string, metadata?: GraphNodeMetadata): Graph;
    removeInport(publicPort: string): Graph;
    renameInport(oldPort: string, newPort: string): Graph;
    setInportMetadata(publicPort: string, metadata: GraphNodeMetadata): Graph;
    addOutport(publicPort: string, nodeKey: GraphNodeID, portKey: string, metadata?: GraphNodeMetadata): Graph;
    removeOutport(publicPort: string): Graph;
    renameOutport(oldPort: string, newPort: string): Graph;
    setOutportMetadata(publicPort: string, metadata: GraphNodeMetadata): Graph;
    addGroup(group: string, nodes: Array<GraphNodeID>, metadata: GraphGroupMetadata): Graph;
    renameGroup(oldName: string, newName: string): Graph;
    removeGroup(groupName: string): Graph;
    setGroupMetadata(groupName: string, metadata: GraphGroupMetadata): Graph;
    addNode(id: GraphNodeID, component: string, metadata?: GraphNodeMetadata): Graph;
    removeNode(id: GraphNodeID): Graph;
    getNode(id: GraphNodeID): GraphNode | null;
    renameNode(oldId: GraphNodeID, newId: GraphNodeID): Graph;
    setNodeMetadata(id: GraphNodeID, metadata: GraphNodeMetadata): Graph;
    addEdge(outNode: GraphNodeID, outPort: string, inNode: GraphNodeID, inPort: string, metadata?: GraphEdgeMetadata): Graph;
    addEdgeIndex(outNode: GraphNodeID, outPort: string, outIndex: number | undefined, inNode: GraphNodeID, inPort: string, inIndex: number | undefined, metadata?: GraphEdgeMetadata): Graph;
    removeEdge(node: GraphNodeID, port: string, node2: GraphNodeID, port2: string): Graph;
    getEdge(node: GraphNodeID, port: string, node2: GraphNodeID, port2: string): GraphEdge | null;
    setEdgeMetadata(node: GraphNodeID, port: string, node2: GraphNodeID, port2: string, metadata: GraphEdgeMetadata): Graph;
    addInitial(data: any, node: GraphNodeID, port: string, metadata?: GraphIIPMetadata): Graph;
    addInitialIndex(data: any, node: GraphNodeID, port: string, index: number, metadata?: GraphIIPMetadata): Graph;
    addGraphInitial(data: any, node: string, metadata?: GraphIIPMetadata): Graph;
    addGraphInitialIndex(data: any, node: string, index: number, metadata?: GraphIIPMetadata): Graph;
    removeInitial(node: GraphNodeID, port: string): Graph;
    removeGraphInitial(node: string): Graph;
    toDOT(): string;
    toYUML(): string;
    toJSON(): GraphJson;
    save(file: string): Promise<string>;
    save(file: string, callback: (err: Error | null, filename?: string) => void): void;
}
declare function createGraph(name: string, options: GraphOptions): Graph;
export interface GraphLoadingCallback {
    (err: Error | null, graph?: Graph): void;
}
declare function loadJSON(passedDefinition: string | GraphJson): Promise<Graph>;
declare function loadJSON(passedDefinition: string | GraphJson, callback: GraphLoadingCallback, metadata?: JournalMetadata): void;
declare function loadFBP(fbpData: string): Promise<Graph>;
declare function loadFBP(fbpData: string, callback: GraphLoadingCallback, metadata?: JournalMetadata): void;
declare function loadFile(file: string): Promise<Graph>;
declare function loadFile(file: string, callback: GraphLoadingCallback, metadata?: JournalMetadata, caseSensitive?: boolean): void;
declare function mergeResolveTheirsNaive(base: Graph, to: Graph): void;
declare function equivalent(a: Graph, b: Graph): boolean;
export { Graph, createGraph, loadJSON, loadFBP, loadFile, equivalent, mergeResolveTheirsNaive as mergeResolveTheirs, };
