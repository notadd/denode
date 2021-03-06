import { Injector } from './injector/index.ts';
let _currentInjector: Injector | undefined | null = undefined;
export function setCurrentInjector(injector: Injector | null | undefined): Injector | undefined | null {
    const former = _currentInjector;
    _currentInjector = injector;
    return former;
}
export function getCurrentInjector(): Injector | undefined | null {
    return _currentInjector;
}
