import { IBaklavaEvent, IHook } from "../types";
export declare type TokenType = object | symbol;
export declare type Listener<T> = (ev: T) => any;
export declare type HookTap<I, O> = (i: I) => O;
/** Main event class for Baklava */
export declare class BaklavaEvent<T> implements IBaklavaEvent<T> {
    protected listeners: Map<TokenType, Listener<T>>;
    /**
     * Subscribe to the event
     * @param token A token that can be used to unsubscribe from the event later on
     * @param listener A callback that will be invoked when the event occurs
     */
    addListener(token: TokenType, listener: Listener<T>): void;
    /**
     * Remove a listener
     * @param token The token that was specified when subscribing to the listener.
     * An invalid token does not result in an error.
     */
    removeListener(token: TokenType): void;
    /**
     * Invoke all listeners
     * @param data The data to invoke the listeners with.
     */
    emit(data: T): void;
}
/** Extension for the [[BaklavaEvent]] class. A listener can return `false` to prevent
 * this event from happening.
 */
export declare class PreventableBaklavaEvent<T> extends BaklavaEvent<T> implements IBaklavaEvent<T> {
    /**
     * Invoke all listeners.
     * @param data The data to invoke all listeners with
     * @returns `true` when one of the listeners requested to prevent the event, otherwise `false`
     */
    emit(data: T): boolean;
}
/** Base class for hooks in Baklava */
export declare abstract class Hook<I, O = I> implements IHook<I, O> {
    private tapMap;
    protected taps: Array<HookTap<I, O>>;
    tap(token: TokenType, tapFn: HookTap<I, O>): void;
    untap(token: TokenType): void;
    abstract execute(data: I): O;
}
/** This class will run the taps one after each other and pass the data from every tap to another. */
export declare class SequentialHook<T> extends Hook<T> {
    execute(data: T): T;
}
