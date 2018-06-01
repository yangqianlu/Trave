export default{
    changeCity(state,city){
        state.city=city
        try{
            defaultCity=localStorage.setItem("city",city)
        }catch(e){
        
        }
        
        
    }
}