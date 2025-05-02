#15. ¿Menor o igual?
#Pide dos números y muestra si el primero es menor o igual que el segundo.


#Ingresar números
num1 = int(input("Ingresa el primer número a comparar: "))
num2 = int(input("Ingresa el segundo número a comparar: "))

#comparación
primero_menor_igual = num1 <= num2

# Imprimir resultado true or false
print (f"¿El primer número es menor o igual al segundo número? {primero_menor_igual}")
