def pyramid(N, i = 0): 
    if N > 0: 
        print (N - 1) * ' ' + '*' * (i * 2 + 1) 
        pyramid(N - 1, i + 1)

pyramid(4)
pyramid(5)




def left_align_pyramid(base_size):
    row = 1
    while row <= base_size:
        col = 1 
        while col <= row:
            print "X",
            col += 1
        
        print ''
        row += 1


def left_align_pyramid_better(base_size):
    for i in range(1, base_size+1):
        new_str = ""
        for j in range(i):
            new_str += "x"
        print new_str
left_align_pyramid(3)

left_align_pyramid_better(3)