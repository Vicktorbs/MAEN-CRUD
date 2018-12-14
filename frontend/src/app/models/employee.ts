export class Employee {

    constructor (_id = '', name = '', activity = '', production = 0) {
        this._id = _id;
        this.name = name;
        this.activity = activity;
        this.production = production;
    }

    _id: string;
    name: string;
    activity: string;
    production: number;
}
