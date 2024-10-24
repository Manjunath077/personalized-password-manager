
export function setData(data){
    localStorage.setItem("details",JSON.stringify(data))    
}

export let getData = JSON.parse(localStorage.getItem('details')) || []
