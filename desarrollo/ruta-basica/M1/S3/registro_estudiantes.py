estudiantes={
    "a": {"edad" : 20, "calificacion":90},
    "b": {"edad" : 21, "calificacion":80}
}

def agregar_estudiante(nombre,edad,calificacion):
    estudiantes[nombre] = {
        "edad": edad,
        "calificacion":calificacion
    }

def modificar_calificacion(nombre,calificacion):
    estudiantes[nombre]["calificacion"]=calificacion



while True:
    print("\n---LISTA DE FUNCIONES---\n1.Agregar nuevo estudiante\n2.Modificar calificación\n3.Información de estudiantes\n4.Eliminar estudiante\n5. Salir\n")
    opcion = input("Elige una opción del 1 al 5: ")
    
    if opcion == "1":
        while True:
            nombre = input("Ingresa nombre del estudiante: ")
        
            while True:
                try:
                    edad = int(input("Ingrese la edad del estudiante: "))
                    if edad>0:
                        break
                    else:
                        print("El numero es inferior a 0, intente de nuevo")
                except ValueError:
                    print("Entrada no valida. por favor ingrese un numero.")
            
            while True:
                try:
                    calificacion = float(input("Ingrese la calificación del estudiante: "))
                    if calificacion>0:
                        break
                    else:
                        print("El numero es inferior a 0, intente de nuevo")
                except ValueError:
                    print("Entrada no valida. por favor ingrese un numero.")
            agregar_estudiante(nombre,edad,calificacion)

            eleccion = input("¿Desea agregar otro estudiantes?(s/n): ")
            if eleccion == "n":
                break

    elif opcion == "2":
        print(estudiantes)
        nombre = input("Ingresa nombre del estudiante que va a modificar: ")
        calificacion = input("Ingresa la nueva calificación: ")
        modificar_calificacion(nombre,calificacion)
        
    elif opcion == "3":
        for nombre in estudiantes:
            print(f"\n---estudiantes---\n{nombre}= edad:{estudiantes[nombre]["edad"]}, calificacion: {estudiantes[nombre]["calificacion"]}")

    elif opcion == "4":
        eliminar = input("Ingrese el nombre del estudiante que desea eliminar: ")
        if eliminar in estudiantes:
            estudiantes.pop(eliminar)
            print(f"El estudiante {eliminar}, ha sido eliminado.")

    elif opcion == "5":
        print("Hasta luego.....")
        break

