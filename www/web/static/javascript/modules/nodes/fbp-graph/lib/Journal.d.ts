/// <reference types="node" />
import { EventEmitter } from 'events';
import { Graph } from './Graph';
import JournalStore from './JournalStore';
import MemoryJournalStore from './MemoryJournalStore';
import { TransactionEntry, JournalMetadata } from './Types';
declare class Journal extends EventEmitter {
    graph: Graph;
    entries: Array<TransactionEntry>;
    subscribed: boolean;
    store: JournalStore;
    currentRevision: number;
    constructor(graph: Graph, metadata?: JournalMetadata, store?: JournalStore);
    startTransaction(id: string, meta: JournalMetadata): void;
    endTransaction(id: string, meta: JournalMetadata): void;
    appendCommand(cmd: string, args: object, rev?: number | null): void;
    executeEntry(entry: TransactionEntry): void;
    executeEntryInversed(entry: TransactionEntry): void;
    moveToRevision(revId: number): void;
    undo(): void;
    canUndo(): boolean;
    redo(): void;
    canRedo(): boolean;
    toPrettyString(startRev?: number, endRevParam?: number): string;
    toJSON(startRev?: number, endRevParam?: null): string[];
    save(file: string): Promise<void>;
    save(file: string, callback: (err: NodeJS.ErrnoException | null) => void): void;
}
export { Journal, JournalStore, MemoryJournalStore, };
