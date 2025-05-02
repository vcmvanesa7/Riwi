Temperatura = float(input("Ingrese temperatura:"))
Escala = input("Es Fahrenheit(F) o es Celsius (C)?:").lower()

if Escala == "f":
    celcius = (Temperatura - 32) *5/9
    print (celcius)

elif Escala == "c":
    Fahrenheit = Temperatura * 1.8 + 32
    print (Fahrenheit) 

else:
    print ("Escala Incorrecta")
