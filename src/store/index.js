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
    //section Testimonials
    testimonials:[
        {
            title:'Professional team of specialist and passionate mentors at reach',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, enim soluta mollitia nisi asperiores voluptas. Vel quis asperiores incidunt iusto expedita sit ducimus beatae, facere rerum ratione quasi veniam saepe.',
            imgUrl:'testimonial-avata-01.jpg',
            nome:'Madley pondor',
            profession:'/ IT Specialist',
            class:'testimonial-1',
        },
        {
            title:'Professional team of specialist and passionate mentors at reach',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, enim soluta mollitia nisi asperiores voluptas. Vel quis asperiores incidunt iusto expedita sit ducimus beatae, facere rerum ratione quasi veniam saepe.',
            imgUrl:'testimonial-avata-02.jpg',
            nome:'Mina Hollace',
            profession:'Freelancer',
            class:'testimonial-2',
        },
        {
            title:'Professional team of specialist and passionate mentors at reach',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, enim soluta mollitia nisi asperiores voluptas. Vel quis asperiores incidunt iusto expedita sit ducimus beatae, facere rerum ratione quasi veniam saepe.',
            imgUrl:'testimonial-avata-03.jpg',
            nome:'Adriano Celentano',
            profession:'cantante',
            class:'testimonial-3',
        },
        
    ],

     //section blogds
     dataBlogs:[
         {   
            imgURL:'artist-blog-03-480x325.jpeg',
            title:'artista',
            content:'Brush Strokes Energize trees in Paintings',
            data:'may 15, 2020',
            views:'668',
            calendarIcon: ['far', 'calendar'],
            iconviews:['far', 'eye'],
        },
        {   
            imgURL:'artist-blog-01-480x325.jpg',
            title:'artista',
            content:'Pocket-Sized Notebooks Hold Miniature Pinting',
            data:'may 15, 2020',
            views:'68',
            calendarIcon: ['far', 'calendar'],
            iconviews:['far', 'eye'],
        },
        {   
            imgURL:'artist-blog-02-480x325.jpg',
            title:'artista',
            content:'Connection between Self-Partraits and Identity',
            data:'may 15, 2020',
            views:'168',
            calendarIcon: ['far', 'calendar'],
            iconviews:['far', 'eye'],
        },

     ],

     courses:[
        {
            imgURL:'course-02-480x298.jpg',
            prezzo:40,
            content:'Learnind to Write as a Profesional Author',
            student:50,
            lessons:15, 
            calendarIcon: ['far', 'file'],
            iconviews:['far', 'user'], 
        },
        {
            imgURL:'stock-full-hd-03-480x298.jpg',
            prezzo:40,
            content:'Learnind to Write as a Profesional Author',
            student:50,
            lessons:15, 
            calendarIcon: ['far', 'file'],
            iconviews:['far', 'user'], 
        },
        {
            imgURL:'stock-full-hd-06-480x298.jpg',
            prezzo:40,
            content:'Learnind to Write as a Profesional Author',
            student:50,
            lessons:15, 
            calendarIcon: ['far', 'file'],
            iconviews:['far', 'user'], 
        },
     ],


    //footer
    footercontent:{
        adress:{
            title:'Adress',
            adress:'382 NE 191st St # 87394 Miami, FL 33179-3889',
            phone:'+1(305) 547-9909 (9am- 5pm EST,Monday - Friday)',
            email:'support@maxcoach.com',
            
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