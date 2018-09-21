input_string = "The quick brown fox jumps over the lazy dog"

def reverse(s):
    return s[::-1]


def reverse_words_in_sentence(string):
    words_list = string.split()
    for idx in range(len(words_list)):
        words_list[idx] = reverse(words_list[idx])
    output_string = " ".join(words_list)
    print output_string
    return output_string


reverse_words_in_sentence(input_string)

