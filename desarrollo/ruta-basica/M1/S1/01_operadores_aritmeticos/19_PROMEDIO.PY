#19. Promedio
#Pide tres números, calcula el promedio y muestra el resultado.

#Ingresar números
num1 = float(input("Ingresa el primer número: "))
num2 = float(input("Ingresa el segundo número: "))
num3 = float(input("Ingresa el tercer número: "))

#Sacar el promedio y redondear los decimales con 'round'
promedio = (num1 + num2 + num3) / 3
redondeado = round(promedio,2)

#Imprimir promedio
print (f"El promedio de los tres números es: {redondeado}")