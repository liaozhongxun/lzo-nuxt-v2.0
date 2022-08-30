export default ({ $axios, store }) => {
    // Require 请求拦截器
    $axios.onRequest((req) => {
        req.headers['X-Access-Token'] = store.state.token;
        console.log(req, '请求拦截')
    })

    // 错误拦截
    // $axios.E

    // 响应拦截器
    $axios.onResponse((res) => {
        console.log(res, '响应拦截');
        return res.data;
    })
}