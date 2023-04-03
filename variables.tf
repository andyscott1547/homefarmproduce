# variables

variable "region" {
  type        = string
  description = "value for the region"
  default     = "eu-west-1"
}

variable "tags" {
  type        = map(string)
  description = "value for the tags"
  default     = {}
}

variable "name" {
  type = string
  description = "value for the name"
}

variable "domain_name" {
  type = string
  description = "value for the domain_name"
}