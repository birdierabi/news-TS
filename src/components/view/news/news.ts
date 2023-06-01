import './news.css';
import { NewsDataModel } from '../../models/news-data-model'

class News {
    draw(data: NewsDataModel[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const allNews = <HTMLElement>document.querySelector('.news');

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

        news.forEach((item: NewsDataModel, idx: number) => {
            const newsClone = <HTMLElement>newsItemTemp.content.cloneNode(true);
            const newsItem = <HTMLElement>newsClone.querySelector('.news__item');
            const newsPhoto = <HTMLElement>newsClone.querySelector('.news__meta-photo');
            const newsAuthor = <HTMLElement>newsClone.querySelector('.news__meta-author');
            const newsDate = <HTMLElement>newsClone.querySelector('.news__meta-date');

            const newsTitle = <HTMLElement>newsClone.querySelector('.news__description-title');
            const newsSource = <HTMLElement>newsClone.querySelector('.news__description-source');
            const newsContent = <HTMLElement>newsClone.querySelector('.news__description-content');
            const newsMore = <HTMLElement>newsClone.querySelector('.news__read-more a');

            if (idx % 2) newsItem.classList.add('alt');

            newsPhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            newsAuthor.textContent = item.author || item.source.name;
            newsDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsTitle.textContent = item.title;
            newsSource.textContent = item.source.name;
            newsContent.textContent = item.description;
            newsMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        allNews.innerHTML = '';
        allNews.appendChild(fragment);
    }
}

export default News;
