def palindrome_checker(string):
    end = len(string) - 1
    for idx in range(len(string)/2):
        if string[idx] != string[end-idx]:
            return False
    return True

print palindrome_checker("tacocat")
print palindrome_checker("swagmeout")
print palindrome_checker("amanaplanacanalpanama")
