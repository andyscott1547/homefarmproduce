resource "aws_api_gateway_method_response" "this" {
  rest_api_id = var.api_id
  resource_id = var.resource_id
  http_method = var.method
  status_code = "200"
  response_parameters = {
    "method.response.header.Access-Control-Allow-Methods" : false,
    "method.response.header.Access-Control-Allow-Headers" : false,
    "method.response.header.Access-Control-Allow-Origin" : false
  }
  response_models = {
    "application/json" = "Empty"
  }
}

resource "aws_api_gateway_integration" "this" {
  rest_api_id      = var.api_id
  resource_id      = var.resource_id
  http_method      = var.method
  type             = "MOCK"
  content_handling = "CONVERT_TO_TEXT"

  timeout_milliseconds = 29000
  passthrough_behavior = "WHEN_NO_MATCH"

  request_templates = {
    "application/json" = <<EOF
{ "statusCode": 200 }
EOF
  }
}

resource "aws_api_gateway_integration_response" "this" {
  rest_api_id = var.api_id
  resource_id = var.resource_id
  http_method = var.method
  status_code = aws_api_gateway_method_response.this.status_code
  response_parameters = {
    "method.response.header.Access-Control-Allow-Methods" : "'GET,OPTIONS,PUT'",
    "method.response.header.Access-Control-Allow-Headers" : "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
    "method.response.header.Access-Control-Allow-Origin" : "'*'"
  }
  depends_on = [
    aws_api_gateway_integration.this
  ]
}