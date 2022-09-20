function kuid(up = false) {
    if(up == true){
        const id = Date.now().toString(18).toUpperCase()
        const kId = `kId-${id}`
        return kId
    }else{
        const id = Date.now().toString(18)
        const kId = `kId-${id}`
        return kId
    }
}
module.exports = { kuid }
