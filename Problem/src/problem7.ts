{
    const logString = (str: unknown) : any=>{
        if(typeof str === "string"){
            return str
        }else{
            return "This is not a string"
        }
    }

    console.log(logString("amar name"))
    console.log(logString(96))
}