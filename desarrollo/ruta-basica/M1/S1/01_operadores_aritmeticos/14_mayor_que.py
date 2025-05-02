#14. ¿Mayor que?
#Pide dos números y muestra si el primero es mayor que el segundo.

#Ingresar números
num1 = int(input("Ingresa el primer número a comparar: "))
num2 = int(input("Ingresa el segundo número a comparar: "))

#comparación
primero_mayor = num1 > num2

# Imprimir resultado true or false
print (f"¿El primer número es mayor que el segundo número? {primero_mayor}")
