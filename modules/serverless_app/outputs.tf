# modules/serverless_app/outputs.tf

output "api_gateway" {
  value = aws_api_gateway_rest_api.this
}