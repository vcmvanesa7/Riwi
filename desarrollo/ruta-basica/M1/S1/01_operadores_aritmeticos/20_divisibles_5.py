#20. Divisible por 5
#Pide un número entero y muestra si es divisible entre 5 (usar % y ==).

# Igresar número
print ("Número divisible entre 5: ")
numero = int(input("Escribe un número entero: "))

# Crear una lista con los dos posibles mensajes
mensajes = ["No es divisible entre 5", "¡Sí es divisible entre 5!"]

# El resultado de (numero % 5 == 0) es True o False, que equivale a 1 o 0
# Lo usamos como índice de la lista
print(mensajes[numero % 5 == 0])


