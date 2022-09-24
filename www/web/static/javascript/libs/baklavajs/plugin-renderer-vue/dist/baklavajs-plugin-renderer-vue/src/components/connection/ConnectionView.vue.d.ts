import { Vue } from "vue-property-decorator";
import { TemporaryConnectionState, ITransferConnection, ITemporaryConnection } from "../../../../baklavajs-core/types";
import { ViewPlugin } from "../../viewPlugin";
export default class Connection extends Vue {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    state: TemporaryConnectionState;
    isTemporary: boolean;
    connection: ITransferConnection | ITemporaryConnection;
    plugin: ViewPlugin;
    mounted(): void;
    updated(): void;
    get d(): string;
    get classes(): {
        connection: boolean;
        "--temporary": boolean;
        "--allowed": boolean;
        "--forbidden": boolean;
    };
    transform(x: number, y: number): number[];
}
