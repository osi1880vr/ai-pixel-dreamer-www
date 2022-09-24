import { Vue } from "vue-property-decorator";
import { ITemporaryConnection, TemporaryConnectionState } from "../../../../baklavajs-core/types";
export default class TemporaryConnection extends Vue {
    connection: ITemporaryConnection;
    get status(): TemporaryConnectionState;
    get d(): {
        input: number[];
        output: number[];
    };
}
