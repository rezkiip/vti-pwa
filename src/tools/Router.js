import router from '../router';

export default {
    redirect(url) {
        router.push(url).catch(() => {});
    },
    redirectWithParams(name, params) {
        router.push({
            name, params
        }).catch(() => {})
    },
    back() {
        router.go(-1)
    }
}