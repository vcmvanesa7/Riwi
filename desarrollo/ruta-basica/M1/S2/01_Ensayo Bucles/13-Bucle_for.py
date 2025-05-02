#Creamos una lista vacía
my_list = [] # O también podemos declararla así: "my_list = list()

#Creamos un lista con valores iniciales
string = ["Pera","manzana","uva", "lulo"]
interger = [1,2,3,4,5]
Mix = [1, "Hola", 3.5 , True, ]

#Acceder a un elemento de una lista
print(string[0])

#Añadir un elemento a una lista
string.append("uchuba")
print(string)

#Eliminar un elemnto de una lista
interger.remove(3)
print(interger)

#Ejercicio de compras
#📝 Ejercicio: Lista de compras
#Crea una lista vacía llamada lista_compras.
#Agrega 5 productos que quieras comprar (usa .append()).
#Muestra la lista completa.
#Elimina uno de los productos con .remove().
#Muestra la lista actualizada.
#Muestra el primer y el último producto de la lista con índice.

compras = []

compras.append("Arroz")
compras.append("Jabón")
compras.append("Bocadillo")
compras.append("Atún")
compras.append("Mora")
print(compras)

compras.remove("Jabón")
print(compras)
print (compras[0])
print(compras[5])