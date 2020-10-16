def text(x):
    print(x[0]);
    print(x[1]);
    print(x[2]);
#この関数をうまく消さずにコンフリクトを解消
def resolve_conflict(n):
    for i in range(n):
        print("conflict解消！")

def main(n):
    for i in range(n):
        print("hello world")

if __name__ == "__main__":
    main(3)
    text('KIT')
    
    resolve_conflict(3)    

