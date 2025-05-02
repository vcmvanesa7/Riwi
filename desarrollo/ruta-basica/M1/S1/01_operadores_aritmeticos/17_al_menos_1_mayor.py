#17. Al menos uno mayor que 10
#Pide dos números y muestra si al menos uno es mayor que 10 (usar or).

#Ingresar números
num1 = int(input("Ingresa el primer número a comparar: "))
num2 = int(input("Ingresa el segundo número a comparar: "))

#comparación
almenos1_mayor10 = num1 > 10 or num2 > 10

#imprimir resultado
print (f"¿Al menos un número es mayor que 10? {almenos1_mayor10}")


