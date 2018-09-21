test1 = [3,1,6,4,2]
test2 = [3,1,6,4]

def reverse_list(arr):
    end = len(arr) - 1
    for idx in range(len(arr)/2): 
        temp = arr[idx]
        arr[idx] = arr[end-idx]
        arr[end-idx] = temp
        #print arr
    return arr

print reverse_list(test1)
print reverse_list(test2)


    