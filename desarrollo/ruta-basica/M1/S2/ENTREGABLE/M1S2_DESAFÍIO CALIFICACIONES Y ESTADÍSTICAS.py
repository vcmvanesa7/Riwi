#Entrenamiento M1S2 "Desafío de calificaciones y estadísticas"
#1 ENTRADA DE DATOS
while True:
    try:
        calificacion = float(input("\nIngresa una calificación de 0 a 100: "))
        #Validamos que esté en el rango permitido
        if 0 <= calificacion <= 100:
            print(f"La calificación que ingresaste es: {calificacion}")
            break #Salimos del ciclo si es válido
        else:
            print("La calificación debe estar entre '0' y '100'. ")
    except ValueError:
        print("Entrada no válida. Debes ingresar un número")
        
#2 EVALUAMOS ESTADO DE APROBACIÓN
if calificacion >= 70:
    print("¡FELICIDADES! HAS APROBADO.\n")
else:
    print ("LO SENTIMOS ¡HAS REPROBADO!\n")


#3 CALCULAR EL PROMEDIO
#Ingreso y validación de lista de calificaciones
notas_validas = []
notas_invalidas = []

while True:
    entrada = input("Ingresa una lista de calificaciones separadas por comas (ej. 80,90,100): ")
    lista_separada = entrada.split(",")
    print(f"Tus notas ingresadas son: {lista_separada}")

    for nota in lista_separada:
        nota = nota.strip()
        try:
            numero = float(nota)
            if 0 <= numero <= 100:
                notas_validas.append(numero)
            else:
                notas_invalidas.append(nota)
        except ValueError:
            notas_invalidas.append(nota)

    # Preguntar si desea seguir agregando más calificaciones
    continuar = input("\n¿Deseas ingresar más calificaciones? (si/no): ").lower()
    if continuar != "si":
        break

# Mostrar resultados finales
if notas_invalidas:
    print("Estas entradas son inválidas y no se tuvieron en cuenta:", " , ".join(notas_invalidas))

if notas_validas:
    promedio = sum(notas_validas) / len(notas_validas)
    print(f"Las calificaciones ingresadas válidas son: {notas_validas}")
    print(f"El promedio de tus calificaciones válidas es: {promedio:.2f}\n")
else:
    print("\nNo se ingresaron calificaciones válidas.")



#4 CONTAR CALIFICACIONES MAYORES
valor_comparar = input("\nIngresa un valor para comparar: ")

if valor_comparar.isdigit():
    valor_comparar = int(valor_comparar)
    i = 0
    contador_mayores = 0
    while i < len(notas_validas):
        if notas_validas[i] > valor_comparar:
            contador_mayores += 1
        i += 1
    print(f"Hay {contador_mayores} calificaciones mayores que {valor_comparar}.")
else:
    print(" Valor inválido para comparar.")


#5 VERIFICAIÓN Y CONTEO CON BREAK Y CONTINUE
especifica = input("\nIngresa una calificación específica para buscar en la lista: ")

if especifica.isdigit():
    especifica = int(especifica)
    contador = 0
    for nota in notas_validas:
        if nota < 0 or nota > 100:
            continue  # Ignora calificaciones inválidas (aunque ya están filtradas)
        if nota == especifica:
            contador += 1
        if contador > 5:
            print("Apareció más de 5 veces, deteniendo búsqueda.")
            break
    if contador == 0:
        print(f"La calificación {especifica} no está en la lista.\n")
    else:
        print(f"La calificación {especifica} aparece {contador} veces.\n")
else:
    print("Entrada inválida.")