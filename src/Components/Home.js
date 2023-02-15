const Home = () => {
    let item = ['Card Title 1', 'Card Title 2', 'Card Title 3', 'Card Title 4'];
    return (
      <div className={'flex flex-wrap'}>
          {item.map((item,index)=> {
              return (
                  <section className={'flex basis-3/6'}>
                      <div className={`card rounded-lg shadow-lg mr-6 mb-12 shadow-gray-500/50 cursor-pointer hover:shadow-gray-600/100 ${index === 1 && 'mr-0'}`}>
                          <img
                              src={'https://i.pinimg.com/564x/ab/2f/a5/ab2fa599f200cb0ce19da3b2d1bbf739.jpg'}
                              className={'w-full h-80 object-cover'}
                              alt="Card" />
                          <div className={'p-8'}>
                              <h1 className={'text-5xl font-bold mb-8'}>{item}</h1>
                              <p className={'text-gray-500'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus iusto optio provident sit suscipit vero,
                                  voluptatem! Ab aliquid aut autem, consectetur consequuntur corporis cum cupiditate dicta distinctio dolor
                                  Accusamus dicta dolore earum ex iure mollitia nam nemo nulla provident, sint, tempora totam voluptatum?</p>
                          </div>
                      </div>
                  </section>
              );
          })}
      </div>
    );
}

export default Home;