# locals.terraform

locals {
  name = "${data.aws_caller_identity.current.account_id}-${data.aws_region.current.name}-${var.bucket_name}-code"
}