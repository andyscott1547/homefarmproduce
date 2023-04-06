# main.tf 

module "serverless_app" {
  source = "./modules/serverless_app"
  name   = var.name
  api_gateway_resources = {
    contact_form = "contact"
  }
  contact_form_methods = [
    "POST",
    "OPTIONS"
  ]
}

module "s3_cloudfront" {
  providers = {
    aws.global = aws.global
  }
  source                       = "./modules/s3_cloudfront"
  name                         = var.name
  domain_name                  = var.domain_name
  access_logging_target_bucket = "502101718834-eu-west-1-access-logs"
}