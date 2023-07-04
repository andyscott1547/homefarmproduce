# modules/serverless_app/main.tf

resource "aws_api_gateway_rest_api" "this" {
  name = var.name
}

resource "aws_api_gateway_deployment" "this" {
  rest_api_id = aws_api_gateway_rest_api.this.id

  triggers = {
    redeployment = sha1(jsonencode([
      aws_api_gateway_resource.this[*],
      aws_api_gateway_method.this[*],
      aws_api_gateway_integration.post,
      aws_api_gateway_method_response.post,
      aws_api_gateway_integration_response.post,
      module.mock_options
    ]))
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "this" {
  deployment_id = aws_api_gateway_deployment.this.id
  rest_api_id   = aws_api_gateway_rest_api.this.id
  stage_name    = var.stage_name
}

resource "aws_api_gateway_resource" "this" {
  for_each    = var.api_gateway_resources
  path_part   = each.value
  parent_id   = aws_api_gateway_rest_api.this.root_resource_id
  rest_api_id = aws_api_gateway_rest_api.this.id
}

resource "aws_api_gateway_method" "this" {
  for_each      = toset(var.contact_form_methods)
  rest_api_id   = aws_api_gateway_rest_api.this.id
  resource_id   = aws_api_gateway_resource.this["contact_form"].id
  http_method   = each.value
  authorization = var.authorization
}

resource "aws_api_gateway_integration" "post" {
  rest_api_id             = aws_api_gateway_rest_api.this.id
  resource_id             = aws_api_gateway_resource.this["contact_form"].id
  http_method             = aws_api_gateway_method.this["POST"].http_method
  type                    = "AWS_PROXY"
  integration_http_method = "ANY"
  uri                     = var.lambda_notifier_uri
}

resource "aws_api_gateway_method_response" "post" {
  rest_api_id = aws_api_gateway_rest_api.this.id
  resource_id = aws_api_gateway_integration.post.resource_id
  http_method = aws_api_gateway_integration.post.http_method
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

resource "aws_api_gateway_integration_response" "post" {
  rest_api_id = aws_api_gateway_rest_api.this.id
  resource_id = aws_api_gateway_integration.post.resource_id
  http_method = aws_api_gateway_integration.post.http_method
  status_code = aws_api_gateway_method_response.post.status_code
  response_parameters = {
    "method.response.header.Access-Control-Allow-Methods" : "'GET,OPTIONS,PUT,POST'",
    "method.response.header.Access-Control-Allow-Headers" : "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
    "method.response.header.Access-Control-Allow-Origin" : "'*'"
  }
}

# module "mock_post" {
#   source      = "../../modules/mock_api_endpoint"
#   api_id      = aws_api_gateway_rest_api.this.id
#   resource_id = aws_api_gateway_resource.this["contact_form"].id
#   method      = aws_api_gateway_method.this["POST"].http_method
# }

module "mock_options" {
  source      = "../../modules/mock_api_endpoint"
  api_id      = aws_api_gateway_rest_api.this.id
  resource_id = aws_api_gateway_resource.this["contact_form"].id
  method      = aws_api_gateway_method.this["OPTIONS"].http_method
}

