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
