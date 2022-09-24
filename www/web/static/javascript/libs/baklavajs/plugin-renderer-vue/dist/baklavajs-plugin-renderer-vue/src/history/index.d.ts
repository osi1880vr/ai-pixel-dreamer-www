import { ViewPlugin } from "../viewPlugin";
export default class History {
    maxSteps: number;
    private viewPlugin;
    private steps;
    private changeBySelf;
    private currentIndex;
    private activeTransaction;
    private transactionSteps;
    constructor(viewPlugin: ViewPlugin);
    startTransaction(): void;
    commitTransaction(): void;
    undo(): void;
    redo(): void;
    private addStep;
}
