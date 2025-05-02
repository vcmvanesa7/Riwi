# 1. Acceso exclusivo al evento
# Pide la edad y el número de invitación. Muestra directamente si puede ingresar (edad > 21 y invitación == 777).
edad = int(input("Ingresa tu edad: "))
invitacion = int(input("Ingresa el número de invitación: "))
puede_ingresar = edad > 21 and invitacion == 777
print("¿Puedes ingresar al evento?", puede_ingresar)

# 2. Descuento por edad o monto
#Pide el monto total de la compra y la edad del cliente. Muestra si obtiene descuento (monto > 100 o edad > 60).
monto = float(input("Ingresa el monto total de la compra: "))
edad = int(input("Ingresa tu edad: "))
descuento = monto > 100 or edad > 60
print("¿Obtienes descuento?", descuento)

# 3. Verificación para participar en un concurso internacional
# Pide edad, país y número de documento. 
# Muestra si cumple condiciones: edad entre 18 y 30 inclusive, país distinto de "Antártida" y documento diferente de 0.
edad = int(input("Ingresa tu edad: "))
pais = input("Ingresa tu país: ")
documento = int(input("Ingresa tu número de documento: "))
participa = (18 <= edad <= 30) and pais.lower() != "antártida" and documento != 0
print("¿Cumples con las condiciones del concurso?", participa)

# 4. Evaluación académica de estudiante
# Pide dos notas. Muestra si el estudiante aprobó: ambas notas ≥ 6 y ninguna < 4.
nota1 = float(input("Ingresa la primera nota: "))
nota2 = float(input("Ingresa la segunda nota: "))
aprobado = nota1 >= 6 and nota2 >= 6 and nota1 >= 4 and nota2 >= 4
print("¿Aprobaste?", aprobado)

# 5. Conexión segura en la red
#Pide protocolo (http o https) y puerto (80 o 443). Muestra si la conexión es segura: protocolo es "https" y puerto es "443".
protocolo = input("Ingresa el protocolo (http o https): ").lower()
puerto = int(input("Ingresa el puerto (80 o 443): "))
conexion_segura = protocolo == "https" and puerto == 443
print("¿La conexión es segura?", conexion_segura)
