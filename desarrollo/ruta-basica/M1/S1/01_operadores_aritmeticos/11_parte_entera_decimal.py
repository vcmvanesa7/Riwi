# 11. Parte entera de un decimal
#Pide al usuario un número decimal y muestra solo la parte entera.

#pedir ingresar número decimal
numero = float(input("Ingresa un número decimal: "))

#Hacer división entera por 1, para obtener el entero del  número ingresado.
entero = numero // 1

#imprimir parte entera
print (f"El entero del número decimal es: {entero}")
