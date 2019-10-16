from decimal import *

def command(params=None):
    #Set max number of digits
    getcontext().prec = 8
    box_type = params['box_type']
    box_half = params['box_half']
    sheet_price = int(params['sheet_price'])
    boxes_per_sheet = int(params['boxes_per_sheet'])
    sheet_size = int(params['sheet_size'])
    carton_type = params['carton_type']
    
    #Prevent division by zero
    if boxes_per_sheet == 0:
        return "Количество ящиков на листе должно быть > 0"
        
    #Calculate sheet parameters
    if box_type == "0201" and box_half == "Half":
        box_cost = Decimal(sheet_price)/Decimal(boxes_per_sheet) + 2
    else:
        box_cost = Decimal(sheet_price)/Decimal(boxes_per_sheet) + 1
        
    reply = "Размер листа: " + str(sheet_size) + " мм<br>\
    Стоимость листа: " + str(sheet_price) + " грн<br>\
    Количество ящиков на листе: " + str(boxes_per_sheet) + "<br>\
    Тип картона: " + carton_type + "<br><br>\
    Стоимость ящика: " + str(Decimal("{:.2f}".format(box_cost))) + " грн" #Format output to have only two decimals
    return reply