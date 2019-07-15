let httpOwn = {
        get(url,config ={} ){
            return loadData(url);
        },
        post(url,config = {}){
            return loadData(url);
        }
    }
async function loadData(url,config = {}){
        return  {data : (await require("../data"+url+".json"))}
    }
function request(url,config = {}){
    return httpOwn.get(url).then(res=>res.data)
}

module.exports  = {
        request,
        httpOwn
    }