import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsType } from "../types/type-news";
import { SourceType } from "../types/type-source";

class App {
    private controller: AppController;

    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sources = <HTMLElement>document.querySelector('.sources');
        sources.addEventListener('click', (e: Event) => this.controller.getNews(e, (data: NewsType) => {
            this.view.drawNews(data);
        }));
        this.controller.getSources((data: SourceType) => this.view.drawSources(data));
    }
}

export default App;
