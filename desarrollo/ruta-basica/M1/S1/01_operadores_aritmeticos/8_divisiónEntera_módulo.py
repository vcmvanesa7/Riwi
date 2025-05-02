#8. División entera y módulo
#Pide al usuario dos números y muestra la división entera (//) y el módulo (%) entre ellos.

#Pedir dos números al ususario
num1 = float(input("Ingresa el primer número a dividir: "))
num2 = float(input("Ingresa el segundo número a dividir: "))

#división y módulo
división_entera = num1 // num2
módulo = num1 % num2

#imprimir resultado de la división entera y el módulo
print (f"El resultado de la división entera es: {división_entera} y el módulo es: {módulo}")
