let App = {  
    data() {  
        return {  
            taches : []  
        }  
    },  
    methods : {  
        addTache (event) {  
            let value = event.target.elements.tache.value;  
            this.taches.push(value);  
            value.setAttribute("done","false");
        }  ,
        Done (event) {  
        
             
            if (this.taches.hasAttributes === "false")
            {
                this.taches.setAttribute("done","true");
                this.taches.classList.add("line"); 
            }
            else 
            {
                this.taches.setAttribute("done","false");
                this.taches.classList.remove("line"); 
            }
        }
    }  
}
export { App };
