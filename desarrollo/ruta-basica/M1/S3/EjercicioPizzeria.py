no
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
    eleccion = int(input("Elige una opción del 1 al 4: \n"))
    
    match eleccion:
        case 1:
            print(f"\nHa elegido la pizza Napolitana.\nTotal a pagar: ${Napolitana}")
            dinero_disponible -= Napolitana
            print(f"Le queda ${round(dinero_disponible,2)}.")
            Total += Napolitana
            pedido.append(f"Pizza Napolitana ${Napolitana}")
            break
     
        case 2:
            print(f"\nHa elegido la pizza Pollo.\nTotal a pagar: ${Pollo}")
            dinero_disponible -= Pollo
            print(f"Le queda ${round(dinero_disponible,2)}.")
            Total += Pollo
            pedido.append(f"Pizza Pollo ${Pollo}")
            break
     
        case 3:
            print(f"\nHa elegido la pizza Tres Quesos.\nTotal a pagar: ${Tres_quesos}")
            dinero_disponible -= Tres_quesos
            print(f"Le queda ${round(dinero_disponible,2)}.")
            Total += Tres_quesos
            pedido.append(f"Pizza Tres Quesos ${Tres_quesos}")
            break
        
        case 4:
            print(f"\nHa elegido la pizza Mixta.\nTotal a pagar: ${mixta}")
            dinero_disponible -= mixta
            print(f"Le queda ${round(dinero_disponible,2)}.")
            Total += mixta
            pedido.append(f"Pizza Mixta ${mixta}")
            break
        
        case _:
            print("\nOpción Inválida. Seleccione una opción del 1 al 4")

while True:
    print(f"\nIngredientes extras:\n1.Queso   ${extra_queso}\n2.Tocineta  ${extra_tocineta}\n3.Peperoni   ${extra_peperoni}\n4.Queso Crema    ${extraqueso_crema}\n5.No añadir nada y pagar")
    eleccion = int(input("\n...Elige una opción de 1 al 5: "))

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
            print ("Perefecto, ¡no se añade nada extra!")
            break

        case _:
            print("\nOpción Inválida. Seleccione una opción del 1 al 5")

if Total <= dinero_inicial:
    print("\n\n---------- SU PEDIDO ----------\n")
    for i in pedido:
        print(f"-{i}")
    print(f"\nEl total de su pedido es: ${Total}.")
    print(f"Su cambio es: ${round(dinero_inicial - Total, 2)}")
    print("\nGracias por tu compra, ¡Disfrútala!\n\n")
else:
    print("\nNo tienes suficiente dinero para este pedido.\n\n")

    
# Student Grades Management System

This is a command-line Python application to manage student records. It allows you to add, search, update, and delete students, as well as list all students and show class statistics.

## Features

1. Add a student (with validation of name and grade).
2. Search for a student by name.
3. Update a student's grade.
4. Delete a student.
5. List all students with their grades.
6. Show class statistics:
   - Average grade
   - Highest grade and student(s)
   - Lowest grade and student(s)

## Input Validation

- Student names must not be empty and are case-insensitive.
- Grades must be numeric and between 0 and 100.
- Duplicate names are not allowed.
- If a student is not found, a clear message is shown.

## How to Use

1. Run the script:
```
python student_grades_system.py
```

2. Follow the on-screen menu to select an action.

## Sample Input/Output

```
Student Grades System
1. Add Student
2. Search Student
3. Update Grade
4. Delete Student
5. List All Students
6. Show Statistics
7. Exit
Choose an option: 1
Enter student name: Alice
Enter student grade (0-100): 95
Student added successfully.
```

```
Choose an option: 6
Class average: 86.75
Highest grade: 95.0 - Student(s): Alice
Lowest grade: 75.0 - Student(s): Bob
```

```
Choose an option: 2
Enter student name to search: Charlie
Student not found.
```

## Author

Created as part of a Python module test preparation