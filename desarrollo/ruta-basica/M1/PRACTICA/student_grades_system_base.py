
# -----------------------------
# PRUEBA DE MÓDULO PYTHON - RIWI
# SISTEMA DE GESTIÓN DE NOTAS DE ESTUDIANTES
# -----------------------------

# CASO DE USO:
# Como coordinador académico, necesitas un sistema que te permita gestionar los registros de los estudiantes de un curso.
# El sistema debe permitir agregar estudiantes con su nombre y nota, actualizar esas notas, listar todos los estudiantes,
# calcular el promedio de la clase e identificar al estudiante con la mejor y la peor nota.

# FUNCIONALIDADES:

# 1. Agregar estudiante:
#   - Solicita nombre y nota (de 0 a 100).
#   - Valida que la nota sea numérica y esté en el rango.
#   - No permitir nombres duplicados.

# 2. Buscar estudiante:
#   - Mostrar su nota si existe.
#   - Si no existe, mostrar un mensaje claro en inglés.

# 3. Actualizar nota:
#   - Permitir ingresar una nueva nota para un estudiante existente.
#   - Validar la entrada.

# 4. Eliminar estudiante:
#   - Permitir eliminar un estudiante por nombre.

# 5. Mostrar todos los estudiantes:
#   - Listar todos los nombres con sus notas.

# 6. Mostrar estadísticas:
#   - Promedio de notas
#   - Nota más alta y estudiante(s)
#   - Nota más baja y estudiante(s)

# CRITERIOS DE ACEPTACIÓN:
# - Validar entradas: que no estén vacías ni sean incorrectas.
# - Todos los mensajes deben estar en inglés.
# - Diseño modular (por funciones).
# - Usar diccionario donde la clave sea el nombre y el valor la nota.
# - El sistema debe poder probarse con al menos 5 estudiantes.
# - No usar variables globales innecesarias.

# CÓDIGO BASE (estructura mínima):

def add_student(students):
    pass

def search_student(students):
    pass

def update_grade(students):
    pass

def delete_student(students):
    pass

def list_students(students):
    pass

def show_statistics(students):
    pass

def menu():
    students = {}
    while True:
        print("\nStudent Grades System")
        print("1. Add Student")
        print("2. Search Student")
        print("3. Update Grade")
        print("4. Delete Student")
        print("5. List All Students")
        print("6. Show Statistics")
        print("7. Exit")

        option = input("Choose an option: ")
        if option == "1":
            add_student(students)
        elif option == "2":
            search_student(students)
        elif option == "3":
            update_grade(students)
        elif option == "4":
            delete_student(students)
        elif option == "5":
            list_students(students)
        elif option == "6":
            show_statistics(students)
        elif option == "7":
            print("Goodbye.")
            break
        else:
            print("Invalid option.")

menu()
