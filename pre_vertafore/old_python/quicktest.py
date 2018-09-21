input_string = "The quick brown fox jumps over the lazy dog"
output_string = "ehT kciuq nworb xof spmuj revo eht yzal god"

def reverse(string):
    return string[::-1]

def reverse2(string):
    new_string = ""
    for char in range(len(string)):
        new_string = string[char] + new_string 
    print new_string
    return new_string
        
        

def reverse_words_in_sentence(string):
    words_list = string.split()
    for idx in range(len(words_list)):
        words_list[idx] = reverse2(words_list[idx])
    output_string = " ".join(words_list)
    return output_string

print reverse_words_in_sentence(input_string)

print reverse_words_in_sentence(input_string) == output_string