while True:
    try:
        edad = int(input("¿cuántos años tienes?: "))
        if edad < 0:
            print("Debe introducir un valor correcto, debe ser entero positivo")
            continue #Vuelve al inicio del ciclo (Pide la edad otra vez)

        elif  edad >= 18:
            print("¡Felicidades, eres mayor de edad!.")
        elif edad == 17:
            print("Sólo te falta un año para ser mayor de edad.")
        else: 
            print ("Lo sentimos, eres menor de edad")
    
        break #Rompe el ciclo, sólo si la edad fue válida

    except ValueError:
        print("Por favor, introduce un número válido (por ejemplo, 18).")

    finally:
        print("Has finalizado el proceso")
        print()

    while True: 
        repetir = input("¿Deseas intentarlo de nuevo (si/no): ").strip().lower()
        if repetir == "si":
            break
        elif repetir == "no":
            print("Gracias por usar el programa, ¡hasta pronto!")
            exit()
        else:
            print("Por favor responde sólo con 'si' o 'no'.")
