import Work from '@/components/work/Work';
import React from 'react';


const Porfolio = () => {

    const works = [
        {
            id: 1,
            title: "E-Commerce App",
            discription: "This product is about damn things which will make uou look cool and interesring, which is actually not true because nothing will make you look cool, the reality is that noone gives a chit about you!",
            imgurl: "https://cdn.discordapp.com/attachments/1008571084225912872/1116687522660094133/henri_None_fdff5b80-1045-4650-966b-eb725feda5f5.png",
            url: 'portfolio/webapp'
        },
        {
            id: 2,
            title: "E-Commerce App",
            discription: "This product is about damn things which will make uou look cool and interesring, which is actually not true because nothing will make you look cool, the reality is that noone gives a chit about you!",
            imgurl: "https://cdn.discordapp.com/attachments/1008571084225912872/1116687522660094133/henri_None_fdff5b80-1045-4650-966b-eb725feda5f5.png",
            url: 'portfolio/webapp'
        },
        {
            id: 3,
            title: "E-Commerce App",
            discription: "This product is about damn things which will make uou look cool and interesring, which is actually not true because nothing will make you look cool, the reality is that noone gives a chit about you!",
            imgurl: "https://cdn.discordapp.com/attachments/1008571084225912872/1116687522660094133/henri_None_fdff5b80-1045-4650-966b-eb725feda5f5.png",
            url: 'portfolio/webapp'
        },
        {
            id: 4,
            title: "E-Commerce App",
            discription: "This product is about damn things which will make uou look cool and interesring, which is actually not true because nothing will make you look cool, the reality is that noone gives a chit about you!",
            imgurl: "https://cdn.discordapp.com/attachments/1008571084225912872/1116687522660094133/henri_None_fdff5b80-1045-4650-966b-eb725feda5f5.png",
            url: 'portfolio/webapp'
        },
        {
            id: 5,
            title: "E-Commerce App",
            discription: "This product is about damn things which will make uou look cool and interesring, which is actually not true because nothing will make you look cool, the reality is that noone gives a chit about you!",
            imgurl: "https://cdn.discordapp.com/attachments/1008571084225912872/1116687522660094133/henri_None_fdff5b80-1045-4650-966b-eb725feda5f5.png",
            url: 'portfolio/webapp'
        },
        {
            id: 6,
            title: "E-Commerce App",
            discription: "This product is about damn things which will make uou look cool and interesring, which is actually not true because nothing will make you look cool, the reality is that noone gives a chit about you!",
            imgurl: "https://cdn.discordapp.com/attachments/1008571084225912872/1116687522660094133/henri_None_fdff5b80-1045-4650-966b-eb725feda5f5.png",
            url: 'portfolio/webapp'
        },
    ]

    return (
        <div>
            <h1 className='font-bold text-4xl p-4 m-4'>Our Work</h1>
            
            <div className="grid grid-cols-3 gap-4">
                {works.map(work => (
                    <Work className='p-4' 
                    key={work.id} 
                    imgurl={work.imgurl}
                    title={work.title}
                    discription={work.discription}
                    url={work.url}
                    />
                ))}
            </div>
            
            
        </div>
    );
}

export default Porfolio;
