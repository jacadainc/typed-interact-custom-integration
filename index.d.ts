import { ServerResponse } from "http";

declare global {
    const context: IContext;

    interface IContext {
        consoleOut: string[];
        res: ServerResponse;
        params: any;
        variables: any;
        script: IContextifyScript;
        trace(message: string): void;
        complete(status: number, data: any): void;
    }
    
    interface IContextifyScript { }
}