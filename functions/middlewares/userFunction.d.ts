import { CallableContext } from "firebase-functions/lib/providers/https";
import { HttpsFunction, Runnable } from "firebase-functions";

export declare function userFunction(callback: (data: any, context: CallableContext) => any | Promise<any>): HttpsFunction & Runnable<any>;