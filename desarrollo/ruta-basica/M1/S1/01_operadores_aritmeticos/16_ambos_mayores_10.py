#16. Ambos mayores que 10
#Pide dos números y muestra si ambos son mayores que 10 (usar and).

#Ingresar números
num1 = int(input("Ingresa el primer número a comparar: "))
num2 = int(input("Ingresa el segundo número a comparar: "))

#comparación
ambos_mayores = num1 > 10 and num2 >10

#imprimir resultado
print (f"¿Ambos números son mayores que 10? {ambos_mayores}")