let defaultCity="上海"
try{
    if(localStorage.getItem('city')){
        defaultCity=localStorage.getItem('city')
    }
    
}catch(e){

}
export default {
    city:defaultCity  //注意用localstore 最好配合try catch 使用 因为有些浏览可能会抛出异常
}