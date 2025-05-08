#Agregar un contacto
agenda = []

def agregar_contacto():
    print("--- AGREGAR NUEVO CONTACTO ---")
    nombre = input("Nombre: ")
    celular = input("Celular: ")
    estado_civil = input("Estado civil (Soltero/casado/otro): ")
    genero = input("Género (M/F/Otro): ")

    contacto ={
        "nombre":nombre,
        "celular":celular,
        "estado_civil":estado_civil,
        "genero":genero,
    }
    agenda.append(contacto)
    print("¡Contacto agregado con éxito!")


#Buscar contacto por nombre o número
def buscar_contacto():
    criterio = input("Buscar contacto por nombre o celulr: ")
    encontrados = [] #Lista para guardar los contactos que coincidan

    for contacto in agenda:
        if contacto["nombre"] == criterio or contacto["celular"] == criterio:
            encontrados.append(contacto)
    if encontrados:
        print("\nContactos encontrados: ")
        for contacto in encontrados:
            print(f"Nombre: {contacto['nombre']} | Celular: {contacto['celular']} | Estado civil: {contacto['estado_civil']} | Género: {contacto['genero']}")
    else: print("NO se encontró ningún contacto con ese dato.")



#Mostrar todos los contactos
def mostrar_contactos():
    if len(agenda) == 0:
        print ("\n...NO hay contactos guardados...")
    else:
        print("\n----- Contactos en la agenda -----")
        contador = 1
        for contacto in agenda:
            print(f"{contador}. Nombre: {contacto['nombre']} | Celular: {contacto['celular']} | Estado civil: {contacto['estado_civil']} | Género: {contacto['genero']}")
            contador += 1


#Modificar un contacto en específico
def modificar_contacto():
    mostrar_contactos()

    if len(agenda) == 0:
        print ("\n...NO existe el contacto...\n")
        return
    try:
        numero_eliminar = int(input("Ingresa el número de contacto que deseas eliminar: "))
        i = numero_eliminar - 1
        if i >= 0 and i < len(agenda):
            eliminado = agenda.pop(i)
            print(f"Contacto '{eliminado['nombre']}' eliminado correctamente.")
        else:
            print("¡NÚMERO INVÁLIDO!")
    except ValueError:
        print("Entrada Inválida, Ingresa un número")