import Vue from 'vue';
import Guid from '@/mixins/guid';

Vue.directive('click-outside', {
    bind (el, binding, vNode) {
        if (el.id === undefined || el.id.length === 0) {
            el.id = Guid.methods.generateGuid();
        }

        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
            const compName = vNode.context.name;
            let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;
            if (compName) {
                warn += `Found in component '${compName}'`;
            }
            console.warn(warn);
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble;
        const handler = (e) => {
            let clickedEl = e.target;
            if (bubble || (el.id !== clickedEl.id)) {
                while (clickedEl) {
                    if (clickedEl.id === el.id) {
                        return;
                    }
                    clickedEl = clickedEl.parentElement;
                }
                binding.value(e);
            }
        };
        el.__vueClickOutside__ = handler;
        // add Event Listeners
        document.addEventListener('click', handler);
    },

    unbind (el) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
    },
});
