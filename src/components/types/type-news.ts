import { NewsDataModel } from '../models/news-data-model';

export type NewsType = {
	articles: NewsDataModel[],
	status: string,
	totalResults: number
}