def reverse_string(string):
    new_string = ""
    for idx in range(len(string)-1, -1, -1):
        new_string += string[idx]
    return new_string

print reverse_string("swag")