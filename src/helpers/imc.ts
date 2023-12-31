export type Level={
    title:string;
    color:string;
    icon: string;
    imc:  number[];
    yourImc?: number;
};


export const levels: Level[]=[
    {title:'magreza',  color:'#96A3AB' ,icon:'down' ,imc:[0, 18.5]},
    {title:'normal',   color:'#0EAD69' ,icon:'up'   ,imc:[18.6, 24.9]},
    {title:'sobrepeso', color:'#e28039' ,icon:'down' ,imc:[25, 30]},
    {title:'Obesidade',color:'#c3423f' ,icon:'down' ,imc:[30.1, 99]},
];

export const calculateImc=(weight: number, height:number)=>{
    const imc = weight/(height*height);

    for (let i in levels){
        if(imc >= levels [i].imc[0] && imc <= levels[i].imc[1])
        {
            levels[i].yourImc =imc
        return levels[i]
        }
    }
    return null
};