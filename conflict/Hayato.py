def mein(n):
    for i in range(n):
        print("Saito Hayato")

#この関数をうまく消さずにコンフリクトを解消
def resolve_conflict(n):
    for i in range(n):
        print("conflict解消！")

def main(n):
    for i in range(n):
        print("hello world")

if __name__ == "__main__":
    main(3)
    mein(5)
    resolve_conflict(3)    

