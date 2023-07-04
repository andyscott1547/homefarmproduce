'''Lambda function invoked by api gateway to return 200 ok status code'''
import boto3
import os
import re
import logging
import json

ses_client = boto3.client('ses')

log_level = os.environ.get('LOGGING_LEVEL', logging.INFO)

logger = logging.getLogger(__name__)
logger.setLevel(log_level)

def send_email(name, email, message):
    '''Sends email to user'''
    email_regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')
    if re.fullmatch(email_regex, email):
        response = ses_client.send_templated_email(
            Source='notification@homefarmproduce.co.uk',
            Destination={'ToAddresses': [
                'homefarmproduceretford@gmail.com',
                'andyscott1547@hotmail.com'
            ]},
            Template='homefarmproduce-notification',
            TemplateData='{"name":"'+name+'", "email":"'+email+'", "message":"'+message+'"}',
        )
        logger.info(f"Sending email to {name}:{response}")
    else:
        response = f"{name} is not a valid email address"
        logger.info(f"{response}")
    return f"{response}"

def lambda_handler(event, context):
    '''main handier to send notifications'''
    print(event['body'])

    json_body = json.loads(event['body'])

    send_email(json_body['name'], json_body['email'], json_body['message'])

    return {
        'statusCode': 200,
        'headers': {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "https://homefarmproduce.co.uk",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT"
        },
        'body': json.dumps('Form Submitted')
    }

