export const search=(pos:number,arr:[]):[]=>{
    return arr[pos]
}


export const validacionExist=(code:string,elem:any):boolean=>{
    if(elem["code"]===code){
        return true
    }
    else return false
}

export const changeList=(arr:[]):any=>{
    let aux:number
    let aux2:number
    const arrayNew=arr.map((list)=>{
        if(validacionExist(list["code"],list)){
            list["code"]=list["finalCode"]
        }
        
       const aux= list["finalCode"]
       list["code"]=aux
       return list
    })
    return arrayNew
}
