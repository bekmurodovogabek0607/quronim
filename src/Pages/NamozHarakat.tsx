
export interface DuoTextMp3{
    name?:string
    text?:string[]
    Mp3?:string
}
export interface NamozHarakat{
    name:string,
    harakat:string,
    imgSrc?:string,
    textBefore?:string[],
    textAfter?:string[],
    Duo?:DuoTextMp3[]
}

export const Harakatlar:NamozHarakat[]=[
    {name:'Bomdot',harakat:'Niyat',textBefore:['Bomdot namozi ikki rakat sunnat ikki rakat farzdan oborat','Bomdot namozining ikki rakat sunnati quyidagilardan iborat','Alloh roziligi uchun Qqibla tomonga yuzlanib bugungi bomdot namozining ikki rakar sunnatini oqishni niyat qildim'] ,imgSrc:"https://image.winudf.com/v2/image1/dXouYXJzbG9uLm5hbW96X3NjcmVlbl81XzE2Mjg2ODI0MDhfMDkz/screen-5.webp?fakeurl=1&type=.webp"},
    {name:'Bomdot',harakat:'Qavma',textBefore:['Bomdot namozi ikki rakat sunnat ikki rakat farzdan oborat','Bomdot namozining ikki rakat sunnati quyidagilardan iborat','Alloh roziligi uchun Qqibla tomonga yuzlanib bugungi bomdot namozining ikki rakar sunnatini oqishni niyat qildim'] ,imgSrc:"https://image.winudf.com/v2/image1/dXouYXJzbG9uLm5hbW96X3NjcmVlbl81XzE2Mjg2ODI0MDhfMDkz/screen-5.webp?fakeurl=1&type=.webp"},


]

export function ChangeNamoz(name:string,Namoz:string[]):NamozHarakat[]{
    const respons:NamozHarakat[]=[]
    for (let i = 0; i < Namoz.length; i++) {
        for (let k = 0; k < Harakatlar.length; k++) {
           if(name==Harakatlar[k].name && Namoz[i]==Harakatlar[k].harakat){
            respons.push(Harakatlar[k])
           }
            
        }
        
    }
    return respons

}