// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("zfs");

/**
 * Can be used to prefix all ssh commands issued on the target host. For example, a command_prefix of 'sudo' can be used to
 * elevate privileges on the target host, assuming password-less is configured for the user
 */
export declare const commandPrefix: string | undefined;
Object.defineProperty(exports, "commandPrefix", {
    get() {
        return __config.get("commandPrefix");
    },
    enumerable: true,
});

export declare const host: string | undefined;
Object.defineProperty(exports, "host", {
    get() {
        return __config.get("host");
    },
    enumerable: true,
});

export declare const key: string | undefined;
Object.defineProperty(exports, "key", {
    get() {
        return __config.get("key");
    },
    enumerable: true,
});

export declare const keyPassphrase: string | undefined;
Object.defineProperty(exports, "keyPassphrase", {
    get() {
        return __config.get("keyPassphrase");
    },
    enumerable: true,
});

export declare const keyPath: string | undefined;
Object.defineProperty(exports, "keyPath", {
    get() {
        return __config.get("keyPath");
    },
    enumerable: true,
});

export declare const password: string | undefined;
Object.defineProperty(exports, "password", {
    get() {
        return __config.get("password");
    },
    enumerable: true,
});

export declare const port: string | undefined;
Object.defineProperty(exports, "port", {
    get() {
        return __config.get("port");
    },
    enumerable: true,
});

export declare const user: string | undefined;
Object.defineProperty(exports, "user", {
    get() {
        return __config.get("user");
    },
    enumerable: true,
});
