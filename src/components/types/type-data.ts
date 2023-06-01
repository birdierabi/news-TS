import { NewsDataModel } from '../models/news-data-model';
import { SourceDataModel } from '../models/source-data-model';

type Data = {
  articles: Array<NewsDataModel>,
  sources: Array<SourceDataModel>,
}

export default Data;