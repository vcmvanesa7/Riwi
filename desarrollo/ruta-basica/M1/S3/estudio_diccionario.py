#MÉTODOS CON DICCIONARIOS

#Keys() Accedo a lista de valores que contienen claves
persona = {
    "nombre":"Juan",
    "edad": 25,
    "altura_cm": 1.80,
    "peso_kilos": 73
}
claves = list(persona.keys()) #convertir a lista con (list(nombre.keys())
print(claves) #Imprime la lista que contiene todas las claves del diccionario.



#Ítems() Accedo a clave o valor, o las dos.
carro = {
    "marca":"Toyota",
    "modelo":"Corolla",
    "año": 2020
}
items =list(carro.items())
print(items[1])
print(items[0][1]) #accedo sólo a la clave o al valor si así lo requiero.
print(items[1][0]) #Accedo al Valor




#Values() accedo Sólo a claves
libro={
    "título":"Los 4 acuerdos",
    "Autor":"Miguel Ruiz",
    "Año_publicacion":1997,
    "Editorial":"Ediciones Urano México; Edición 28 (1 abril 2019)",
    "numero_paginas":160,
    "Idioma":"español",
    "Sinopsis":"Sé impecable con tus palabras; no te tomes nada personal, no hagas suposiciones, y haz siempre tu máximo esfuerzo."
}
valores = list(libro.values()) #Imprime sólo claves
print(valores[0])




#get(clave, valor_por_defecto)
estudiante={
    "nombre":"Lucía",
    "edad": 17,
    "carrera":"Contaduría"
}
nombre = estudiante.get(f"nombre","no se encuentra")
print(nombre)
promedio = estudiante.get(f"promedio","no se encuentra")
print(promedio) #Como promedio no existe dentro de diccionario, imprime no se encuentra


#Ciclo FOR, para iterar sobre ellos(métodos), facilitando el manejo de los diccionarios.
persona={
    "nombre":"Alejandra",
    "edad": 24,
    "ciudad":"medellín"
}
