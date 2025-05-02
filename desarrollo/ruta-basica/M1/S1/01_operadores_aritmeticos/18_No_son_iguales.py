#18. No son iguales
#Pide dos números y muestra si el primero no es igual al segundo (usar not y ==).

#Ingresar números
num1 = int(input("Ingresa el primer número a comparar: "))
num2 = int(input("Ingresa el segundo número a comparar: "))

#Validar si el primero no es igual al segundo (usar not y ==).
no_son_iguales =  not(num1 == num2)

#imprimir resultado
print (f"¿Los dos números NO son iguales? {no_son_iguales}")