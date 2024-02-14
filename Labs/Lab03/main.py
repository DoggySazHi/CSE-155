# Prompt the user to input a list of numbers
numbers = input("Enter a list of numbers (separated by spaces): ").split()

# Convert the input into a list of integers
numbers = [int(num) for num in numbers]

# Insertion sort algorithm
for i in range(1, len(numbers)):
    key = numbers[i]
    j = i - 1
    while j >= 0 and numbers[j] > key:
        numbers[j + 1] = numbers[j]
        j -= 1
    numbers[j + 1] = key

# Print the sorted list
print("Sorted list: ", ", ".join(map(str, numbers)))
