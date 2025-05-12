def sumar():
    num1 = float(input("Ingresa el primer número a sumar: "))
    num2 = float(input("Ingresa el segundo número a sumar: "))
    resultado = num1 + num2
    print (f"---------------------------------------\nLa suma entre {num1} y {num2} es: {resultado}")
    
def restar():
    num1 =float(input("Ingresa el primer número a restar: "))
    num2 = float(input("Ingresa el segundo número a restar: "))
    resultado = num1 - num2
    print (f"---------------------------------------\nLa resta entre {num1} y {num2} es: {resultado}")


def multiplicar():
    num1 = float(input("Ingresa el primer número a multiplicar: "))
    num2 = float(input("Ingresa el segundo número a multiplicar: "))
    resultado = num1 * num2
    print (f"---------------------------------------\nLa multiplicación entre {num1} y {num2} es: {resultado}")

def dividir():
    num1 = float(input("Ingresa el primer número a dividir: "))
    num2 = float(input("Ingresa el segundo número a dividir: "))
    if num2 != 0:
        resultado = num1 / num2
        print(f"---------------------------------------\nLa división entre {num1} y {num2} es: {resultado}")
    else:
        print("No se puede dividir por cero.")


def menu():
    while True:
        opcion = (input("\n------ MENU ------- \nIngresa qué operación desea realizar del 1 al 5:\n1. Sumar\n2. Restar\n3. Multiplicar\n4.Dividir\n5. Salir\n\n"))

        if opcion == "1":
            sumar()
        elif opcion == "2":
            restar()
        elif opcion == "3":
            multiplicar()
        elif opcion == "4":
            dividir()
        elif opcion == "5":
            exit
            break
        else:
            print("Opción inválida, por favor intente nuevamente.")

menu()