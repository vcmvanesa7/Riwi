# Lista para almacenar todos los contactos
agenda = []

def mostrar_contactos():
    if not agenda:
        print("\n📭 No hay contactos guardados.")
    else:
        print("\n📇 Contactos en la agenda:")
        for i, contacto in enumerate(agenda):
            print(f"{i+1}. Nombre: {contacto['nombre']}, Celular: {contacto['celular']}, Estado Civil: {contacto['estado_civil']}, Género: {contacto['genero']}")

def agregar_contacto():
    print("\n📌 Agregar nuevo contacto:")
    nombre = input("Nombre: ")
    celular = input("Celular: ")
    estado_civil = input("Estado Civil (soltero/casado/otro): ")
    genero = input("Género (M/F/Otro): ")
    contacto = {
        "nombre": nombre,
        "celular": celular,
        "estado_civil": estado_civil,
        "genero": genero
    }
    agenda.append(contacto)
    print("✅ Contacto agregado exitosamente.")

def buscar_contacto():
    criterio = input("\n🔍 Buscar contacto por nombre o celular: ")
    encontrados = [c for c in agenda if c["nombre"] == criterio or c["celular"] == criterio]
    
    if encontrados:
        for contacto in encontrados:
            print(f"🔎 Encontrado: Nombre: {contacto['nombre']}, Celular: {contacto['celular']}, Estado Civil: {contacto['estado_civil']}, Género: {contacto['genero']}")
    else:
        print("⚠️ No se encontró ningún contacto con ese dato.")

def modificar_contacto():
    mostrar_contactos()
    if agenda:
        try:
            indice = int(input("\n✏️ Ingresa el número del contacto a modificar: ")) - 1
            if 0 <= indice < len(agenda):
                print("Deja en blanco si no deseas modificar ese campo.")
                nombre = input("Nuevo Nombre: ")
                celular = input("Nuevo Celular: ")
                estado_civil = input("Nuevo Estado Civil: ")
                genero = input("Nuevo Género: ")

                if nombre:
                    agenda[indice]['nombre'] = nombre
                if celular:
                    agenda[indice]['celular'] = celular
                if estado_civil:
                    agenda[indice]['estado_civil'] = estado_civil
                if genero:
                    agenda[indice]['genero'] = genero

                print("✅ Contacto modificado exitosamente.")
            else:
                print("❌ Número inválido.")
        except ValueError:
            print("❌ Entrada inválida.")

def eliminar_contacto():
    mostrar_contactos()
    if agenda:
        try:
            indice = int(input("\n🗑️ Ingresa el número del contacto a eliminar: ")) - 1
            if 0 <= indice < len(agenda):
                eliminado = agenda.pop(indice)
                print(f"✅ Contacto '{eliminado['nombre']}' eliminado correctamente.")
            else:
                print("❌ Número inválido.")
        except ValueError:
            print("❌ Entrada inválida.")

# Menú principal
while True:
    print("\n📒 AGENDA DE CONTACTOS")
    print("1. Agregar contacto")
    print("2. Buscar contacto")
    print("3. Mostrar todos los contactos")
    print("4. Modificar contacto")
    print("5. Eliminar contacto")
    print("6. Salir")
    
    opcion = input("Selecciona una opción: ")

    if opcion == "1":
        agregar_contacto()
    elif opcion == "2":
        buscar_contacto()
    elif opcion == "3":
        mostrar_contactos()
    elif opcion == "4":
        modificar_contacto()
    elif opcion == "5":
        eliminar_contacto()
    elif opcion == "6":
        print("👋 ¡Hasta luego!")
        break
    else:
        print("❌ Opción inválida, intenta de nuevo.")
