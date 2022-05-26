from flask import Flask
app=Flask(__name__) #__name__代表目前執行的模組

@app.route("/")
def home():
    return "Peter你好爛"



if __name__=="__main__": #如果以主程式執行
    app.run() #立即啟動伺服器