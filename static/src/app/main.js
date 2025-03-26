/** @odoo-module */

import { Chrome } from "@refuge_aventuriers/app/refuge_app";
import { templates } from "@web/core/assets";
import { App } from "@odoo/owl";
import { _t } from "@web/core/l10n/translation";
import { hasTouch } from "@web/core/browser/feature_detection";
import { makeEnv, startServices } from "@web/env";
import { session } from "@web/session";


// The following is mostly a copy of startWebclient but without any of the legacy stuff
(async function startRefugeApp() {
    odoo.info = {
        db: session.db,
        server_version: session.server_version,
        server_version_info: session.server_version_info,
        isEnterprise: session.server_version_info.slice(-1)[0] === "e",
    };

    // setup environment
    const env = makeEnv();
    await startServices(env);
    // start application
    const app = new App(Chrome, {
        name: "Odoo Refuge",
        env,
        templates,
        dev: env.debug,
        warnIfNoStaticProps: true,
        translatableAttributes: ["data-tooltip"],
        translateFn: _t,
    });
    const root = await app.mount(document.body);
    const classList = document.body.classList;
    if (hasTouch()) {
        classList.add("o_touch_device");
    }
    odoo.__WOWL_DEBUG__ = { root };
})();
