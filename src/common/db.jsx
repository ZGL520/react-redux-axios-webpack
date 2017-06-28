const isMock = false;
function getUrl(obj){
    if(isMock){
        return obj.mockUrl;
    }else{
        return obj.url;
    }
}
export default {
    queryPosts: getUrl(
        {
            mockUrl: '/mock/queryPost.json',
            url: '/real/query.php',
            method: 'post',
        }
    ),
}