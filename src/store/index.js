import { reactive }  from 'vue';

export const store = reactive({
    //header
    headerLinks:[
        {title:'home',},
        {title:'pages'},
        {title:'courses'},
        {title:'features'},
        {title:'blog'},
        {title:'shop'},
    ], 

    //section learn about
    statics:{
        enrolled:{
            title:'enrolled learners',
            value:'126',
            unit:'+',
        },
        finished:{
            title:'finished sessions',
            value:'80',
            unit:'',
        },
        satisfaction:{
            title:'satisfaction rate',
            value:4,
            unit:'%',
        }
    }, 


    //footer
    footercontent:{
        adress:{
            title:'Adress',
            adress:'382 NE 191st St # 87394 Miami, FL 33179-3889',
            phone:'+1(305) 547-9909 (9am- 5pm EST,Monday - Friday)',
            email:'support@maxcoach.com',
            social:[
                'facebook' , 'twitter' , 'instagram' , "linkedin"
            ],
        },
        explore:{
            title:'Explore',
            linksOne:['Start here','Blog','About Us',],
            linksTow:['Success story','Courses','Contact us']
        },
        info:{
            title:'Inforamtion',
            links:[ 'Membership' , 'Purchase guide' , 'Privacy pilicy' , 'Terms of Servis' ,],
        }

    },   
    
});