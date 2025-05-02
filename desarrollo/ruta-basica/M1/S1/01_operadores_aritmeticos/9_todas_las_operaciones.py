#9. Todas las operaciones
#Pide al usuario dos números y muestra: suma, resta, multiplicación y división, separadas por coma.

#Pedir dos números al ususario
print ("Para conocer la suma, resta, multiplicación y división de dos números, ingresa dos números: ")
num1 = float(input("Ingresa el primer número  "))
num2 = float(input("Ingresa el segundo número  "))

#Realizar operaciones
suma = num1 + num2
resta = num1 - num2
multiplicación = num1 * num2
división = num1 / num2

#Imprimir resultados de la operación
print(f"El resultado de la suma es {suma}, el de la resta es: {resta}, el de la multiplicación es: {multiplicación}, y el de la división es: {división}")
