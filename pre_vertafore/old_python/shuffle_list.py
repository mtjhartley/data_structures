import random

def shuffle_list(arr):
    for idx in range(len(arr)):
        randIdx = random.randint(0, len(arr)-1)
        temp = arr[idx]
        arr[idx] = arr[randIdx]
        arr[randIdx] = temp
    return arr

print shuffle_list([1,2,3,4,5,6,7,8])
