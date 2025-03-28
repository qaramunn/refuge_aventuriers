/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useRefuge } from "@refuge_aventuriers/app/store/tetras_hook";

export class ProductFormScreenFormScreen extends Component {
    static template = "refuge_aventuriers.ProductFormScreen";

    setup() {
        this.refuge = useRefuge();
    }

}

registry.category("refuge_screens").add("ProductFormScreen", ProductFormScreenFormScreen);