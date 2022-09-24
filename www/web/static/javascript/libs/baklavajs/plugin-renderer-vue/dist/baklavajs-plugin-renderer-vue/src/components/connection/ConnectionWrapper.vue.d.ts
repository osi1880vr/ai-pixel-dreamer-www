import { Vue } from "vue-property-decorator";
import { ITransferConnection, TemporaryConnectionState } from "../../../../baklavajs-core/types";
export default class ConnectionWrapper extends Vue {
    connection: ITransferConnection;
    d: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    };
    private resizeObserver;
    get state(): TemporaryConnectionState.NONE | TemporaryConnectionState.FORBIDDEN;
    mounted(): Promise<void>;
    beforeDestroy(): void;
    updateCoords(): void;
    private getPortCoordinates;
}
