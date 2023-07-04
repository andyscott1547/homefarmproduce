data "aws_iam_policy_document" "lambda_notifications" {
  
  statement {
    sid    = "AllowSESsendemail"
    effect = "Allow"

    actions = [
      "SES:SendTemplatedEmail"
    ]

    resources = ["*"]
  }
}