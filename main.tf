# main.tf 

module "serverless_app" {
  source              = "./modules/serverless_app"
  name                = var.name
  lambda_notifier_uri = module.lambda_notifications.lambda_invoke_arn
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

module "lambda_notifications" {
  source           = "./modules/lambda"
  lambda_name      = "${var.name}-notifier"
  api_gateway_arn  = module.serverless_app.api_gateway.execution_arn
  s3_bucket        = module.s3_app_code.bucket_name
  code_zip         = module.s3_app_code.code_zip
  code_zip_version = module.s3_app_code.code_zip_version
}

module "s3_app_code" {
  source                       = "./modules/s3_app_code"
  bucket_name                  = var.name
  access_logging_target_bucket = "502101718834-eu-west-1-access-logs"
}