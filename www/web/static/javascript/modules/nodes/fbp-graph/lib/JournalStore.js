"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
/**
 * General interface for journal storage
 */
class JournalStore extends events_1.EventEmitter {
    constructor(graph) {
        super();
        this.graph = graph;
        this.lastRevision = 0;
    }
    countTransactions() {
        return 0;
    }
    putTransaction(revId, entries) {
        if (revId > this.lastRevision) {
            this.lastRevision = revId;
        }
        this.emit('transaction', revId, entries);
    }
    fetchTransaction(revId) {
        return [];
    }
}
exports.default = JournalStore;
//# sourceMappingURL=JournalStore.js.map