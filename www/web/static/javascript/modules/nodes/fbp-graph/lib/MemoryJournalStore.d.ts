import JournalStore from './JournalStore';
import { Graph } from './Graph';
import { TransactionEntry } from './Types';
/**
 * In-memory journal storage
 *
 */
export default class MemoryJournalStore extends JournalStore {
    transactions: Array<Array<TransactionEntry>>;
    constructor(graph: Graph);
    countTransactions(): number;
    putTransaction(revId: number, entries: Array<TransactionEntry>): void;
    fetchTransaction(revId: number): Array<TransactionEntry>;
}
