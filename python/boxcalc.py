from decimal import *

def command(params=None):
    box_type = params['box_type']
    L = int(params['length'])
    B = int(params['width'])
    H = int(params['height'])
    S = int(params['thickness'])
    KnifePrice = 300
    
    #Set G and K to zero if those params are not expected due to box type
    if params['gluing'] == "":
        G = 0
    else:
        G = int(params['gluing'])
    if params['valve'] == "":
        K = 0
    else:
        K = int(params['valve'])
    
    #Calculate parameters based on box type    
    if box_type == '0201':
        Bz=H+2*S+2*(S-1)+B+2*(S-1)
        if params['box_half'] == 'Whole':
            box_half = "Целый"
            Lz=L+(S-1)+B+2*(S-1)+L+2*(S-1)+G+B+S-1
            Lk=Decimal(4*Lz-G+6*Bz+2*B+200)/1000
        elif params['box_half'] == 'Half':
            box_half = "Половина"
            Lz=G+(S-1)+L+2*(S-1)+B+(S-1)
            Lk=Decimal(4*Lz-2*G+4*Bz+200)/1000
        else:
            print("Received unexpected parameter")
            return "Received unexpected parameter"
        ShtanzPrise=Lk*KnifePrice
        reply = "Тип ящика: " + box_type + "<br>\
        Подтип ящика: " + box_half + "<br>\
        Размер ящика: " + str(L) + "x" + str(B) + "x" + str(H) + " мм" + "<br>\
        Склейка: " + str(G) + "<br><br>\
        Размер заготовки: " + str(Lz) + "x" + str(Bz) + " мм" + "<br>\
        Стоимость штанцформы: " + str(Decimal("{:.2f}".format(ShtanzPrise))) + " грн"
    
    elif box_type == '0210':
        Lz=L+(S-1)+B+2*(S-1)+L+2*(S-1)+G+B+S-1
        Bz=H+2*S+(B+1)*2+2*K
        Lk=Decimal(6*H+8*B+4*K+2*Lz+4*L+4*B+2*B)/1000
        ShtanzPrise=Lk*KnifePrice
        reply = "Тип ящика: " + box_type + "<br>\
        Размер ящика: " + str(L) + "x" + str(B) + "x" + str(H) + " мм" + "<br>\
        Клапан: " + str(K) + "<br>\
        Склейка: " + str(G) + "<br><br>\
        Размер заготовки: " + str(Lz) + "x" + str(Bz) + " мм" + "<br>\
        Стоимость штанцформы: " + str(Decimal("{:.2f}".format(ShtanzPrise))) + " грн"
    
    elif box_type == '0215':
        Lz=L+(S-1)+B+2*(S-1)+L+2*(S-1)+G+B+S-1
        Bz=H+2*S+(B+1)+(0.75*B+1)+K
        Lk=Decimal(6*H+8*B+4*K+2*Lz+4*L+4*B+2*B)/1000
        ShtanzPrise=Lk*KnifePrice
        reply = "Тип ящика: " + box_type + "<br>\
        Размер ящика: " + str(L) + "x" + str(B) + "x" + str(H) + " мм" + "<br>\
        Клапан: " + str(K) + "<br>\
        Склейка: " + str(G) + "<br><br>\
        Размер заготовки: " + str(Lz) + "x" + str(intBz) + " мм" + "<br>\
        Стоимость штанцформы: " + str(Decimal("{:.2f}".format(ShtanzPrise))) + " грн"
    
    elif box_type == '0427':
        Lz=H+(S-1)+B+2*(S-1)+H+2*(S-1)+B+2*(S-1)+S+H+(S-1)+S
        Bz=L+6*S+2*(S-1)+2*(H+2*(S-1)+S+2*S+2*(S-1)+H+S+(S-1)+1.5*S)
        Lk=Decimal((4*(L+B+4*S)+2*Bz+16*S+2*B)+(2*Lz+8*B+6*H+0.8*B))/1000
        ShtanzPrise=Lk*KnifePrice
        reply = "Тип ящика: " + box_type + "<br>\
        Размер ящика: " + str(L) + "x" + str(B) + "x" + str(H) + " мм" + "<br><br>\
        Размер заготовки: " + str(Lz) + "x" + str(Bz) + " мм" + "<br>\
        Стоимость штанцформы: " + str(Decimal("{:.2f}".format(ShtanzPrise))) + " грн"
    
    elif box_type == '0471':
        Lz=H+S+(S-1)+B+2*(S-1)+H+2*S+2*(S-1)+B+S+2*(S-1)+H+(S-1)+2*S
        Bz=L+(4*S-1.5+B)*2
        Lk=Decimal((L+8*S+2*B)*2+4*Lz+4*S*4+(L+2*B+3*S)*2+(5*B)*2+B*0.8+2*(L+10*S-3))/1000
        ShtanzPrise=Lk*KnifePrice
        reply = "Тип ящика: " + box_type + "<br>\
        Размер ящика: " + str(L) + "x" + str(B) + "x" + str(H) + " мм" + "<br><br>\
        Размер заготовки: " + str(Lz) + "x" + str(Bz) + " мм" + "<br>\
        Стоимость штанцформы: " + str(Decimal("{:.2f}".format(ShtanzPrise))) + " грн"
    
    elif box_type == '7777':
        Lz=2*H+B+3*(S-2)+2*S
        Bz=2*L+2*B+40+8*(3*S-2)
        Lk=Decimal((2*L+2*B+40+8*(3*S-2))*5+(2*H+B+(3*S-2)+2*S)*6+(B+H)*2+250*6)/1000
        ShtanzPrise=Lk*KnifePrice
        reply = "Тип ящика: " + box_type + "<br>\
        Размер ящика: " + str(L) + "x" + str(B) + "x" + str(H) + " мм" + "<br><br>\
        Размер заготовки: " + str(Lz) + "x" + str(Bz) + " мм" + "<br>\
        Стоимость штанцформы: " + str(Decimal("{:.2f}".format(ShtanzPrise))) + " грн"
    
    else:
        print("Received some weird parameter. Check logs.")
        reply = "Received some weird parameter. Check logs."
    return reply