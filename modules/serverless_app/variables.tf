# modules/api_gateway_resource/variables.tf

variable "name" {
  type        = string
  description = "value for the name"
}

variable "api_gateway_resources" {
  type        = map(string)
  description = "values for the api_gateway_resources"
}

variable "contact_form_methods" {
  type        = list(string)
  description = "values for the contact_form_methods"
}

variable "authorization" {
  type        = string
  description = "value for the authorization"
  default     = "NONE"
}

variable "stage_name" {
  type        = string
  description = "value for the stage_name"
  default     = "dev"
}