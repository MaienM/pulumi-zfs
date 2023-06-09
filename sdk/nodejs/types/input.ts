// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface DatasetProperty {
    name: pulumi.Input<string>;
    value: pulumi.Input<string>;
}

export interface PoolDevice {
    path: pulumi.Input<string>;
}

export interface PoolMirror {
    devices: pulumi.Input<pulumi.Input<inputs.PoolMirrorDevice>[]>;
}

export interface PoolMirrorDevice {
    path: pulumi.Input<string>;
}

export interface PoolProperty {
    name: pulumi.Input<string>;
    value: pulumi.Input<string>;
}
