import AppLoader from './appLoader';
import { NewsType } from "../types/type-news";
import { SourceType } from "../types/type-source";


class AppController extends AppLoader {
    getSources(callback: (data: SourceType) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: NewsType) => void): void {
        let target = <Element>e.target;
        const newsContainer = <Element>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = <string>target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <Element>target.parentNode;
        }
    }
}

export default AppController;
