'use server'

import fs from 'fs';

export default abstract class DataService<EntityType>{
    private dataStore:string;

    constructor(dataStore:string){
        this.dataStore=dataStore;
    }

    abstract getId(rec:EntityType):number;

    private readData = ():EntityType[] => {
        return JSON.parse(fs.readFileSync(this.dataStore,'utf8'));
    }
    
    private saveData = (data:EntityType[]):void => {
        fs.writeFileSync(this.dataStore, JSON.stringify(data));
    }
    
    getAll = ():EntityType[] => {
        return this.readData();
    }
    
    getById = (id:number):EntityType|undefined => {
        let data = this.readData();
        return data.find(rec => this.getId(rec) === id);
    }
    
    add = (rec:EntityType):EntityType => {
        let data = this.readData();
        data.push(rec);
        this.saveData(data);
        return rec;
    }
    
    replace = (rec:EntityType):EntityType => {        
    
        let data = this.readData();
    
        let index = data.findIndex(r => this.getId(r) == this.getId(rec));
    
        if (index > -1) {
            data[index] = rec;
            this.saveData(data);            
        }else{
            throw "No Such Record Found To Update";
        }
    
        return data[index];
    }
    
    deleteById = (id:number):boolean =>{
        let isDeleted = false;
    
        let data = this.readData();
        let index = data.findIndex(r => this.getId(r)===id);
    
        if (index > -1) {
            data.splice(index, 1);
            this.saveData(data);
            isDeleted=true;
        } 
    
        return isDeleted;
    }
}


