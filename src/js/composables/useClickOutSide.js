export function useClickOutSide (el, callback_fn) {
    let listener = (e) => {
        if (e.target == el) {
            return 
        }

        if (typeof callback_fn == 'function') {
            callback_fn();
        }
    }

    onMounted(() => {
        window.addEventListener('click', listener)
    }),
    onBeforeMount(() => {
        window.removeEventListener('click', listener)
    }),
    
    return listener;
}