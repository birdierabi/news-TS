import './sources.css';
import { SourceDataModel } from '../../models/source-data-model';

class Sources {
    draw(data: SourceDataModel[]): void {
        const fragment = <DocumentFragment>document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');
        const sources = <HTMLElement>document.querySelector('.sources');

        data.forEach((item): void => {
            const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);
            const sourceName = <HTMLElement>sourceClone.querySelector('.source__item-name');
            const sourceItem = <HTMLElement>sourceClone.querySelector('.source__item');

            sourceName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        sources.append(fragment);
    }
}

export default Sources;
