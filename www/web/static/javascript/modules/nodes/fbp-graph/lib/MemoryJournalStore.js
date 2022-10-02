"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JournalStore_1 = require("./JournalStore");
/**
 * In-memory journal storage
 *
 */
class MemoryJournalStore extends JournalStore_1.default {
    constructor(graph) {
        super(graph);
        this.transactions = [];
    }
    countTransactions() {
        return this.transactions.length;
    }
    putTransaction(revId, entries) {
        super.putTransaction(revId, entries);
        this.transactions[revId] = entries;
    }
    fetchTransaction(revId) {
        return this.transactions[revId];
    }
}
exports.default = MemoryJournalStore;
//# sourceMappingURL=MemoryJournalStore.js.map