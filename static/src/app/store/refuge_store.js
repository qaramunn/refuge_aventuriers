/** @odoo-module */
import { Reactive } from "@web/core/utils/reactive";
import { registry } from "@web/core/registry";

export class RefugeStore extends Reactive {
    mainScreen = { name: null, component: null };
    static serviceDependencies = [
        "orm",
    ];
    constructor() {
        super();
        this.ready = this.setup(...arguments).then(() => this);
    }

    async setup(env, { orm }) {
        this.env = env;
        this.orm = orm;

        await this.load_server_data();

        this.showScreen("MainScreen");
    }

    async load_server_data() {
        const loadedData = await this.orm.silent.call("refuge.management", "load_refuge_data", []);
        await this._processData(loadedData);
    }

    async _processData(loadedData) {
        return true // TODO: Changeme, process data
    }



    showScreen(name, props) {
        const component = registry.category("refuge_screens").get(name);
        this.mainScreen = { component, props };
    }
}

export const refugeService = {
    dependencies: RefugeStore.serviceDependencies,
    async start(env, deps) {
        return new RefugeStore(env, deps).ready;
    },
};

registry.category("services").add("refuge", refugeService);
