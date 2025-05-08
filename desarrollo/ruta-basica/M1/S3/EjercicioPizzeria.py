
print("\n\n-------------BIENVENIDO A VANE'S PIZZA--------------")

dinero_disponible = float(input("\nIngresa la cantidad de dinero que tienes (ej. 58.09): "))
dinero_inicial = dinero_disponible
Total = 0
pedido = []

Napolitana = 8.90
Pollo = 10.20
Tres_quesos = 11.20
mixta = 12.25

extra_queso = 3.25
extra_tocineta = 3.00
extra_peperoni = 2.25
extraqueso_crema = 2.50

while True:
    print("\n...MENÚ...\nElige tu pizza🍕\n")
    print(f"1- Napolitana - ${Napolitana}\n2- Pollo ${Pollo}\n3- Tres Quesos ${Tres_quesos}\n4- Mixta ${mixta}")
    eleccion = int(input("Elige una opción del 1 al 4: "))
    
    match eleccion:
        case 1:
            print(f"\nHa elegido la pizza 'Napolitana'.\nTotal a pagar: ${Napolitana}")
            dinero_disponible -= Napolitana
            print(f"Le queda ${round(dinero_disponible,2)}.")
            Total += Napolitana
            pedido.append(f"Napolitana ${Napolitana}")
            break
     
        case 2:
            print(f"\nHa elegido la pizza 'Pollo'.\nTotal a pagar: ${Pollo}")
            dinero_disponible -= Pollo
            print(f"Le queda ${round(dinero_disponible,2)}.")
            Total += Pollo
            pedido.append(f"Pollo ${Pollo}")
            break
     
        case 3:
            print(f"\nHa elegido la pizza 'Tres Quesos'.\nTotal a pagar: ${Tres_quesos}")
            dinero_disponible -= Tres_quesos
            print(f"Le queda ${round(dinero_disponible,2)}.")
            Total += Tres_quesos
            pedido.append(f"Tres Quesos ${Tres_quesos}")
            break
        
        case 4:
            print(f"\nHa elegido la pizza 'Mixta'.\nTotal a pagar: ${mixta}")
            dinero_disponible -= mixta
            print(f"Le queda ${round(dinero_disponible,2)}.")
            Total += mixta
            pedido.append(f"Mixta ${mixta}")
            break
        
        case _:
            print("\nOpción Inválida. Seleccione una opción del 1 al 4")

while True:
    print(f"\nIngredientes extras:\n...Elige una opción de 1 al 5...\n\n1.Queso   ${extra_queso}\n2.Tocineta  ${extra_tocineta}\n3.Peperoni   ${extra_peperoni}\n4.Queso Crema    ${extraqueso_crema}\n5.No añadir nada y pagar")
    eleccion = int(input("\nSi deseas añadir un ingrediente extra, selecciona el número del ingrediente, de lo contrario escribe '5': "))

    match eleccion:
        case 1:
            print(f"\nHa elegido 'Queso Extra'.\nTotal a pagar: ${extra_queso}")
            dinero_disponible -= extra_queso
            print(f"Le queda ${round(dinero_disponible,2)}.")
            Total += extra_queso
            pedido.append(f"Queso Extra ${extra_queso}")

        case 2:
            print(f"\nHa elegido 'Tocineta Extra'.\nTotal a pagar: ${extra_tocineta}")
            dinero_disponible -= extra_tocineta
            print(f"Le queda ${round(dinero_disponible,2)}.")
            Total += extra_tocineta
            pedido.append(f"Tocineta Extra ${extra_tocineta}")
        
        case 3:
            print(f"\nHa elegido 'Peperoni Extra'.\nTotal a pagar: ${extra_peperoni}")
            dinero_disponible -= extra_peperoni
            print(f"Le queda ${round(dinero_disponible,2)}.")
            Total += extra_peperoni
            pedido.append(f"Peperoni Extra ${extra_peperoni}")

        case 4:
            print(f"\nHa elegido 'Queso Crema Extra'.\nTotal a pagar: ${extraqueso_crema}")
            dinero_disponible -= extraqueso_crema
            print(f"Le queda ${round(dinero_disponible,2)}.")
            Total += extraqueso_crema
            pedido.append(f"Queso Crema Extra ${extraqueso_crema}")

        case 5:
            print ("\nPerefecto, ¡no se añade nada extra!")
            break

        case _:
            print("\nOpción Inválida. Seleccione una opción del 1 al 5")

if Total <= dinero_inicial:
    print("\n---------- SU PEDIDO ----------\n")
    for i in pedido:
        print(f"-{i}")
    print(f"\nEl total de su pedido es: ${Total}.")
    print(f"Su cambio es: ${round(dinero_inicial - Total, 2)}")
    print("\nGracias por tu compra, ¡Disfrútala!")
else:
    print("\nNo tienes suficiente dinero para este pedido.")

    
