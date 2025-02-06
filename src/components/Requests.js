import { toValue } from "vue"
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
        "count":count? toValue(count):"",
        "page": page? toValue(page):"",
        "federal_district_id":districtId? toValue(districtId):"",
        "region_id":regionId? toValue(regionId):"",
        "updated_at":updatedAt? toValue(updatedAt):"",
        "download":download? toValue(download):""
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