import React from 'react'
import Prodact from "./Prodact.json"

export function GetAllProdact() {
    return Promise.resolve(Prodact)
}

export function GetProdact(id) {
      
        const produit = Prodact.find(x =>x.id==id)
        
    return Promise.resolve(produit)
     
}
