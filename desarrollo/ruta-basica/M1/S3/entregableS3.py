# una tienda que desea mejorar la gestión de su inventario digital
#añadir, consultar, actualizar y eliminar productos,calcular el valor total del inventario. 

#1.Añadir productos (nombre, precio y cantidad disponible) almacenada y que permita aumentar inventario.
#MUSIC STORE professional
# Colores para mejorar legibilidad en la consola
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


inventory = [
    {"name": "Electric Bass - Ibanez", "quantity": 25, "price": 671.40},
    {"name": "drum Sets - Junior", "quantity": 74, "price": 113.40},
    {"name": "drum Sets - Pro", "quantity": 7, "price": 419.30},
    {"name": "Monzani Acoustic Violin", "quantity": 15, "price": 154.20},
    {"name": "Yamaha Electric Violin", "quantity": 5, "price": 923.50},
    {"name": "Monzani Saxophone-Red Copper", "quantity": 12, "price": 495.70},   
]

def addProduct ():
    while True:
            print(f"\n{colors.blue}--- {colors.yellow}Welcome to the 'Music Store'{colors.reset} {colors.blue}---{colors.reset}")
            name = input(f"\nWrite the name of the product:\n{colors.yellow}>{colors.reset}  ").strip()
            if name:
                break
            else:
                print(f"Please enter a {colors.red}valid{colors.reset} product name.")

    while True:
        try:
            price = float(input(f"Enter the price of the product: {colors.blue}(Example. '17.50'){colors.reset}: "))
            if price <0:
                print(f"{colors.red}¡Invalid Number!{colors.reset}, please try with a positive number.")
                continue
            else:
                break
        except ValueError:
            print(f"{colors.red}¡INVALID ENTER,{colors.reset} PLEASE TRY AGAIN!")


    while True:
        try:
            quantity = int(input(f"Enter the available units: {colors.yellow}(Example. '3'){colors.reset}: "))
            if quantity <0:
                print(f"{colors.red}¡Invalid Number!{colors.reset}, please try with a positive number.")
                continue
            else:
                break
        except ValueError:
            print(f"¡{colors.red}INVALID ENTER,{colors.reset} PLEASE TRY AGAIN!")


    instrumento = {
        "name": name,
        "price" : price,
        "quantity" : quantity
        }
    
    inventory.append(instrumento)
    print("\n¡instrument Added successfully!\n")
    print (inventory)

#2 Consultar productos: buscar un producto por su nombre y obtener detalles como su precio y cantidad disponible
#Si el producto no está en el inventario, se debe notificar adecuadamente

def searcProduct():

    criterion = input("\nEnter the name of the product to search: ").lower().strip()
    found = [] 

    for product in inventory: 
        if criterion in product['name'].lower():
            found.append(product)
    if found:
        print(f"\n{colors.blue}...Products found...{colors.reset}")
        for i in found:                        
                print(f"Nombre: {i['name']} | Price: ${i['price']} | quantity: {i['quantity']} ")
    else: print("¡NO matches!")


#3 Actualizar precios:
#permitir al usuario seleccionar un producto e introducir un nuevo precio, 
# asegurando que este se actualice correctamente en el inventario.
def updateProduct():
    product_name = input(f"\nEnter the name of the product to {colors.blue}update {colors.reset}:\n{colors.yellow}>{colors.reset} ").lower().strip()
    found = False

    for product in inventory:
        if product_name in product["name"].lower():
            print(f"\nCurrent data {colors.yellow}→{colors.reset}Name: {product['name']} {colors.yellow}|{colors.reset} Price: ${product['price']} {colors.yellow}|{colors.reset} Quantity: {product['quantity']}")

            # Actualizar nombre
            new_name = input(f"{colors.blue}Enter new name{colors.reset} (leave blank to keep current):\n{colors.yellow}>{colors.reset} ").strip()
            if new_name:
                product["name"] = new_name

            # Actualizar precio
            while True:
                new_price = input(f"Enter new price (leave blank to keep current): \n{colors.yellow}>{colors.reset}").strip()
                if new_price == "":
                    break
                try:
                    new_price = float(new_price)
                    if new_price < 0:
                        print(f"Price must be {colors.yellow}positive.{colors.reset}")
                    else:
                        product["price"] = new_price
                        break
                except ValueError:
                    print(f"{colors.red}Invalid input.{colors.reset} Please enter a valid price.")

            # Actualizar cantidad
            while True:
                new_quantity = input(f"Enter new quantity (leave blank to keep current): \n{colors.yellow}>{colors.reset}").strip()
                if new_quantity == "":
                    break
                try:
                    new_quantity = int(new_quantity)
                    if new_quantity < 0:
                        print("Quantity must be positive.")
                    else:
                        product["quantity"] = new_quantity
                        break
                except ValueError:
                    print(f"{colors.red}Invalid input.{colors.reset} Please enter a valid quantity.")

            print("\nProduct updated successfully!")
            print(f"Updated data → Name: {product['name']} | Price: ${product['price']} | Quantity: {product['quantity']}")
            found = True
            break

    if not found:
        print(f"¡Product {colors.red}not found{colors.reset} in the inventory!.")


#4 Eliminar productos:
#Permitir al usuario eliminar productos del inventario de manera segura

def deleteProduct():
    product_name = input("\nEnter the name of the product to delete: \n{colors.yellow}>{colors.reset}").lower().strip()
    found = False

    for product in inventory:
        if product_name in product["name"].lower():
            print(f"\nFound → Name: {product['name']} | Price: ${product['price']} | Quantity: {product['quantity']}")
            confirmation = input("Are you sure you want to delete this product? (y/n)\n{colors.yellow}>{colors.reset}: ").lower().strip()
            if confirmation == "y":
                inventory.remove(product)
                print("\n Product deleted successfully!")
            else:
                print(f"\n {colors.red}Deletion{colors.reset} {colors.yellow}canceled.{colors.reset}")
            found = True
            break

    if not found:
        print(" Product not found in the inventory.")


#Calcular el valor total del inventario:
#alcular el valor total de los productos en inventario y mostrarlo al usuario
#Para ello, utilizarás una función anónima (lambda) que facilite este cálculo.

def calculateInventoryValue():
    total_value = sum(map(lambda item: item["price"] * item["quantity"], inventory))
    print(f"\nTotal Inventory Value: ${total_value:.2f}")


# Ver lista de inventario
def viewInventory():
    if not inventory:
        print("\nThe inventory is currently empty.")
    else:
        print(f"\n{colors.blue}CURRENT INVENTORY:{colors.reset}")
        print("-" * 60)
        for i, item in enumerate(inventory, start=1):
            print(f"{i}. Name: {item['name']} | Price: ${item['price']} | Quantity: {item['quantity']}")
        print("-" * 60)


#Menu interactivo 
def menu():
    while True:
        print(f"\n {colors.yellow}>>>{colors.reset} {colors.blue}{colors.bold}MUSIC STORE - INVENTORY MENU{colors.reset} {colors.reset}{colors.yellow}<<<{colors.reset}")
        print(f"{colors.blue}{colors.bold}1.{colors.reset}{colors.reset} Add new product")
        print(f"{colors.blue}{colors.bold}2.{colors.reset}{colors.reset} Search product")
        print(f"{colors.blue}{colors.bold}3.{colors.reset}{colors.reset} Update product")
        print(f"{colors.blue}{colors.bold}4.{colors.reset}{colors.reset} Delete product")
        print(f"{colors.blue}{colors.bold}5.{colors.reset}{colors.reset} Calculate total inventory value")
        print(f"{colors.blue}{colors.bold}6.{colors.reset}{colors.reset} View all inventory")
        print(f"{colors.blue}{colors.bold}7.{colors.reset}{colors.reset} Exit")

        option = input(f"\nSelect an option {colors.yellow}(1-7){colors.reset}:\n{colors.yellow}> {colors.reset}").strip()

        if option == "1":
            addProduct()
        elif option == "2":
            searcProduct()
        elif option == "3":
            updateProduct()
        elif option == "4":
            deleteProduct()
        elif option == "5":
            calculateInventoryValue()
        elif option == "6":
            viewInventory()
        elif option == "7":
            print("\nThank you for using MUSIC STORE Inventory System. Goodbye!")
            break
        else:
            print("¡Invalid option!. Please select a number between 1 and 7.")


menu()
