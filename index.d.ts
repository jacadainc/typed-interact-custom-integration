import { ServerResponse } from "http";

declare const context: IContext;

declare interface IContext {
    consoleOut: string[];
    res: ServerResponse;
    params: object;
    variables: object;
    script: IContextifyScript;
    trace(message: string): void;
    complete(status: number, data: any): void;
}

declare interface IContextifyScript { }