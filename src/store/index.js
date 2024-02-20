import { reactive }  from 'vue';

export const store = reactive({
    globalVarTest:'Variabile Globale',
    headerLinks:[
        {title:'home',},
        {title:'pages'},
        {title:'courses'},
        {title:'features'},
        {title:'blog'},
        {title:'shop'},
    ],      
    
});