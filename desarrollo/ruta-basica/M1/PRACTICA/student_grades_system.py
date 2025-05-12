
def add_student(students):
    name = input("Enter student name: ").strip().title()
    if name in students:
        print("Student already exists.")
        return
    while True:
        try:
            grade = float(input("Enter student grade (0-100): "))
            if 0 <= grade <= 100:
                students[name] = grade
                print("Student added successfully.")
                break
            else:
                print("Grade must be between 0 and 100.")
        except ValueError:
            print("Invalid input. Please enter a number.")

def search_student(students):
    name = input("Enter student name to search: ").strip().title()
    if name in students:
        print(f"{name}'s grade: {students[name]}")
    else:
        print("Student not found.")

def update_grade(students):
    name = input("Enter student name to update: ").strip().title()
    if name in students:
        while True:
            try:
                grade = float(input("Enter new grade (0-100): "))
                if 0 <= grade <= 100:
                    students[name] = grade
                    print("Grade updated successfully.")
                    break
                else:
                    print("Grade must be between 0 and 100.")
            except ValueError:
                print("Invalid input. Please enter a number.")
    else:
        print("Student not found.")

def delete_student(students):
    name = input("Enter student name to delete: ").strip().title()
    if name in students:
        del students[name]
        print("Student deleted.")
    else:
        print("Student not found.")

def list_students(students):
    if not students:
        print("No students in the system.")
        return
    print("\nList of Students:")
    for name, grade in students.items():
        print(f"{name}: {grade}")

def show_statistics(students):
    if not students:
        print("No students in the system.")
        return
    grades = list(students.values())
    average = sum(grades) / len(grades)
    max_grade = max(grades)
    min_grade = min(grades)
    best_students = [name for name, grade in students.items() if grade == max_grade]
    worst_students = [name for name, grade in students.items() if grade == min_grade]
    print(f"Class average: {average:.2f}")
    print(f"Highest grade: {max_grade} - Student(s): {', '.join(best_students)}")
    print(f"Lowest grade: {min_grade} - Student(s): {', '.join(worst_students)}")

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
