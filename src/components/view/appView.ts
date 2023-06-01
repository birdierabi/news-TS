import News from './news/news';
import Sources from './sources/sources';
import { NewsType } from "../types/type-news";
import { SourceType } from "../types/type-source";

export class AppView {
	private news: News;

	private sources: Sources;

	constructor() {
		this.news = new News();
		this.sources = new Sources();
	}

	drawNews(data: Readonly<NewsType>): void {
		const values = data?.articles ? data?.articles : [];
		this.news.draw(values);
	}

	drawSources(data: Readonly<SourceType>): void {
		const values = data?.sources ? data?.sources : [];
		this.sources.draw(values);
	}
}

export default AppView;
