import Vue from 'vue';
import { UnleashClient } from 'unleash-proxy-client';

function createClientProxy(client) {
    return new Vue.observable({
        isReady: false,
        lastUpdate: 0,
        isEnabled(toggleName) {
            return client.isEnabled(toggleName);
        },
        getVariant() {
            return client.getVariant();
        },
        getAllToggles() {
            return client.getAllToggles();
        },
        getContext() {
            return client.getContext();
        },
        updateContext(context) {
            client.updateContext(context);
        },
        setContextField(field, value) {
            client.setContextField(field, value)
        }
    });
}

export default {
    install(_, options = {}) {
        const client = new UnleashClient(options);

        const proxy = createClientProxy(client);

        client.on('ready', () => {
            proxy.isReady = true;
            proxy.lastUpdate = new Date().getTime();
        });

        client.on('update', () => {
            if(proxy.isReady) {
                proxy.lastUpdate = new Date().getTime();
            }                
        });

        Vue.prototype.$features = proxy;

        client.start();
    },
}