---
title: Zfs Installation & Configuration
meta_desc: Information on how to install the Zfs provider.
layout: installation
---

## Installation

The Pulumi Zfs provider is available as a package in all Pulumi languages:

* JavaScript/TypeScript: [`@maienm/pulumi-zfs`](https://www.npmjs.com/package/@maienm/pulumi-zfs)
* Python: [`pulumi_zfs`](https://pypi.org/project/pulumi_zfs/)
* Go: [`github.com/MaienM/pulumi-zfs/sdk/go/zfs`](https://github.com/MaienM/pulumi-zfs/sdk/go/zfs)
* .NET: [`MaienM.Zfs`](https://www.nuget.org/packages/MaienM.Zfs)

### Provider Binary

The Zfs provider binary is a third party binary. It can be installed using the `pulumi plugin` command.

```bash
pulumi plugin install resource zfs
```

Replace the version string with your desired version.
