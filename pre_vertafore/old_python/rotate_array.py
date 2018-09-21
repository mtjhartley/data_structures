def rotate_array(arr, k):
    if k > len(arr):
        k = k % len(arr)
    print arr[k:] + arr[:k]
    return arr[k:] + arr[:k]

myArr = [1,2,3,4,5]

rotate_array(myArr, 1)
rotate_array(myArr, 2)
rotate_array(myArr, 7)

def rotate_array2(arr, k):
    ret = [None] * len(arr)
    for i in range(len(arr)):
        # ret[(k + i) % len(arr)] = arr[i]
        ret[i] = arr[(k + i) % len(arr)]
    return ret

print rotate_array2(myArr, 1)
print rotate_array2(myArr, 2)
print rotate_array2(myArr, 7)