output "bucket_name" {
  value       = aws_s3_bucket.this.bucket
  description = "Name of bucket created for terraform state"
}

output "bucket_arn" {
  value       = aws_s3_bucket.this.arn
  description = "ARN of bucket created for terraform state"
}

output "code_zip" {
  value       = aws_s3_object.object.id
  description = "Object name that was zipped and uploaded to S3"
}

output "code_zip_version" {
  value       = aws_s3_object.object.version_id
  description = "Object version that was zipped and uploaded to S3"
}