# Desafío de Calificaciones y Estadísticas - Nivel Principiante

# Paso 1: Determinar el estado de aprobación
calificacion = input("1️⃣ Ingresa una calificación (0 a 100): ")

if calificacion.isdigit():
    calificacion = int(calificacion)
    if 0 <= calificacion <= 100:
        if calificacion >= 60:
            print("✅ El estudiante ha APROBADO.")
        else:
            print("❌ El estudiante ha REPROBADO.")
    else:
        print("⚠️ La calificación debe estar entre 0 y 100.")
else:
    print("❌ Entrada inválida. Solo se permiten números.")

# Paso 2: Ingresar lista de calificaciones con opción de repetir si hay errores
lista_calificaciones = []
while True:
    entrada = input("\n2️⃣ Ingresa una lista de calificaciones separadas por comas (0 a 100): ")

    errores = False  # Bandera para saber si hubo algún error
    for valor in entrada.split(","):
        valor = valor.strip()
        if valor.isdigit():
            numero = int(valor)
            if 0 <= numero <= 100:
                lista_calificaciones.append(numero)
            else:
                print(f"⚠️ La calificación {numero} está fuera de rango y será ignorada.")
                errores = True
        else:
            print(f"❌ '{valor}' no es un número válido y será ignorado.")
            errores = True

    print("\n✅ Lista actual de calificaciones válidas:", lista_calificaciones)

    if errores:
        repetir = input("\n¿Deseas ingresar más calificaciones? (s/n): ")
        if repetir.lower() != "s":
            break
    else:
        break

# Paso 3: Calcular el promedio
suma = 0
for nota in lista_calificaciones:
    suma += nota

if len(lista_calificaciones) > 0:
    promedio = suma / len(lista_calificaciones)
    print("📊 El promedio de las calificaciones es:", promedio)
else:
    print("⚠️ No hay calificaciones válidas para calcular promedio.")

# Paso 4: Contar calificaciones mayores que un valor específico (usando while)
valor_comparar = input("\n3️⃣ Ingresa un valor para comparar: ")

if valor_comparar.isdigit():
    valor_comparar = int(valor_comparar)
    i = 0
    contador_mayores = 0
    while i < len(lista_calificaciones):
        if lista_calificaciones[i] > valor_comparar:
            contador_mayores += 1
        i += 1
    print(f"🔎 Hay {contador_mayores} calificaciones mayores que {valor_comparar}.")
else:
    print("❌ Valor inválido para comparar.")

# Paso 5: Verificar y contar calificación específica con break y continue
especifica = input("\n4️⃣ Ingresa una calificación específica para buscar en la lista: ")

if especifica.isdigit():
    especifica = int(especifica)
    contador = 0
    for nota in lista_calificaciones:
        if nota < 0 or nota > 100:
            continue  # Ignora calificaciones inválidas (aunque ya están filtradas)
        if nota == especifica:
            contador += 1
        if contador > 5:
            print("⚠️ Apareció más de 5 veces, deteniendo búsqueda.")
            break
    if contador == 0:
        print(f"🔍 La calificación {especifica} no está en la lista.")
    else:
        print(f"✅ La calificación {especifica} aparece {contador} veces.")
else:
    print("❌ Entrada inválida.")
