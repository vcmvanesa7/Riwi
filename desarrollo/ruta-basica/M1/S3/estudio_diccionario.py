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
persona2={
    "nombre":"Alejandra",
    "edad": 24,
    "ciudad":"medellín"
}



#Diccionarios anidados
datos = {
    "Andres": { 
        "nombre":"Andres Restrepo",
        "edad" : 32,
        "cedula" : 1125587458,
        "correo" : "andres32@gmail.com",
        "gustos" : {
            "color" : "Azul",
            "comida" : "sushi",
            "mascota_fav" : "perro",
            "hobbies" : {
                "deporte" : "natacion",
                "musica" : "Rock",
                "genero_literario" : "Drama",
                "genero_cine" : "Ciencia ficción"
                }
            }
        },

    "Dana": {
        "nombre":"dana",
        "edad" : 25,
        "cedula" : 1187421958,
        "correo" : "danita01@gmail.com"
    }
    
}
print (datos["Andres"]["gustos"]["hobbies"]["genero_cine"]) #Acceder a elementos específicos
print(len(datos)) #conocer cantidad de elementos de un diccionario
hobbies = datos["Andres"]["gustos"]["hobbies"] #Guardar en una variable parte del diccionario si voy a acceder muchas veces a ella.
print(hobbies["genero_literario"])
print(type(datos)) #mostrar tipo de dato (dict), para diccionarios.
print(datos.keys()) #return all the keys in the dictionary.
datos["Dana"]["hobbie"] = "Surf" #Agregar un elemento
print(datos["Dana"]["hobbie"])
print(datos.values())
datos["Andres"]["gustos"]["hobbies"]["genero_cine"] = "Romance"
print(datos["Andres"]["gustos"]["hobbies"]["genero_cine"])
print(datos["Andres"].items())


#Check if key exists
if "tennis" in datos:
    print ("Se encuentra en el diccionario")
else:
    print ("No se encuentra en el diccionario")
#diccionarios en listas


datos["Dana"].update({"nombre":"Dana Paola"}) #Hacer cambios con (.update)
print(datos["Dana"]["nombre"])
