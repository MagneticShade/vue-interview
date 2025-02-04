const apiAdress = "https://schooldb.skillline.ru/api/"

async function GetRegions() {
    let result  = await fetch(apiAdress+"regions").then((response)=>{
        return response.json()
    })
    return  result
}

async function GetFederalDistricts(){
    let result = await fetch(apiAdress+"federalDistricts").then((response)=>{
        return response.json()
    })

    return  result
}

async function GetSchools(count,page,districtId,regionId,updatedAt,download){
    let result = await fetch(apiAdress +"schools?"+new URLSearchParams({
        "count":count? count:"",
        "page": page? page:"",
        "federal_district_id":districtId? districtId:"",
        "region_id":regionId? regionId:"",
        "updated_at":updatedAt? updatedAt:"",
        "download":download? download:""
    }).toString()).then((response)=>{
        return response.json()
    })

    return  result
}

export default {
    GetRegions,
    GetFederalDistricts,
    GetSchools,
}