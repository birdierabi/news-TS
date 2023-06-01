import { Options } from "../types/type-options";

enum ErrorStatus {
    "unauthorized" = 401,
    "notFound" = 404
}

type Callback<T> = (data: T) => void;
  
class Loader {
    private options: Options<string>;

    constructor(public baseLink: string, options: Options<string>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>(
        { endpoint, options = {} }: { endpoint: string; options?: Options<string> },
        callback: Callback<T> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === ErrorStatus.unauthorized || ErrorStatus.notFound === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options<string>, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: Callback<T>, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
