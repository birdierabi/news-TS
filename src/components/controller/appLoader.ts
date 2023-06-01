import Loader from './loader';

enum ENV {
    baselink = 'https://newsapi.org/v2/',
    apiKey = 'c1c18643b21f4768b31c7ada1d2ce5e7',
}

class AppLoader extends Loader {
    static readonly ENV = ENV;

    constructor() {
        super(ENV.baselink, 
        {
            apiKey: ENV.apiKey
        });
    }
}

export default AppLoader;
