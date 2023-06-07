// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * zfs dataset resource.
 */
export class Dataset extends pulumi.CustomResource {
    /**
     * Get an existing Dataset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasetState, opts?: pulumi.CustomResourceOptions): Dataset {
        return new Dataset(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zfs:index/dataset:Dataset';

    /**
     * Returns true if the given object is an instance of Dataset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Dataset {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Dataset.__pulumiType;
    }

    /**
     * Set group of the mountpoint. Must be a valid gid
     */
    public readonly gid!: pulumi.Output<number | undefined>;
    /**
     * Set group of the mountpoint. Must be a valid group name
     */
    public readonly group!: pulumi.Output<string | undefined>;
    /**
     * Mountpoint of the dataset.
     */
    public readonly mountpoint!: pulumi.Output<string | undefined>;
    /**
     * Name of the ZFS dataset.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Set owner of the mountpoint. Must be a valid username
     */
    public readonly owner!: pulumi.Output<string | undefined>;
    /**
     * Formatted versions of all zfs properties.
     */
    public /*out*/ readonly properties!: pulumi.Output<{[key: string]: any}>;
    /**
     * Propert(y/ies) to set
     */
    public readonly property!: pulumi.Output<outputs.DatasetProperty[] | undefined>;
    /**
     * Which properties to manage. "defined" means only manage the properties explicitly defined in the resource. This is the
     * default. "native" means manage all native zfs properties, but leave user properties alone (see man zfsprops for more
     * info about these types of properties). This means all properties that aren't defined in the terraform resource but that
     * are explicitly overriden on the zfs resource will be set back to inherit from their parent/the default. "all" is like
     * "native", but also includes user properties. Be careful when removing/altering properties you don't recognize as some
     * tools might use user properties to track information important for that tool to work properly with a given resource.
     * Note that some properties don't have a default that they can be compared/reset to (notably most of the zpool
     * properties). These properties will only ever be managed when explicitly defined, and will be left as they are when they
     * stop being defined.
     */
    public readonly propertyMode!: pulumi.Output<string | undefined>;
    /**
     * Parseable versions of all zfs properties.
     */
    public /*out*/ readonly rawProperties!: pulumi.Output<{[key: string]: any}>;
    /**
     * Set owner of the mountpoint. Must be a valid uid
     */
    public readonly uid!: pulumi.Output<number | undefined>;

    /**
     * Create a Dataset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DatasetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatasetArgs | DatasetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatasetState | undefined;
            resourceInputs["gid"] = state ? state.gid : undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["mountpoint"] = state ? state.mountpoint : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["properties"] = state ? state.properties : undefined;
            resourceInputs["property"] = state ? state.property : undefined;
            resourceInputs["propertyMode"] = state ? state.propertyMode : undefined;
            resourceInputs["rawProperties"] = state ? state.rawProperties : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
        } else {
            const args = argsOrState as DatasetArgs | undefined;
            resourceInputs["gid"] = args ? args.gid : undefined;
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["mountpoint"] = args ? args.mountpoint : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["owner"] = args ? args.owner : undefined;
            resourceInputs["property"] = args ? args.property : undefined;
            resourceInputs["propertyMode"] = args ? args.propertyMode : undefined;
            resourceInputs["uid"] = args ? args.uid : undefined;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["rawProperties"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Dataset.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Dataset resources.
 */
export interface DatasetState {
    /**
     * Set group of the mountpoint. Must be a valid gid
     */
    gid?: pulumi.Input<number>;
    /**
     * Set group of the mountpoint. Must be a valid group name
     */
    group?: pulumi.Input<string>;
    /**
     * Mountpoint of the dataset.
     */
    mountpoint?: pulumi.Input<string>;
    /**
     * Name of the ZFS dataset.
     */
    name?: pulumi.Input<string>;
    /**
     * Set owner of the mountpoint. Must be a valid username
     */
    owner?: pulumi.Input<string>;
    /**
     * Formatted versions of all zfs properties.
     */
    properties?: pulumi.Input<{[key: string]: any}>;
    /**
     * Propert(y/ies) to set
     */
    property?: pulumi.Input<pulumi.Input<inputs.DatasetProperty>[]>;
    /**
     * Which properties to manage. "defined" means only manage the properties explicitly defined in the resource. This is the
     * default. "native" means manage all native zfs properties, but leave user properties alone (see man zfsprops for more
     * info about these types of properties). This means all properties that aren't defined in the terraform resource but that
     * are explicitly overriden on the zfs resource will be set back to inherit from their parent/the default. "all" is like
     * "native", but also includes user properties. Be careful when removing/altering properties you don't recognize as some
     * tools might use user properties to track information important for that tool to work properly with a given resource.
     * Note that some properties don't have a default that they can be compared/reset to (notably most of the zpool
     * properties). These properties will only ever be managed when explicitly defined, and will be left as they are when they
     * stop being defined.
     */
    propertyMode?: pulumi.Input<string>;
    /**
     * Parseable versions of all zfs properties.
     */
    rawProperties?: pulumi.Input<{[key: string]: any}>;
    /**
     * Set owner of the mountpoint. Must be a valid uid
     */
    uid?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Dataset resource.
 */
export interface DatasetArgs {
    /**
     * Set group of the mountpoint. Must be a valid gid
     */
    gid?: pulumi.Input<number>;
    /**
     * Set group of the mountpoint. Must be a valid group name
     */
    group?: pulumi.Input<string>;
    /**
     * Mountpoint of the dataset.
     */
    mountpoint?: pulumi.Input<string>;
    /**
     * Name of the ZFS dataset.
     */
    name?: pulumi.Input<string>;
    /**
     * Set owner of the mountpoint. Must be a valid username
     */
    owner?: pulumi.Input<string>;
    /**
     * Propert(y/ies) to set
     */
    property?: pulumi.Input<pulumi.Input<inputs.DatasetProperty>[]>;
    /**
     * Which properties to manage. "defined" means only manage the properties explicitly defined in the resource. This is the
     * default. "native" means manage all native zfs properties, but leave user properties alone (see man zfsprops for more
     * info about these types of properties). This means all properties that aren't defined in the terraform resource but that
     * are explicitly overriden on the zfs resource will be set back to inherit from their parent/the default. "all" is like
     * "native", but also includes user properties. Be careful when removing/altering properties you don't recognize as some
     * tools might use user properties to track information important for that tool to work properly with a given resource.
     * Note that some properties don't have a default that they can be compared/reset to (notably most of the zpool
     * properties). These properties will only ever be managed when explicitly defined, and will be left as they are when they
     * stop being defined.
     */
    propertyMode?: pulumi.Input<string>;
    /**
     * Set owner of the mountpoint. Must be a valid uid
     */
    uid?: pulumi.Input<number>;
}