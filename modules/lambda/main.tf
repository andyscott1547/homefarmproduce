
resource "aws_lambda_function" "this" {
  //checkov:skip=CKV_AWS_272
  //checkov:skip=CKV_AWS_116
  //checkov:skip=CKV_AWS_173
  //checkov:skip=CKV_AWS_117
  //checkov:skip=CKV_SECRET_13
  function_name     = var.lambda_name
  s3_bucket         = var.s3_bucket
  s3_key            = var.code_zip
  s3_object_version = var.code_zip_version

  handler                        = var.handler
  runtime                        = var.runtime
  role                           = aws_iam_role.this.arn
  memory_size                    = var.memory_size
  timeout                        = var.timeout
  reserved_concurrent_executions = var.reserved_concurrent_executions

  layers = [
    "arn:aws:lambda:eu-west-1:580247275435:layer:LambdaInsightsExtension:38"
  ]

  tracing_config {
    mode = "Active"
  }

  environment {
    variables = merge(local.default_env_vars, var.additional_env_vars)
  }
}

resource "aws_cloudwatch_log_group" "this" {
  //checkov:skip=CKV_AWS_158
  name              = "/aws/lambda/${var.lambda_name}"
  retention_in_days = var.log_retention_in_days
}
