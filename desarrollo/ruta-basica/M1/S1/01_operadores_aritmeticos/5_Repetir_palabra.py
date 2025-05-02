#5. Repetir palabra
#Pide al usuario una palabra y un número entero. Muestra la palabra repetida ese número de veces.

# Pedir ingresar una palabra y un número entero
palabra = (input("Ingrese una palabra: "))
repeticiones = int(input("cuántas veces quieres repertir la palabra (ingresa un número entero): "))

#multiplicación
resultado = (palabra + " ") * repeticiones

#Impresión de las palabras respetidas
print (resultado)