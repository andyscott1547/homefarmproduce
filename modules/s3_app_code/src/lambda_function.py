'''Lambda function invoked by api gateway to return 200 ok status code'''

import json

def lambda_handler(event, context):
    '''main handier to send notifications'''
    print(event['body'])
    return {
        'statusCode': 200,
        'headers': {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "https://homefarmproduce.co.uk",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT"
        },
        'body': json.dumps('Hello from Lambda!')
    }

