import { Vue } from "vue-property-decorator";
export default class TextOption extends Vue {
    get sanitized(): string;
    value: string;
}
