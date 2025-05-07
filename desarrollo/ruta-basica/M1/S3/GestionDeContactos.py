class colors:
    reset = '\033[0m'
    bold = '\033[01m'
    
    # colores
    red = '\033[31m'
    green = '\033[32m'
    blue = '\033[34m'
    purple = '\033[35m'
    cyan = '\033[36m'
    yellow = '\033[93m'
    lightblue = '\033[94m'
    lightcyan = '\033[96m'

contactos = {
    "sergio": "3001436447",
    'orianna': "7657576765"
}

while True:
    print(f"\n{colors.bold}{colors.blue}---AGENDA DE CONTACTOS---{colors.reset}\n{colors.yellow}1.{colors.reset}Agregar nuevo contacto\n{colors.yellow}2{colors.reset}.Lista de contactos\n{colors.yellow}3.{colors.reset}Buscar un contacto por nombre\n{colors.yellow}4.{colors.reset}Salir\n")
    opcion = input("Elige una opción del 1 al 4: ")
    if opcion == "1":
        while True:
            nombre = (input("Ingresa el nombre del nuevo contacto: "))

            while True:
                try:
                    numero_telefono = int(input("Ingrese el número de contacto: "))
                    if numero_telefono>0:
                        break
                    else:
                        print("El numero es inferior a 0, intente de nuevo")
                except ValueError:
                    print("Entrada inválida. por favor ingrese un numero.")

            contactos[nombre] = numero_telefono #Guardo el contacto, uso nombre como clave y lo otro como valor

            eleccion = input("¿Desea agregar otro contacto?(s/n): ")
            if eleccion == "n":
                break


    elif opcion == "2":
        print("\n---AGENDA DE CONTACTOS---")
        for nombre in contactos: #Hago un buble en contactos y cada clave se guarda en nombre.
            print (f"\nNombre: {nombre}   Número de contacto: {contactos[nombre]}")
    
    elif opcion == "3":
        buscar = input("Ingrese el nombre del contacto que quiere buscar: ")
        for nombre in contactos:
            if buscar == nombre:
                print(f"\nNombres: {nombre} Número de contacto: {contactos[nombre]}")


    elif opcion == "4":
            print("Hasta luego.....")
            break

