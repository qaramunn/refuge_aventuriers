/** @odoo-module */

import { useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";

export function useRefuge() {
    return useState(useService("refuge"));
}
