package shim

import (
	"github.com/MaienM/pulumi-zfs/provider/pkg/version"
	"github.com/hashicorp/terraform-plugin-sdk/v2/helper/schema"

	"github.com/MathiasPius/terraform-provider-zfs/internal/provider"
)

func NewProvider() *schema.Provider {
	return provider.New(version.Version)()
}
