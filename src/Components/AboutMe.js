import {Carousel} from 'flowbite-react';
const AboutMe = () => {
    let images = [
        {url:'https://source.unsplash.com/random/200*200/?'},
        {url:'https://source.unsplash.com/random/200*200/?'},
        {url:'https://source.unsplash.com/random/200*200/?'},
    ]

    return (
       <section className="h-56 sm:h-64 xl:h-80 2xl:h-96">
           <Carousel>
               {images.map((v,i) => {
                   return(
                       <img src={`${v.url}${i}`} className={'object-cover'} alt="carousel image" />
                   );
               })}
           </Carousel>
       </section>
    )
}

export default AboutMe;