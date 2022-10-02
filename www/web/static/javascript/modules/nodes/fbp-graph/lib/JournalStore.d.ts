/// <reference types="node" />
import { EventEmitter } from 'events';
import { Graph } from './Graph';
import { TransactionEntry } from './Types';
/**
 * General interface for journal storage
 */
export default abstract class JournalStore extends EventEmitter {
    graph: Graph;
    lastRevision: number;
    constructor(graph: Graph);
    countTransactions(): number;
    putTransaction(revId: number, entries: Array<TransactionEntry>): void;
    fetchTransaction(revId: number): Array<TransactionEntry>;
}
