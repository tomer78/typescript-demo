/**
 * Created by tomer.a on 4/19/2016.
 */
interface JQuery {
    foo: {
        (options: any): JQuery;
        bar: <T>(input: T) => T
    }
}
