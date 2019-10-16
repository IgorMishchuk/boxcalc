import json
import boxcalc
import sheetcalc

def lambda_handler(event, context):
    params = json.loads(event['body'])
    print("Params")
    print(params)
    #Determine if submission is for box parameter calculation or sheet parameter calculation
    if 'length' in params:
        print("boxcalc")
        reply = boxcalc.command(params)
    elif 'sheet_price' in params:
        print("sheetcalc")
        reply =  sheetcalc.command(params)
    else:
        reply = "Nothing happened"
    return {
        'statusCode': 200,
        'headers': {
            "Access-Control-Allow-Origin": "*"
        },
        'body': reply
    }
