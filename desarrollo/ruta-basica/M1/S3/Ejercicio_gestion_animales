#listas
#1 AGREGAR ANIMAL
nombres = []
edades = []
estado_salud =[]

def agregar_animal():
    nombre = input("Ingresa el nombre del animal: ")
    edad = input("ingresa la edad del animal: ")
    salud = input ("¿Está enfermo? (si/no): ").lower()

    nombres.append(nombre)
    edades.append(edad)
    estado_salud.append(salud)

    print(f"Animal: '{nombre}' ¡Agregado correctamente!\n")


#2 ELIMINAR ANIMAL
def eliminar_animal():
    nombre = input("Ingrese el nombre del animal que desea eliminar: ")

    if nombre in nombres:
        index = nombres.index(nombre) #index=índice posición
        nombres.pop(index)  #.pop(Index)=elimina el elemento por posición de índice. (como toda la info del mismo animal en las 3 listas están en el mismo índice, se elimina todo).
        edades.pop(index)
        estado_salud.pop(index)
        print(f"El animal {nombre} ¡fue eliminado correctamente!")
    else:
        print(f"El animal {nombre}, ¡No fue encontrado en la base de datos!. ")


#3 LISTAR TODOS LOS ANIMALES REGISTRADOS
def listar_animales():
    if not nombres:
        print("No hay animales registrados.")
    else:
        print("Lista de animales registrados: \n")
        for i in range (len(nombres)):
            print(f"Nombre: {nombres[i]}        Edad:{edades[i]},       ¿Enfermo?:{estado_salud[i]}\n")


#4 Salir del menú
def menu():
        while True: 
            print("\n--------MENÚ DE GESTIÓN DE ANIMALES--------\n")
            print("1. Agregar animal")
            print("2. Eliminar animal por su nombre")
            print("3. Listar todos los animales registrados")
            print("4. Salir\n")

            opcion = input("Selecciona una opción del 1 al 4: ")
            if opcion == "1":
                agregar_animal()
            elif opcion == "2":
                eliminar_animal()
            elif opcion == "3":
                listar_animales()
            elif opcion == "4":
                print("Saliendo del programa... ¡hasta la próxima!")
                print("-------------------------------------------")
                break
            else:
                print("Opción no valida, intenta de nuevo \n")
        
menu()
