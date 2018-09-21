class Node:
    def __init__(self, value, pointer):
        self.pointer = pointer
        self.value = value

class Stack:
    def __init__(self):
        self.head = None
        self.size = 0
    
    def push(self, value):
        newNode = Node(value, self.head)
        self.head = newNode
        self.size += 1
        return self

    def pop(self):
        if (self.head):
            returnVal = self.head.value
            self.head = self.head.pointer
            self.size -= 1
            return returnVal
        else:
            print "self.head is empty! can't pop"
            return self
    
    def peek(self):
        print self.head.value
        return self
    
    def isEmpty(self):
        return self.head == None



s = Stack()
print s.isEmpty()
s.pop()
s.push('s')
s.push('t')
s.push('r')
print s.isEmpty()
print s.pop()
print s.size
s.peek()

def reverseStack(s):
    newStack = Stack()
    while not s.isEmpty():
        newStack.push(s.pop())
    return newStack

print "peeking now!"
reversedStack = reverseStack(s)
reversedStack.peek() # S is now the head of the stack!

def parenthesisChecker(parenString):
    s = Stack()
    balanced = True
    index = 0
    while index < len(parenString) and balanced:
        symbol = parenString[index]
        if symbol == "(":
            s.push(symbol)
        else:
            if s.isEmpty():
                balanced = False
            else:
                s.pop()
        index += 1
    
    if balanced and s.isEmpty():
        return True
    else:
        return False

print parenthesisChecker("(()()()())")
print parenthesisChecker("())()(")

def matches(open, close):
    opens = "([{"
    closes = ")]}"
    return opens.index(open) == closes.index(close)

def symbolChecker(symbolString):
    s = Stack()
    balanced = True
    index = 0
    while index < len(symbolString) and balanced:
        symbol = symbolString[index]
        if symbol in "([{":
            s.push(symbol)
        else:
            if s.isEmpty():
                balanced = False
            else:
                top = s.pop()
                if not matches(top, symbol):
                    balanced = False
        index += 1
    if balanced and s.isEmpty():
        return True
    else:
        return False

def convertToBinary(decNumber):
    remainderStack = Stack()

    while decNumber > 0:
        rem = decNumber % 2
        remainderStack.push(rem)
        decNumber = decNumber // 2

    binString = ""
    while not remainderStack.isEmpty():
        binString = binString + str(remainderStack.pop())
    return binString
print convertToBinary(42)