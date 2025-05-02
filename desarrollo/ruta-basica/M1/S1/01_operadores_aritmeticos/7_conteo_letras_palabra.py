#7. Letras del nombre
#Pide al usuario su nombre y muestra cuántas letras tiene.

#pedir nombre 
nombre = (input("Ingresa tu nombre: "))

#Contar letras con len y eliminar espacios con replace
nombreSinEspacio = len(nombre.replace(" ",""))

#Imprimir número de letras del nombre
print (f"Tu nombre tiene {nombreSinEspacio} letras.")
