import loadable, {DefaultComponent, LoadableClassComponent, LoadableComponent, Options, OptionsWithoutResolver, OptionsWithResolver} from "@loadable/component";
import {ComponentClass, ComponentProps} from "react";
export function LoadedAleCore<Props, Module = DefaultComponent<Props>>(loadFn: (props: Props) => Promise<Module>, options: OptionsWithResolver<Props, Module>): LoadableComponent<Props>;
export function LoadedAleCore<Component extends ComponentClass<any>>(loadFn: (props: ComponentProps<Component>) => Promise<Component | {default: Component}>, options?: Options<ComponentProps<Component>, Component>): LoadableClassComponent<Component>;
export function LoadedAleCore<Props>(loadFn: (props: Props) => Promise<DefaultComponent<Props>>, options?: OptionsWithoutResolver<Props>): LoadableComponent<Props>;
export function LoadedAleCore(func: Parameters<typeof LoadedAleCore>[0], options: Parameters<typeof LoadedAleCore>[1]) {
    return loadable(func, {
        fallback: <div>Loading...</div>,
        ...(options || {})
    });
}
