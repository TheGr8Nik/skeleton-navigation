export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
    window.router = router;

    /**
     * If we return it works
     * /
    return;
    
    /**
     * If we return a promise and resolve it without delay it works
     * /
    return new Promise( function (resolve, reject) {
      resolve();
    });

    /**
     * If we return a promise and resolve it with a delay it DOES NOT work
     */
    return new Promise( function (resolve, reject) {
      setTimeout( () => {
        resolve();
      }, 1000 );
    });
  }
}
