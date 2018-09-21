#sum an array recursively
def listSum(lst):
    if len(lst) == 1:
        return lst[0]
    else:
        return lst[0] + listSum(lst[1:])

print listSum([1,2,3,4,5])

#Recursion must have a base case
#Recursive algorithm must change its state and move towards the base case
#Recursive algorithm must call itself, recursively
