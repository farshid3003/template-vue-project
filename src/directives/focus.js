import Vue from 'vue';

Vue.directive('focus', {
    bind (el, binding, component) {
        el.addEventListener('focus', () => {
            component.context[binding.expression] = true;
            // dispatching click event, the focus capture prevents it firing
            function eventFire (el2, etype) {
                if (el2.fireEvent) {
                    el2.fireEvent(`on${etype}`);
                } else {
                    const evObj = document.createEvent('Events');
                    evObj.initEvent(etype, true, false);
                    el2.dispatchEvent(evObj);
                }
            }
            eventFire(el, 'click');
        });
    },
});