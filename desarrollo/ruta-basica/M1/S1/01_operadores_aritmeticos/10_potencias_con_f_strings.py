#10. Potencias con f-strings
#Pide un número entero y muestra el número elevado a la 2 y a la 3 usando f-strings.

#pedir ingresar número
print ("Número ^2 y ^3: ")
número = int(input("Ingresa un número entero: "))

#operación  número ^ 2 y ^ 3
número_elevado2 = número ** 2
número_elevado3 = número ** 3

#Imprimir resultado con f-strings
print(f"el resultado del número elevado a la 2 es: {número_elevado2} y el resultado del número elevado a la 3 es: {número_elevado3}")
