def sub(a,b):
    for i in range(a):
        i += 1
        b *= i 
        print(b)

def main(n):
    for i in range(n):
        print("hello world")

if __name__ == "__main__":
    main(3)
    sub(5,3)