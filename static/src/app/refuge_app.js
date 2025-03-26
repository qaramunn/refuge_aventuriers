/** @odoo-module */

import { Transition } from "@web/core/transition";
import { MainComponentsContainer } from "@web/core/main_components_container";
import { ErrorHandler } from "@web/core/utils/components";
import { Component, onMounted, onWillStart } from "@odoo/owl";
import { useRefuge } from "@refuge_aventuriers/app/store/refuge_hook";

/**
 * Chrome is the root component of the Refuge App.
 */
export class Chrome extends Component {
    static template = "refuge_aventuriers.Chrome";
    static components = { Transition, ErrorHandler };
    setup() {
        this.refuge = useRefuge();
    }
}
