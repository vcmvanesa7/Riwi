
print("---------SISTEMA DE VALIDACIÓN DE PRODUCTOS-----------")
print("Ingresa el nombre de tus productos uno a uno y escribe fin al terminar.")
productos = []

while True:
    nombre = input("Nombre del producto (o escribe 'fin' para terminar): ")
    if nombre.lower() == 'fin':
        break

    while True:
        try:
            precio = float(input("Precio unitario: "))
            if precio <= 0:
                print("El precio debe ser mayor a cero.")
                continue
            break
        except ValueError:
            print("Por favor, ingresa un número válido para el precio.")

    while True:
        try:
            cantidad = int(input("Cantidad: "))
            if cantidad <= 0:
                print("La cantidad debe ser mayor a cero.")
                continue
            break
        except ValueError:
            print("Por favor, ingresa un número válido para la cantidad.")

    while True:
        try:
            descuento = float(input("Ingresa el  descuento (%): "))
            if descuento < 0 or descuento > 100:
                print("El descuento debe estar entre 0 y 100.")
                continue
            break
        except ValueError:
            print("Por favor, ingresa un número válido para el descuento.")

    subtotal = precio * cantidad
    descuento_aplicado = subtotal * (descuento / 100)
    total = subtotal - descuento_aplicado

    productos.append({
        'nombre': nombre,
        'precio': precio,
        'cantidad': cantidad,
        'descuento': descuento,
        'subtotal': subtotal,
        'total': total
    })

# Imprimir factura
print("\n----------- FACTURA -----------")
total_general = 0

for i, producto in enumerate(productos):
    print(f"\nProducto #{i+1}: {producto['nombre']}")
    print(f"  Precio unitario: ${producto['precio']:.2f}")
    print(f"  Cantidad: {producto['cantidad']}")
    print(f"  Subtotal: ${producto['subtotal']:.2f}")
    print(f"  Descuento: {producto['descuento']}%")
    print(f"  Total con descuento: ${producto['total']:.2f}")
    total_general += producto['total']

print("\n-------------------------------")
print(f"TOTAL GENERAL A PAGAR: ${total_general:.2f}")
