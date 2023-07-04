resource "aws_ses_template" "notification" {
  name    = "${var.name}-notification"
  subject = "Home Farm Produce - Customer Enquiry"
  html    = file("${path.module}/templates/email.html")
}